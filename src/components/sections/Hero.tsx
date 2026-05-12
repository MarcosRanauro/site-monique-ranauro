const trustIndicators = [
  "Atendimento sigiloso",
  "Estratégia individualizada",
  "Atuação técnica",
];

const practiceHighlights = [
  "Inquérito policial",
  "Tribunal do Júri",
  "Prisão em flagrante",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100vh-4rem)] items-center bg-background"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 md:items-center">

        {/* Coluna esquerda — conteúdo textual */}
        <div className="flex flex-col gap-8">

          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Advocacia Criminal
          </span>

          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Defesa criminal estratégica, técnica e sigilosa.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted">
            Atuação profissional para proteger direitos, orientar decisões e
            construir estratégias jurídicas com seriedade em momentos decisivos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light"
            >
              Falar com a advogada
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center rounded-sm border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/50"
            >
              Conhecer áreas de atuação
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="text-xs text-muted">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Coluna direita — visual decorativo em CSS */}
        <div className="relative hidden md:flex md:items-center md:justify-center">
          <div className="relative h-[440px] w-full max-w-[400px]">

            {/* Cartão principal */}
            <div className="absolute inset-0 border border-border bg-gradient-to-br from-foreground/5 to-transparent">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="flex h-full flex-col justify-between p-8">
                <div className="flex flex-col gap-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent/70">
                    Defesa Criminal
                  </p>
                  <p className="font-heading text-3xl font-semibold leading-snug text-foreground/90">
                    Sigilo.
                    <br />
                    Estratégia.
                    <br />
                    Precisão.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="h-px w-10 bg-accent/50" />
                  {practiceHighlights.map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <span className="h-px w-3 bg-accent/40" />
                      <span className="text-xs tracking-wide text-muted/80">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            </div>

            {/* Cartão offset decorativo atrás */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-border/30" />

            {/* Cantos decorativos em dourado */}
            <div className="absolute -left-2 -top-2 h-7 w-7 border-l border-t border-accent/50" />
            <div className="absolute -bottom-2 -right-2 h-7 w-7 border-b border-r border-accent/50" />

          </div>
        </div>

      </div>
    </section>
  );
}
