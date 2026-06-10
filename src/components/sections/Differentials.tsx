import SectionBadge from "@/components/ui/SectionBadge";

const differentials = [
  {
    title: "Sigilo absoluto",
    description:
      "Todas as informações compartilhadas são tratadas com rigoroso sigilo profissional, em todas as etapas do caso.",
  },
  {
    title: "Estratégia individualizada",
    description:
      "Cada situação é analisada de forma independente. Não existe defesa padrão — existe a defesa certa para aquele caso.",
  },
  {
    title: "Comunicação clara",
    description:
      "O cliente é informado sobre cada passo do processo, com linguagem acessível e sem omissões.",
  },
  {
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
          {differentials.map(({ title, description }, index) => (
            <div
              key={title}
              className="group relative flex flex-col gap-5 overflow-hidden border border-border p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.02]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <span className="font-heading text-xs font-semibold tracking-[0.2em] text-accent/50 uppercase">
                {["I", "II", "III", "IV"][index]}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-auto h-px w-0 bg-accent/50 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
