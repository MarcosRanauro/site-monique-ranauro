"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const maskPhone = (raw: string): string => {
    const digits = raw.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, phone: maskPhone(e.target.value) }));
    if (phoneError) setPhoneError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 11) {
      setPhoneError("Informe um celular válido com DDD. Ex: (21) 99999-9999");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setError(data.error ?? "Erro ao enviar mensagem. Tente novamente.");
        setStatus("idle");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
      setStatus("idle");
    }
  };

  return (
    <section id="contato" className="border-t border-border bg-[#0b0b0b] py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">

        {/* Coluna esquerda — informações de contato */}
        <div className="flex flex-col gap-8">

          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Fale com a advogada
          </span>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Entre em contato para orientação jurídica.
          </h2>

          <p className="text-base leading-relaxed text-muted">
            Se você ou alguém próximo está passando por uma investigação,
            processo criminal ou situação de urgência, é importante receber
            orientação jurídica qualificada o quanto antes. Entre em contato
            para entender, com clareza, quais são os caminhos possíveis no seu
            caso.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-start border-l-2 border-accent/50 py-1 pl-4">
              <span className="text-sm text-foreground/80">
                Nova Iguaçu — Baixada Fluminense e Grande Rio
              </span>
            </div>
            <div className="flex items-start border-l-2 border-accent/50 py-1 pl-4">
              <span className="text-sm text-foreground/80">
                Plantão 24h para urgências criminais
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/5521959247775?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Monique%20Ranauro."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-background"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Falar no WhatsApp agora
          </a>

        </div>

        {/* Coluna direita — formulário */}
        <div>
          {status === "success" ? (
            <div className="flex flex-col gap-4 border border-accent/30 bg-accent/5 p-8">
              <div className="h-px w-8 bg-accent/50" />
              <p className="font-heading text-lg font-semibold text-foreground">
                Mensagem enviada.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Em breve entraremos em contato. Para situações urgentes, utilize
                o WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="(XX) 99999-9999"
                  maxLength={15}
                  className="border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-accent"
                />
                {phoneError && (
                  <p className="text-xs text-red-400">{phoneError}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua situação"
                  className="resize-none border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-accent"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </button>

              <p className="text-xs italic leading-relaxed text-muted">
                O envio de mensagens por este formulário não implica contratação
                automática de serviços jurídicos, nem cria, por si só, relação
                advogado-cliente. Cada situação é analisada individualmente,
                conforme as regras éticas da advocacia.
              </p>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
