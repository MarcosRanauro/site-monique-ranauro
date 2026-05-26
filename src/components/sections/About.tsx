import Image from "next/image";
import SectionBadge from "@/components/ui/SectionBadge";

const supportItems = [
  "Análise individualizada do caso",
  "Comunicação clara durante o processo",
  "Atuação ética e estratégica",
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-border bg-background-secondary py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:gap-16 md:grid-cols-2 md:items-center">

        {/* Coluna esquerda — foto profissional */}
        <div className="flex items-center justify-center">
          <div className="flex w-48 flex-col gap-5 sm:w-56 md:w-full md:max-w-[380px]">

            {/* Foto */}
            <div className="group relative aspect-[3/4] w-full overflow-hidden border border-accent/30 shadow-lg">
              <Image
                src="/images/monique-ranauro3.png"
                alt="Monique Ranauro, advogada criminalista"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 380px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-background opacity-0 transition-opacity duration-500 group-hover:opacity-20"
              />
            </div>

            {/* Citação — legenda elegante da foto */}
            <p className="text-center text-xs italic leading-relaxed text-muted/80">
              &ldquo;A defesa começa com escuta atenta e se constrói com análise cuidadosa de cada caso.&rdquo;
            </p>

          </div>
        </div>

        {/* Coluna direita — conteúdo textual */}
        <div className="flex flex-col gap-8">

          <SectionBadge>Sobre a profissional</SectionBadge>

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

          <ul className="flex flex-col gap-3">
            {supportItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-l-2 border-accent/50 py-1 pl-4"
              >
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}
