"use client";

import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_URL } from "@/config/contact";
import { navLinks } from "@/config/nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Marca */}
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-base font-semibold tracking-wide text-foreground">
            Monique Ranauro
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Advocacia Criminal
          </span>
        </div>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-accent px-4 py-2 text-sm text-accent transition-colors duration-200 hover:bg-accent hover:text-background md:inline-flex"
        >
          Falar no WhatsApp
        </a>

        {/* Botão hambúrguer — apenas mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center text-lg text-foreground transition-colors duration-200 hover:text-accent md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Painel do menu mobile */}
      {isOpen && (
        <div id="mobile-menu" className="border-b border-border bg-background md:hidden">
          <nav aria-label="Menu mobile" className="mx-auto flex max-w-6xl flex-col px-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="flex min-h-[44px] items-center border-b border-border text-sm text-foreground transition-colors duration-200 hover:text-accent"
              >
                {label}
              </a>
            ))}
            <div className="py-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center border border-accent px-4 py-3 text-sm text-accent transition-colors duration-200 hover:bg-accent hover:text-background"
              >
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
