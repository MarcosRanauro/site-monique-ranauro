"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Fui intimado para depor na delegacia. O que devo fazer?",
    answer:
      "Antes de qualquer depoimento, é fundamental buscar orientação jurídica. Você tem o direito de ser assistido por advogado durante todo o processo. Comparecer sem acompanhamento técnico pode comprometer sua defesa desde as primeiras etapas da investigação.",
  },
  {
    question: "Um familiar foi preso em flagrante. Quais são os próximos passos?",
    answer:
      "O primeiro passo é acionar um advogado criminalista imediatamente. A pessoa presa tem direito a assistência jurídica desde o momento da prisão. Nas primeiras horas, é possível verificar a legalidade da prisão, acompanhar a lavratura do auto e se preparar para a audiência de custódia, que deve ocorrer em até 24 horas.",
  },
  {
    question: "O atendimento é sigiloso?",
    answer:
      "Sim. O sigilo profissional é um dever ético e legal da advocacia. Todas as informações compartilhadas com a advogada são tratadas com absoluta confidencialidade, em todas as fases do caso.",
  },
  {
    question: "A advogada atende casos urgentes fora do horário comercial?",
    answer:
      "Sim. O escritório mantém plantão 24 horas para situações de urgência criminal, como prisão em flagrante, condução à delegacia e audiência de custódia. Nesses casos, o contato deve ser feito diretamente pelo WhatsApp.",
  },
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro contato pode ser feito pelo WhatsApp ou pelo formulário de contato. A partir daí, é agendada uma conversa para entender a situação, esclarecer dúvidas e, se for o caso, definir os próximos passos. Cada situação é analisada de forma individual.",
  },
  {
    question: "Quais regiões são atendidas?",
    answer:
      "O escritório está localizado em Nova Iguaçu e atende toda a Baixada Fluminense e a região metropolitana do Rio de Janeiro, com possibilidade de atendimento presencial ou remoto conforme a necessidade do caso.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-t border-border bg-[#0f0f0f] py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho centralizado */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Dúvidas frequentes
          </span>
          <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Respostas objetivas para quem está passando por um momento delicado.
          </p>
        </div>

        {/* Acordeão */}
        <div className="mx-auto max-w-3xl">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className={index > 0 ? "border-t border-border" : ""}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium text-foreground">
                    {question}
                  </span>
                  <span className="shrink-0 text-xl font-light text-accent">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-relaxed text-muted">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
