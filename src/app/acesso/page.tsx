"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AcessoPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/acesso/painel");
      } else {
        const data = await res.json();
        setError(data.error ?? "Erro ao autenticar.");
        setLoading(false);
      }
    } catch {
      setError("Erro de conexão.");
      setLoading(false);
    }
  };

  return (
    <main
      style={{ background: "#faf9f7", minHeight: "100vh" }}
      className="flex items-center justify-center px-6"
    >
      <div style={{ maxWidth: "360px", width: "100%" }}>
        <div className="mb-10 text-center">
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "3.5rem",
              color: "#b08d57",
              lineHeight: 1,
              display: "block",
            }}
          >
            M
          </span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              style={{ color: "#6b6560" }}
              className="text-xs font-medium uppercase tracking-[0.15em]"
            >
              Senha de acesso
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              disabled={loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: "#d1ccc4", color: "#1a1a1a", background: "#fff" }}
              className="border px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#b08d57] disabled:opacity-60"
            />
          </div>

          {error && (
            <p role="alert" style={{ color: "#dc2626" }} className="text-xs">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            style={{ background: "#b08d57", color: "#fff" }}
            className="px-6 py-3 text-sm font-medium transition-opacity duration-300 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
