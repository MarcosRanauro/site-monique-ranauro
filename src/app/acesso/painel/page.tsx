"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCSV(contacts: Contact[]) {
  const header = ["ID", "Nome", "E-mail", "Telefone", "Mensagem", "Data"];
  const rows = contacts.map((c) => [
    c.id,
    `"${c.name.replace(/"/g, '""')}"`,
    c.email,
    c.phone,
    `"${c.message.replace(/"/g, '""')}"`,
    formatDate(c.created_at),
  ]);
  const csv = [header, ...rows].map((r) => r.join(";")).join("\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `contatos-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const PER_PAGE = 20;

export default function PainelPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    contactId: string | null;
    contactName: string | null;
  }>({ open: false, contactId: null, contactName: null });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => setErrorMessage(null), 4000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/acesso");
          return;
        }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Erro ao carregar contatos.");
        setContacts(data.contacts ?? []);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoadingData(false));
  }, [router]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q)
    );
  }, [contacts, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/acesso");
  };

  const handleDelete = (id: string, name: string) => {
    setDeleteModal({ open: true, contactId: id, contactName: name });
  };

  const handleCloseModal = () => {
    setDeleteModal({ open: false, contactId: null, contactName: null });
  };

  const handleConfirmDelete = async () => {
    const id = deleteModal.contactId;
    handleCloseModal();
    if (!id) return;

    try {
      const res = await fetch("/api/admin/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error();
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setErrorMessage("Erro ao excluir contato. Tente novamente.");
    }
  };

  return (
    <main
      style={{ background: "#faf9f7", minHeight: "100vh", color: "#1a1a1a" }}
      className="px-6 py-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span
              style={{ fontFamily: "var(--font-heading)", color: "#b08d57", fontSize: "1.75rem", lineHeight: 1 }}
            >
              M
            </span>
            <span className="text-sm" style={{ color: "#6b6560" }}>
              Painel de contatos
            </span>
          </div>
          <button
            onClick={handleLogout}
            style={{ color: "#6b6560", borderColor: "#d1ccc4" }}
            className="border px-4 py-2 text-xs transition-colors duration-300 hover:border-[#b08d57] hover:text-[#b08d57]"
          >
            Sair
          </button>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar por nome, e-mail ou telefone..."
            style={{ borderColor: "#d1ccc4", color: "#1a1a1a", background: "#fff" }}
            className="w-full border px-4 py-2 text-sm outline-none transition-colors duration-300 focus:border-[#b08d57] sm:max-w-xs"
          />
          <button
            onClick={() => exportCSV(filtered)}
            disabled={filtered.length === 0}
            style={{ color: "#b08d57", borderColor: "#b08d57" }}
            className="shrink-0 border px-4 py-2 text-xs font-medium transition-colors duration-300 hover:bg-[#b08d57] hover:text-white disabled:opacity-40"
          >
            Exportar CSV ({filtered.length})
          </button>
        </div>

        {/* Erro inline (auto-dismiss 4s) */}
        {errorMessage && (
          <p role="alert" className="mb-4 text-sm" style={{ color: "#dc2626" }}>
            {errorMessage}
          </p>
        )}

        {/* Content */}
        {loadingData ? (
          <p className="text-sm" style={{ color: "#6b6560" }}>
            Carregando...
          </p>
        ) : error ? (
          <p role="alert" className="text-sm" style={{ color: "#dc2626" }}>
            {error}
          </p>
        ) : filtered.length === 0 ? (
          <p className="text-sm" style={{ color: "#6b6560" }}>
            {search ? "Nenhum resultado para a busca." : "Nenhum contato recebido ainda."}
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #d1ccc4" }}>
                    {["Data", "Nome", "E-mail", "Telefone", "Mensagem", "Ação"].map((h) => (
                      <th
                        key={h}
                        className="px-3 pb-3 text-left text-xs font-medium uppercase tracking-[0.1em]"
                        style={{ color: "#6b6560" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((c) => (
                    <tr
                      key={c.id}
                      style={{ borderBottom: "1px solid #ece9e4" }}
                      className="transition-colors duration-300 hover:bg-[#f0ede8]"
                    >
                      <td
                        className="px-3 py-4 text-xs whitespace-nowrap"
                        style={{ color: "#6b6560" }}
                      >
                        {formatDate(c.created_at)}
                      </td>
                      <td className="px-3 py-4 font-medium">{c.name}</td>
                      <td className="px-3 py-4">{c.email}</td>
                      <td className="px-3 py-4 whitespace-nowrap">{c.phone}</td>
                      <td className="px-3 py-4" style={{ maxWidth: "280px" }}>
                        <span
                          className="line-clamp-2"
                          title={c.message}
                          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                        >
                          {c.message}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        <button
                          type="button"
                          onClick={() => handleDelete(c.id, c.name)}
                          aria-label={`Excluir contato de ${c.name}`}
                          className="text-red-400 transition-colors duration-300 hover:text-red-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4h6v2" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  style={{ borderColor: "#d1ccc4", color: "#1a1a1a" }}
                  className="border px-3 py-1 text-xs transition-colors duration-300 disabled:opacity-40 hover:border-[#b08d57]"
                >
                  Anterior
                </button>
                <span className="text-xs" style={{ color: "#6b6560" }}>
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  style={{ borderColor: "#d1ccc4", color: "#1a1a1a" }}
                  className="border px-3 py-1 text-xs transition-colors duration-300 disabled:opacity-40 hover:border-[#b08d57]"
                >
                  Próxima
                </button>
              </div>
            )}
          </>
        )}

      </div>

      {/* Modal de confirmação de exclusão */}
      {deleteModal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/30 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-sm rounded-sm p-8 shadow-xl"
            style={{ background: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="mb-3 text-lg font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
            >
              Excluir contato
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#6b6560" }}>
              Tem certeza que deseja excluir o contato{" "}
              <strong style={{ color: "#1a1a1a" }}>{deleteModal.contactName}</strong>?{" "}
              Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                style={{ borderColor: "#d1ccc4", color: "#6b6560" }}
                className="flex-1 border px-4 py-2 text-sm transition-colors duration-300 hover:border-[#b08d57] hover:text-[#b08d57]"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
