import SectionBadge from "@/components/ui/SectionBadge";

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
    <section id="diferenciais" className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho centralizado */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <SectionBadge>Por que contar com atuação técnica</SectionBadge>
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
              <span aria-hidden="true" className="text-xl text-accent transition-colors duration-200">
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
