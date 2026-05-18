const bullets = [
  "Atendimento imediato em casos de prisão em flagrante",
  "Acompanhamento em delegacias da Baixada Fluminense e Grande Rio",
  "Preparação para audiência de custódia e pedidos de liberdade",
  "Orientação técnica a familiares desde os primeiros contatos com a polícia",
];

export default function OnCall() {
  return (
    <section
      id="plantao"
      className="border-b border-t border-border bg-[#0d0d0d] py-16 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">

        {/* Coluna esquerda — título e textos */}
        <div className="flex flex-col gap-8">

          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Plantão Criminal
          </span>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-accent md:text-4xl">
            Plantão 24 horas para urgências criminais.
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed text-muted">
              Situações como prisão em flagrante, condução à delegacia ou
              cumprimento de mandados não podem esperar o horário comercial. O
              plantão 24h foi criado para oferecer orientação imediata a
              familiares e pessoas envolvidas em ocorrências criminais na Baixada
              Fluminense e no Grande Rio.
            </p>
            <p className="text-base leading-relaxed text-muted">
              A atuação inclui acompanhamento em delegacias, participação em
              audiências de custódia, análise da legalidade da prisão e adoção
              das medidas cabíveis para resguardar a liberdade e a integridade
              do investigado, sempre dentro dos limites da lei e das normas
              éticas da advocacia.
            </p>
          </div>

        </div>

        {/* Coluna direita — bullets e CTA */}
        <div className="flex flex-col gap-10">

          <div className="flex flex-col gap-3">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-start gap-4 border-l-2 border-accent/50 py-1 pl-4"
              >
                <span className="text-sm leading-relaxed text-foreground/80">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="inline-flex w-fit items-center gap-3 border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-background"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Acionar plantão 24h no WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}
