const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#080808]">

      {/* Corpo principal — três colunas */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3">

        {/* Coluna 1 — Marca */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-base font-semibold tracking-wide text-foreground">
              Monique Ranauro
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              Advocacia Criminal
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Atuação exclusiva em Direito Penal. Escritório em Nova Iguaçu, com
            atendimento em toda a Baixada Fluminense e Grande Rio.
          </p>
        </div>

        {/* Coluna 2 — Navegação rápida */}
        <div className="flex flex-col gap-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Navegação
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="w-fit text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="flex flex-col gap-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Contato
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5521959247775?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Monique%20Ranauro."
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              Falar no WhatsApp
            </a>
            <span className="text-sm text-muted">Nova Iguaçu, RJ</span>
            <span className="text-sm text-muted">Plantão 24h para urgências</span>
          </div>
        </div>

      </div>

      {/* Barra final */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Monique Ranauro Advocacia Criminal. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted md:text-right">
            Este site tem caráter exclusivamente informativo e não constitui
            consultoria jurídica.
          </p>
        </div>
      </div>

    </footer>
  );
}
