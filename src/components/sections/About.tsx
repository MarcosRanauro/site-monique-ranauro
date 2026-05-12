const supportItems = [
  "Análise individualizada do caso",
  "Comunicação clara durante o processo",
  "Atuação ética e estratégica",
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-border bg-[#0f0f0f] py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">

        {/* Coluna esquerda — card institucional decorativo */}
        <div className="hidden md:flex md:items-center md:justify-center">
          <div className="relative h-[420px] w-full max-w-[380px]">

            {/* Cartão principal */}
            <div className="absolute inset-0 border border-border bg-gradient-to-b from-foreground/5 to-transparent">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="flex h-full flex-col items-center justify-center gap-7 p-8 text-center">

                {/* Monograma */}
                <div className="flex h-16 w-16 items-center justify-center border border-accent/40 bg-accent/5">
                  <span className="font-heading text-2xl font-semibold text-accent">
                    M
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    Monique Ranauro
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                    Advogada Criminalista
                  </p>
                </div>

                <div className="h-px w-10 bg-accent/40" />

                <p className="max-w-[220px] text-center text-xs leading-relaxed text-muted/80">
                  &ldquo;A defesa começa com escuta atenta e se constrói com estratégia precisa.&rdquo;
                </p>

              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            </div>

            {/* Cartão offset decorativo atrás */}
            <div className="absolute -bottom-3 -left-3 h-full w-full border border-border/30" />

            {/* Cantos decorativos */}
            <div className="absolute -right-2 -top-2 h-7 w-7 border-r border-t border-accent/50" />
            <div className="absolute -bottom-2 -left-2 h-7 w-7 border-b border-l border-accent/50" />

          </div>
        </div>

        {/* Coluna direita — conteúdo textual */}
        <div className="flex flex-col gap-8">

          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Sobre a profissional
          </span>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Atuação criminal com técnica, sigilo e estratégia.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed text-muted">
              Monique Ranauro atua na área criminal com foco em oferecer uma defesa
              técnica, cuidadosa e estratégica. Seu trabalho é pautado pelo sigilo,
              pela análise profunda de cada caso e pela comunicação clara com o
              cliente em todas as etapas do processo.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Em momentos delicados, contar com uma orientação jurídica precisa faz
              diferença. Por isso, a atuação é conduzida com seriedade, atenção aos
              detalhes e compromisso com a proteção dos direitos do cliente.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {supportItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-l-2 border-accent/50 py-1 pl-4"
              >
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
