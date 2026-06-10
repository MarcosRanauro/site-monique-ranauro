import { WHATSAPP_URL } from "@/config/contact";
import { navLinks } from "@/config/nav";

async function getViewCount(): Promise<number> {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_SITE_URL ?? "https://moniqueranauro.com.br";

    const res = await fetch(`${baseUrl}/api/page-view-count`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.count ?? 0;
  } catch {
    return 0;
  }
}

export default async function Footer() {
  const count = await getViewCount();

  return (
    <footer className="border-t border-border bg-background-footer">

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Corpo principal — três colunas */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:divide-x md:divide-border">

        {/* Coluna 1 — Marca */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col leading-tight">
            <span className="mb-1 font-heading text-lg font-semibold tracking-wide text-foreground">
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
        <div className="flex flex-col gap-5 md:pl-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Navegação
          </p>
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative w-fit text-sm text-muted after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent/70 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="flex flex-col gap-5 md:pl-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Contato
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-muted transition-colors duration-300 hover:text-accent"
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
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted/80">
            © {new Date().getFullYear()} Monique Ranauro Advocacia Criminal. Todos os direitos
            reservados.
            <span className="text-muted/50"> · </span>
            <span className="text-xs text-muted/30 tabular-nums">
              {count.toLocaleString("pt-BR")}
            </span>
          </p>
          <p className="text-xs text-muted/60 md:text-right">
            Este site tem caráter exclusivamente informativo e não constitui
            consultoria jurídica.
          </p>
        </div>
      </div>

    </footer>
  );
}
