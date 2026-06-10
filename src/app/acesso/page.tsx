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
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-[360px]">
        <div className="mb-10 text-center">
          <span className="font-heading block text-[3.5rem] leading-none text-accent">
            M
          </span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-[0.15em] text-admin-muted"
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
              className="border border-admin-border bg-white px-4 py-3 text-sm text-admin-foreground outline-none transition-colors duration-300 focus:border-[#b08d57] disabled:opacity-60"
            />
          </div>

          {error && (
            <p role="alert" className="text-xs text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
