const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <div className="flex flex-col leading-tight">
          <span className="font-heading text-base font-semibold tracking-wide text-foreground">
            Monique Ranauro
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Advocacia Criminal
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
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

        <a
          href="#contato"
          className="rounded-sm border border-accent px-4 py-2 text-sm text-accent transition-colors duration-200 hover:bg-accent hover:text-background"
        >
          Falar no WhatsApp
        </a>

      </div>
    </header>
  );
}
