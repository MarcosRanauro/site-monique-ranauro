"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/config/contact";
import LiveIndicator from "@/components/ui/LiveIndicator";
import SectionBadge from "@/components/ui/SectionBadge";

type FormStatus = "idle" | "loading" | "success";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, phone: maskPhone(e.target.value) }));
    if (phoneError) setPhoneError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setPhoneError("Informe um telefone válido com DDD. Ex: (21) 99999-9999");
      return;
    }

    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      setEmailError("E-mail inválido.");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, email }),
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
    <section id="contato" className="border-t border-border bg-background py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">

        {/* Coluna esquerda — informações de contato */}
        <div className="flex flex-col gap-8">

          <SectionBadge>Fale com a advogada</SectionBadge>

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

          <ul className="flex flex-col gap-3">
            <li className="flex items-start border-l-2 border-accent/50 py-1 pl-4">
              <span className="text-sm text-foreground/80">
                Nova Iguaçu — Baixada Fluminense e Grande Rio
              </span>
            </li>
            <li className="flex items-start border-l-2 border-accent/50 py-1 pl-4">
              <span className="text-sm text-foreground/80">
                Plantão 24h para urgências criminais
              </span>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent hover:text-background"
          >
            <LiveIndicator />
            Falar no WhatsApp agora
          </a>

        </div>

        {/* Coluna direita — formulário */}
        <div>
          {status === "success" ? (
            <div role="alert" className="flex flex-col gap-4 border border-accent/30 bg-accent/5 p-8">
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
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

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
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  disabled={status === "loading"}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted/50 focus:border-accent disabled:opacity-60"
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
                  autoComplete="tel"
                  disabled={status === "loading"}
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="(XX) 99999-9999"
                  minLength={14}
                  maxLength={15}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  className="border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted/50 focus:border-accent disabled:opacity-60"
                />
                {phoneError && (
                  <p id="phone-error" role="alert" className="text-xs text-red-400">{phoneError}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={status === "loading"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  onBlur={() => {
                    if (email && !EMAIL_REGEX.test(email)) {
                      setEmailError("E-mail inválido.");
                    }
                  }}
                  placeholder="seu@email.com"
                  aria-describedby={emailError ? "email-error" : undefined}
                  className="border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted/50 focus:border-accent disabled:opacity-60"
                />
                {emailError && (
                  <p id="email-error" role="alert" className="text-xs text-red-400">{emailError}</p>
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
                  minLength={10}
                  maxLength={2000}
                  autoComplete="off"
                  disabled={status === "loading"}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua situação"
                  className="resize-none border border-border bg-foreground/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted/50 focus:border-accent disabled:opacity-60"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent-light disabled:opacity-60"
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
