const differentials = [
  {
    symbol: "◈",
    title: "Sigilo absoluto",
    description:
      "Todas as informações compartilhadas são tratadas com rigoroso sigilo profissional, em todas as etapas do caso.",
  },
  {
    symbol: "◇",
    title: "Estratégia individualizada",
    description:
      "Cada situação é analisada de forma independente. Não existe defesa padrão — existe a defesa certa para aquele caso.",
  },
  {
    symbol: "◈",
    title: "Comunicação clara",
    description:
      "O cliente é informado sobre cada passo do processo, com linguagem acessível e sem omissões.",
  },
  {
    symbol: "◇",
    title: "Plantão 24h",
    description:
      "Disponibilidade para urgências criminais a qualquer hora — prisão em flagrante, delegacia, audiência de custódia.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho centralizado */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Por que contar com atuação técnica
          </span>
          <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Defesa criminal com método, sigilo e presença.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cada caso exige análise individualizada. A atuação é conduzida com
            rigor técnico, comunicação clara e respeito ao sigilo em todas as
            etapas.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {differentials.map(({ symbol, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-6 border border-border p-7 transition-colors duration-200 hover:border-accent/40 hover:bg-foreground/[0.03]"
            >
              <span className="text-xl text-accent/70 transition-colors duration-200 group-hover:text-accent">
                {symbol}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-auto h-px w-0 bg-accent/50 transition-all duration-300 group-hover:w-8" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
