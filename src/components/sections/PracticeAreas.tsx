const areas = [
  {
    number: "01",
    title: "Prisão em flagrante",
    description:
      "Atuação em situações urgentes, com orientação jurídica imediata e análise das medidas cabíveis desde os primeiros momentos.",
  },
  {
    number: "02",
    title: "Audiência de custódia",
    description:
      "Acompanhamento técnico em audiência de custódia, com atenção aos direitos da pessoa apresentada e às particularidades do caso.",
  },
  {
    number: "03",
    title: "Inquérito policial",
    description:
      "Orientação e acompanhamento durante investigações, depoimentos e demais atos na fase pré-processual.",
  },
  {
    number: "04",
    title: "Processo criminal",
    description:
      "Defesa técnica em ações penais, com análise detalhada das provas, teses defensivas e estratégia processual.",
  },
  {
    number: "05",
    title: "Tribunal do Júri",
    description:
      "Atuação em casos de competência do Júri, com preparação estratégica e atenção à construção da narrativa defensiva.",
  },
  {
    number: "06",
    title: "Crimes contra a honra",
    description:
      "Atuação em casos envolvendo calúnia, injúria e difamação, tanto na defesa quanto na análise das medidas jurídicas cabíveis.",
  },
  {
    number: "07",
    title: "Medidas urgentes",
    description:
      "Atuação em demandas que exigem resposta rápida, preservando direitos e avaliando os caminhos jurídicos mais adequados.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="atuacao" className="border-t border-border bg-background py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho da seção */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Áreas de atuação
          </span>
          <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Defesa criminal em momentos que exigem precisão.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Atuação voltada à análise técnica do caso, orientação clara e construção
            de estratégias jurídicas adequadas a cada situação.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ number, title, description }, index) => {
            const isLast = index === areas.length - 1;
            return (
            <div
              key={number}
              className={`group flex flex-col gap-5 border border-border p-7 transition-colors duration-200 hover:border-accent/40 hover:bg-foreground/[0.03]${isLast ? " lg:col-start-2" : ""}`}
            >
              <span className="font-heading text-sm font-semibold text-accent">
                {number}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-auto h-px w-0 bg-accent/50 transition-all duration-300 group-hover:w-8" />
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
