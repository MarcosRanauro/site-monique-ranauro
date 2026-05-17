# CONTEXT.md — Site Monique Ranauro

Este arquivo documenta o contexto técnico, visual e estratégico do projeto **Site Monique Ranauro**.

A ideia é manter um histórico claro das decisões tomadas durante o desenvolvimento, facilitando manutenção, continuidade e revisão futura.

---

## 1. Visão geral do projeto

O projeto consiste na criação de um site profissional para a advogada **Monique Ranauro**, com atuação na área criminal.

O site deve transmitir:

- Profissionalismo
- Autoridade
- Elegância
- Segurança
- Seriedade
- Clareza na comunicação
- Confiança para potenciais clientes

A proposta é evitar um visual jurídico ultrapassado, genérico ou carregado de clichês como martelo, balança da justiça em excesso e elementos visuais comuns demais em sites de advocacia.

---

## 2. Objetivo principal

Criar uma presença digital moderna, elegante e responsiva para a advogada Monique Ranauro, apresentando sua atuação profissional e facilitando o contato direto com potenciais clientes.

O site deve funcionar como uma landing page institucional, com foco em:

- Apresentação profissional
- Áreas de atuação criminal
- Comunicação clara e ética
- Contato rápido via WhatsApp
- Boa experiência em dispositivos móveis
- Boa performance
- SEO básico

---

## 3. Direção visual

A identidade visual seguirá uma linha:

**Sofisticada, sóbria, moderna e elegante.**

### Paleta sugerida

- Preto
- Chumbo
- Off-white
- Cinza
- Dourado discreto ou bronze como detalhe

### Estilo visual

- Layout limpo
- Tipografia elegante
- Espaçamentos amplos
- Animações discretas
- Imagens profissionais
- Contraste forte
- Aparência premium

### O que evitar

- Visual jurídico antigo
- Excesso de símbolos como balança e martelo
- Cores muito chamativas
- Promessas de resultado
- Linguagem sensacionalista
- Layout poluído

---

## 4. Tom de comunicação

O tom do site deve ser:

- Técnico
- Firme
- Humano
- Profissional
- Sigiloso
- Estratégico
- Ético

A comunicação deve passar autoridade sem prometer resultados.

### Exemplo de frase principal

> Advocacia Criminal Estratégica

### Exemplo de subtítulo

> Atendimento jurídico técnico, humanizado e sigiloso para quem precisa de defesa criminal com seriedade e precisão.

---

## 5. Considerações éticas

Por se tratar de um site de advocacia, a comunicação deve respeitar os limites éticos da publicidade jurídica.

O conteúdo deve evitar:

- Promessa de resultado
- Captação indevida de clientela
- Linguagem apelativa
- Comparações com outros profissionais
- Termos como “a melhor advogada”
- Garantias de sucesso

A comunicação será institucional, informativa e profissional.

---

## 6. Stack técnica

O projeto foi iniciado com:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Git
- GitHub

Hospedagem prevista:

- Vercel

---

## 7. Configuração inicial do projeto

O projeto foi criado com o comando:

```bash
npx create-next-app@latest site-monique-ranauro
```

Configurações escolhidas:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: No
Import alias: Yes
Alias: @/*
```

---

## 8. Repositório GitHub

Foi criado um repositório no GitHub para versionamento do projeto.

Nome sugerido/utilizado:

```txt
site-monique-ranauro
```

Descrição sugerida:

```txt
Site profissional da advogada criminalista Monique Ranauro.
```

Visibilidade recomendada:

```txt
Private
```

---

## 9. Histórico de comandos Git

Inicialização do Git:

```bash
git init
```

Primeiro versionamento:

```bash
git add .
git commit -m "Initial project setup"
```

Configuração da branch principal:

```bash
git branch -M main
```

Conexão com o GitHub:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Envio inicial:

```bash
git push -u origin main
```

---

## 10. README.md

Foi criado um arquivo `README.md` profissional para documentar:

- Visão geral do projeto
- Objetivo
- Tecnologias utilizadas
- Status
- Estrutura inicial
- Seções previstas
- Identidade visual
- Como rodar localmente
- Scripts disponíveis
- Boas práticas
- Deploy
- Considerações éticas

Commit recomendado:

```bash
git add README.md
git commit -m "Add professional README"
git push
```

---

## 11. Estrutura inicial prevista

Estrutura base esperada:

```txt
site-monique-ranauro/
├── public/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
├── .gitignore
├── package.json
├── README.md
├── CONTEXT.md
├── tsconfig.json
└── next.config.ts
```

---

## 12. Seções previstas para o site

A landing page terá inicialmente as seguintes seções:

1. Header
2. Hero principal
3. Sobre a advogada
4. Áreas de atuação
5. Diferenciais
6. Processo de atendimento
7. Perguntas frequentes
8. Contato
9. Rodapé institucional

---

## 13. Conteúdo inicial planejado

### Hero

Título:

```txt
Advocacia Criminal Estratégica
```

Subtítulo:

```txt
Atendimento jurídico técnico, humanizado e sigiloso para quem precisa de defesa criminal com seriedade e precisão.
```

Botões previstos:

```txt
Falar com a advogada
Conhecer atuação
```

---

### Sobre

Texto inicial previsto:

```txt
Monique Ranauro atua na área criminal com foco em oferecer uma defesa técnica, cuidadosa e estratégica. Seu trabalho é pautado pelo sigilo, pela análise profunda de cada caso e pela comunicação clara com o cliente em todas as etapas do processo.
```

---

### Áreas de atuação

Áreas inicialmente previstas:

- Prisão em flagrante
- Audiência de custódia
- Inquérito policial
- Defesa em processo criminal
- Tribunal do Júri
- Crimes contra a honra
- Medidas urgentes

---

### Diferenciais

Diferenciais inicialmente previstos:

- Atendimento sigiloso
- Estratégia individualizada
- Linguagem clara
- Atuação técnica
- Agilidade em situações urgentes

---

## 14. Boas práticas definidas

O desenvolvimento deve seguir:

- Código limpo
- Componentização clara
- Responsividade mobile-first
- Semântica HTML adequada
- Acessibilidade básica
- Performance desde o início
- Organização progressiva de pastas
- Separação entre layout, conteúdo e componentes
- Commits objetivos
- Design consistente

---

## 15. Decisões importantes

### Decisão 1 — Site moderno e elegante

Foi decidido que o site não seguirá o padrão visual tradicional e ultrapassado de muitos sites jurídicos.

A proposta será mais sofisticada, premium e contemporânea.

---

### Decisão 2 — Projeto privado no GitHub

O repositório deve permanecer privado durante o desenvolvimento por se tratar de um projeto profissional para cliente.

---

### Decisão 3 — Next.js como base

Next.js foi escolhido pela boa performance, estrutura moderna, SEO, integração com Vercel e escalabilidade.

---

### Decisão 4 — Tailwind CSS

Tailwind CSS foi escolhido para acelerar a criação de uma interface refinada, responsiva e consistente.

---

### Decisão 5 — CONTEXT.md como memória técnica

Foi decidido criar este arquivo para registrar o contexto geral do projeto, decisões técnicas, decisões visuais, comandos utilizados e histórico de evolução.

---

## 16. Próximas etapas

Próximas tarefas planejadas:

- [ ] Criar arquivo `CONTEXT.md`
- [ ] Commitar `CONTEXT.md`
- [ ] Criar pasta `src/components`
- [ ] Definir tokens visuais iniciais
- [ ] Configurar `globals.css`
- [ ] Criar layout base
- [ ] Criar componente `Header`
- [ ] Criar componente `Hero`
- [ ] Criar componente `About`
- [ ] Criar componente `PracticeAreas`
- [ ] Criar componente `Differentials`
- [ ] Criar componente `Contact`
- [ ] Criar rodapé
- [ ] Ajustar responsividade
- [ ] Otimizar SEO
- [ ] Fazer deploy na Vercel

---

## 17. Padrão de commits sugerido

Usaremos commits claros e objetivos.

Exemplos:

```txt
Add professional README
Add project context documentation
Create base layout
Create hero section
Create practice areas section
Add responsive header
Improve mobile layout
Add SEO metadata
Prepare production deploy
```

---

## 18. Observações gerais

Este arquivo deve ser atualizado sempre que houver:

- Nova decisão técnica
- Nova decisão visual
- Mudança de estrutura
- Criação de componente importante
- Alteração de stack
- Configuração relevante
- Ajuste de deploy
- Mudança de copy
- Problema técnico resolvido

A ideia não é substituir o README.

O `README.md` apresenta o projeto para quem chega.

O `CONTEXT.md` registra o raciocínio e o histórico interno do desenvolvimento.

---

## 19. Estrutura de componentes

A estrutura de componentes foi criada com três grupos organizados dentro de `src/components/`.

```txt
src/components/
├── layout/     → componentes estruturais como Header e Footer
├── sections/   → seções principais da landing page (Hero, Sobre, Áreas de atuação, etc.)
└── ui/         → componentes reutilizáveis menores (botões, ícones, cards, etc.)
```

### Grupos definidos

- **layout**: componentes que formam a estrutura global da página, como `Header` e `Footer`, presentes em todas as rotas.
- **sections**: cada seção da landing page terá seu próprio componente aqui (ex: `HeroSection`, `AboutSection`, `PracticeAreasSection`).
- **ui**: componentes atômicos e reutilizáveis que serão usados dentro das sections e do layout (ex: `Button`, `SectionTitle`, `Card`).

### Importação

Os componentes são importados com o alias `@/`, que aponta para `./src/`:

```tsx
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import Button from '@/components/ui/Button'
```

---

## 20. Migração para src/

Foi decidido migrar o código da aplicação para a pasta `src/` para manter uma separação mais profissional entre o código da aplicação e os arquivos de configuração do projeto.

### Motivação

Com o crescimento do projeto, misturar `app/` e `components/` diretamente na raiz junto com `package.json`, `tsconfig.json`, `next.config.ts` e outros arquivos de configuração tornaria a estrutura confusa e difícil de navegar. A separação por `src/` é uma convenção amplamente adotada em projetos Next.js profissionais e facilita a manutenção.

### O que foi movido

| De | Para |
|---|---|
| `app/` | `src/app/` |
| `components/` | `src/components/` |

### O que permanece na raiz

- `public/`
- `package.json` / `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `README.md`
- `CONTEXT.md`
- `.gitignore`

### Alias atualizado

O alias `@/*` no `tsconfig.json` foi atualizado de `"./*"` para `"./src/*"`, garantindo que todos os imports com `@/` continuem funcionando corretamente.

### Estrutura final após a migração

```txt
site-monique-ranauro/
├── public/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layout/
│       ├── sections/
│       └── ui/
├── .gitignore
├── CONTEXT.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## 21. Configuração visual base

### Fontes escolhidas

| Variável CSS | Fonte | Uso |
|---|---|---|
| `--font-heading` | Playfair Display | Títulos e destaques |
| `--font-sans` | Inter | Textos, parágrafos e interface geral |

Ambas as fontes são carregadas com `next/font/google`, que as auto-hospeda sem requisições externas ao Google, melhorando privacidade e performance. As variáveis CSS são injetadas no elemento `html` via `className`.

### Paleta inicial

| Variável | Valor | Uso |
|---|---|---|
| `--background` | `#0b0b0b` | Fundo escuro base |
| `--foreground` | `#f5f1ea` | Texto principal (off-white quente) |
| `--muted` | `#a8a29e` | Texto secundário e detalhes sutis |
| `--border` | `#2a2623` | Bordas e divisórias discretas |
| `--accent` | `#b08d57` | Dourado/bronze — cor de destaque principal |
| `--accent-light` | `#d6b77a` | Variação clara do dourado para hover/ênfase |

### Motivo das escolhas visuais

- **Fundo escuro (#0b0b0b):** transmite sofisticação, seriedade e premium — evita o aspecto genérico de sites jurídicos claros.
- **Off-white quente (#f5f1ea):** contraste elegante sem o peso de um branco puro; remete a papel de qualidade.
- **Dourado discreto (#b08d57):** detalhe de luxo sem exagero; reforça autoridade e distinção.
- **Playfair Display:** tipografia serifada com personalidade forte, ideal para títulos de advocacia de alto padrão.
- **Inter:** fonte humanista e altamente legível em qualquer tamanho, padrão de qualidade em interfaces modernas.

### Metadata inicial

```ts
title: "Monique Ranauro | Advocacia Criminal"
description: "Atuação estratégica, técnica e sigilosa em advocacia criminal."
```

### Outras configurações aplicadas

- `lang="pt-BR"` no elemento `html`
- `scroll-behavior: smooth` no `html`
- `-webkit-font-smoothing: antialiased` e `text-rendering: optimizeLegibility` para renderização refinada
- `::selection` com cor dourada para elegância na seleção de texto
- Tokens de cor registrados no `@theme inline` do Tailwind v4 para uso via classes utilitárias

### Arquivos alterados

- `src/app/layout.tsx` — fontes, metadata e lang
- `src/app/globals.css` — tokens visuais, tipografia e estilos base

---

## 22. Header inicial

### Componente criado

`src/components/layout/Header.tsx` — componente Server Component estático, sem necessidade de `"use client"` por não ter estado interativo nesta etapa.

### Estrutura do Header

- **Marca:** "Monique Ranauro" em Playfair Display (`font-heading`), com subtexto "ADVOCACIA CRIMINAL" em dourado espaçado (`text-accent`)
- **Navegação desktop:** links âncora para as seções da página, visíveis apenas em `md:` e acima
- **Botão CTA:** "Falar no WhatsApp" com borda dourada, estilo outline → filled no hover
- **Visual:** fundo escuro com 90% de opacidade + `backdrop-blur-sm`, borda inferior sutil (`border-border`), `sticky top-0 z-50`

### Links de navegação previstos

| Label | Âncora |
|---|---|
| Início | `#inicio` |
| Sobre | `#sobre` |
| Atuação | `#atuacao` |
| Diferenciais | `#diferenciais` |
| Contato | `#contato` |

### Botão WhatsApp

O botão aponta atualmente para `#contato` como placeholder. O link definitivo deve ser atualizado para `https://wa.me/55XXXXXXXXXXX` quando o número de WhatsApp da advogada for confirmado.

### Decisão — menu mobile para etapa futura

O menu hamburguer para mobile foi intencionalmente deixado para uma etapa posterior. Na versão atual, a navegação desktop é ocultada em telas pequenas (`hidden md:flex`), e o botão de WhatsApp permanece visível em todos os tamanhos de tela. A implementação do menu mobile exigirá estado interativo (`"use client"`) e será tratada como tarefa dedicada.

### Arquivos criados

- `src/components/layout/Header.tsx` — componente Header

### Arquivos alterados

- `src/app/page.tsx` — substituído template padrão do Next.js; Header importado via `@/`; área de placeholder para validar layout

---

## 23. Hero principal

### Componente criado

`src/components/sections/Hero.tsx` — Server Component estático. Layout em duas colunas no desktop e uma coluna no mobile. Identificado com `id="inicio"` para navegação âncora.

### Conteúdo definido

| Elemento | Conteúdo |
|---|---|
| Eyebrow | "Advocacia Criminal" (badge com borda em dourado) |
| Título | "Defesa criminal estratégica, técnica e sigilosa." |
| Subtítulo | Texto de apoio sobre atuação profissional |
| Botão primário | "Falar com a advogada" → `#contato` |
| Botão secundário | "Conhecer áreas de atuação" → `#atuacao` |
| Indicadores | Atendimento sigiloso · Estratégia individualizada · Atuação técnica |

### Decisão — nenhuma imagem real nesta etapa

O lado direito do Hero usa exclusivamente CSS para criar um elemento visual sofisticado: um cartão com gradiente sutil, tipografia elegante ("Sigilo. Estratégia. Precisão."), linhas e acentos dourados, cantos decorativos e um cartão offset atrás para criar profundidade. A fotografia profissional da advogada será inserida em etapa posterior, quando disponível.

### Decisão — sem clichês jurídicos

A composição visual evita deliberadamente imagens ou ícones associados ao visual jurídico clássico (martelo, balança, colunas). O design remete a sofisticação e precisão, não a simbolismo jurídico genérico.

### Arquivos criados

- `src/components/sections/Hero.tsx` — componente Hero principal

### Arquivos alterados

- `src/app/page.tsx` — placeholder removido; Hero importado via `@/` e renderizado dentro do `<main>`

---

## 24. Seção Sobre

### Componente criado

`src/components/sections/About.tsx` — Server Component estático. Layout em duas colunas no desktop e uma coluna no mobile. Identificado com `id="sobre"` para navegação âncora.

### Conteúdo definido

| Elemento | Conteúdo |
|---|---|
| Eyebrow | "Sobre a profissional" (badge com borda dourada) |
| Título | "Atuação criminal com técnica, sigilo e estratégia." |
| Parágrafo 1 | Apresentação profissional: sigilo, análise e comunicação |
| Parágrafo 2 | Complemento: seriedade, atenção e proteção de direitos |
| Itens de apoio | Análise individualizada · Comunicação clara · Atuação ética |

### Decisão — texto institucional e ético

O conteúdo foi escrito sem promessas de resultado, sem linguagem apelativa e sem comparações com outros profissionais. A comunicação segue os limites da publicidade jurídica ética: apresenta competências e postura profissional sem garantias de sucesso.

### Decisão — sem imagem real nesta etapa

O lado esquerdo usa um card institucional com CSS puro: monograma "M" em dourado, nome da advogada, título "Advogada Criminalista", separador em dourado e uma frase institucional discreta. A fotografia profissional será inserida em etapa posterior, substituindo o card decorativo.

### Decisão — fundo levemente diferente do Hero

O fundo da seção usa `#0f0f0f` (ligeiramente mais claro que `#0b0b0b` do Hero) combinado com `border-t border-border` no topo. Essa diferença sutil cria separação visual entre as seções sem quebrar a coesão do design escuro.

### Arquivos criados

- `src/components/sections/About.tsx` — componente da seção Sobre

### Arquivos alterados

- `src/app/page.tsx` — About importado via `@/` e renderizado logo abaixo do Hero

---

## 25. Seção Áreas de Atuação

### Componente criado

`src/components/sections/PracticeAreas.tsx` — Server Component estático. Cabeçalho centralizado com eyebrow, título e subtítulo, seguido de grid de cards responsivo. Identificado com `id="atuacao"` para navegação âncora.

### Áreas incluídas

| Nº | Área |
|---|---|
| 01 | Prisão em flagrante |
| 02 | Audiência de custódia |
| 03 | Inquérito policial |
| 04 | Processo criminal |
| 05 | Tribunal do Júri |
| 06 | Crimes contra a honra |
| 07 | Medidas urgentes |

### Decisão — comunicação ética e sem promessa de resultado

Todas as descrições foram redigidas em linguagem técnica e informativa. Os textos descrevem o tipo de atuação e o escopo de trabalho sem prometer resultados, sem usar superlativos e sem comparações com outros profissionais. O foco está em transmitir competência e seriedade.

### Decisão — sem ícones externos

Os cards usam números sequenciais (`01`–`07`) em dourado como marcadores visuais, substituindo ícones de bibliotecas externas. Isso mantém o visual coeso, elimina dependências e reforça a estética tipográfica do projeto.

### Decisão — hover com linha crescente

Cada card tem um detalhe de interação: uma linha dourada (`bg-accent/50`) que cresce de `w-0` para `w-8` no hover via `transition-all`. Essa micro-animação é discreta e profissional, sem exageros.

### Ajuste — centralização do último card no desktop

Com 7 itens em um grid de 3 colunas, o último card ficaria sozinho no canto esquerdo da terceira linha. Para melhorar o equilíbrio visual, o índice do `map` é usado para detectar o último item e aplicar `lg:col-start-2`, posicionando-o na coluna central do grid no breakpoint `lg`. Em mobile e tablet o comportamento não é afetado.

### Arquivos criados

- `src/components/sections/PracticeAreas.tsx` — componente da seção Áreas de Atuação

### Arquivos alterados

- `src/app/page.tsx` — PracticeAreas importado via `@/` e renderizado abaixo de About

---

## 26. Seção Plantão 24h

### Componente criado

`src/components/sections/OnCall.tsx` — Server Component estático. Layout em duas colunas no desktop e uma coluna no mobile. Identificado com `id="plantao"` para navegação âncora.

### Conteúdo definido

| Elemento | Conteúdo |
|---|---|
| Eyebrow | "Plantão Criminal" (badge com borda dourada) |
| Título | "Plantão 24 horas para urgências criminais." |
| Parágrafo 1 | Contexto de urgência: flagrante, delegacia, mandados — Baixada Fluminense e Grande Rio |
| Parágrafo 2 | Escopo de atuação: acompanhamento, custódia, legalidade da prisão, medidas cabíveis |
| Bullets | 4 itens de serviço coberto no plantão |
| CTA | "Acionar plantão 24h no WhatsApp" → `#contato` (placeholder) |

### Bullets definidos

- Atendimento imediato em casos de prisão em flagrante
- Acompanhamento em delegacias da Baixada Fluminense e Grande Rio
- Preparação para audiência de custódia e pedidos de liberdade
- Orientação técnica a familiares desde os primeiros contatos com a polícia

### Decisão — posicionamento entre Hero e About

A seção foi posicionada imediatamente após o Hero por ser um diferencial de alto impacto e urgência. Um visitante que chega ao site em um momento de crise (familiar preso, por exemplo) deve encontrar essa informação antes de qualquer outra. A ordem Hero → Plantão → Sobre → Áreas reforça a prioridade: apresenta o serviço mais urgente cedo na página, sem escondê-lo no meio do conteúdo.

### Decisão — fundo diferenciado (`#0d0d0d`)

O fundo usa `#0d0d0d`, um valor intermediário entre o fundo do Hero (`#0b0b0b`) e o fundo do About (`#0f0f0f`). Essa diferença sutil, combinada com bordas superior e inferior em `border-border`, cria uma separação visual clara entre as seções sem romper a coesão do design escuro.

### Decisão — título em `text-accent`

O título da seção usa `text-accent` (dourado) em vez do `text-foreground` usado nos demais títulos. Essa escolha deliberada confere destaque visual imediato à seção, comunicando urgência e importância sem recorrer a elementos visuais sensacionalistas.

### Decisão — botão CTA com estilo distinto e indicador de pulsação

O CTA usa `border-2 border-accent text-accent` com hover que preenche o fundo (`hover:bg-accent hover:text-background`). Esse estilo é diferente do botão primário do Hero (`bg-accent` sólido) e do botão secundário (`border-foreground/20`), sinalizando urgência e disponibilidade imediata. Um indicador circular com `animate-ping` (built-in do Tailwind) funciona como um sinal de "ativo/disponível", reforçando a ideia de plantão sem exagero visual.

### Arquivos criados

- `src/components/sections/OnCall.tsx` — componente da seção Plantão 24h

### Arquivos alterados

- `src/app/page.tsx` — OnCall importado via `@/` e renderizado entre Hero e About

---

## 27. Seção Diferenciais

### Componente criado

`src/components/sections/Differentials.tsx` — Server Component estático. Cabeçalho centralizado com eyebrow, título e subtítulo, seguido de grid de cards responsivo. Identificado com `id="diferenciais"` para navegação âncora.

### Conteúdo definido

| Elemento | Conteúdo |
|---|---|
| Eyebrow | "Por que contar com atuação técnica" |
| Título | "Defesa criminal com método, sigilo e presença." |
| Subtítulo | Análise individualizada, rigor técnico, comunicação clara e sigilo |
| Cards | 4 diferenciais com símbolo, título e texto |

### Diferenciais incluídos

| Símbolo | Título | Resumo |
|---|---|---|
| ◈ | Sigilo absoluto | Todas as informações tratadas com rigoroso sigilo profissional |
| ◇ | Estratégia individualizada | Análise independente de cada caso; sem defesa padrão |
| ◈ | Comunicação clara | Cliente informado em cada etapa, com linguagem acessível |
| ◇ | Plantão 24h | Disponibilidade para urgências criminais a qualquer hora |

### Decisão — posicionamento após PracticeAreas

Diferenciais foi posicionado após Áreas de Atuação por complementar a lógica da página: primeiro o visitante conhece o que a advogada faz (PracticeAreas), depois entende por que escolhê-la (Differentials). Essa sequência reforça a argumentação antes de chegar à seção de contato.

### Decisão — grid 4 colunas no desktop

Com apenas 4 itens simétricos, o grid de 4 colunas aproveita o espaço horizontal no desktop sem criar excesso de altura. Em tablet usa 2 colunas (sm:grid-cols-2) e em mobile 1 coluna, mantendo boa leitura em qualquer dispositivo.

### Decisão — ícones com caracteres Unicode

Em vez de bibliotecas de ícones externas ou SVGs customizados, os cards usam caracteres Unicode geométricos (`◈` e `◇`) alternados. Esses símbolos são discretos, coerentes com a estética sofisticada do projeto e eliminam qualquer dependência externa.

### Decisão — fundo `bg-background` sem borda superior

A seção usa o fundo base (`#0b0b0b`) sem borda superior, criando uma transição suave vinda de PracticeAreas (que também usa `bg-background`). A separação visual é dada pelo espaçamento generoso (`py-28`) e pelo início do cabeçalho centralizado.

### Arquivos criados

- `src/components/sections/Differentials.tsx` — componente da seção Diferenciais

### Arquivos alterados

- `src/app/page.tsx` — Differentials importado via `@/` e renderizado após PracticeAreas

---

## 28. Seção FAQ

### Componente criado

`src/components/sections/FAQ.tsx` — Client Component (`"use client"`). Acordeão interativo com 6 perguntas e respostas. Identificado com `id="faq"` para navegação âncora.

### Conteúdo definido

| # | Pergunta |
|---|---|
| 1 | Fui intimado para depor na delegacia. O que devo fazer? |
| 2 | Um familiar foi preso em flagrante. Quais são os próximos passos? |
| 3 | O atendimento é sigiloso? |
| 4 | A advogada atende casos urgentes fora do horário comercial? |
| 5 | Como funciona o primeiro atendimento? |
| 6 | Quais regiões são atendidas? |

### Decisão — `"use client"` para o acordeão

O componente requer estado interativo para controlar qual item está aberto (`useState`). Por isso usa `"use client"`, diferente de todos os outros componentes de seção que são Server Components estáticos. O escopo é mínimo: apenas o componente FAQ é client-side.

### Decisão — apenas um item aberto por vez

O estado é um único `number | null` (`openIndex`). Clicar em um item fechado define `openIndex` para aquele índice; clicar no item já aberto define `openIndex` para `null`. Isso garante que apenas uma resposta fique visível por vez, mantendo o acordeão limpo e legível.

### Decisão — transição com `grid-rows`

A expansão/colapso de cada resposta usa a técnica `grid-rows-[0fr]` → `grid-rows-[1fr]` com `overflow-hidden` no elemento filho. Essa abordagem é puramente CSS, sem cálculo de altura em JavaScript, e produz uma transição suave e acessível com `transition-all duration-300`.

### Decisão — fundo `#0f0f0f` com borda superior

O fundo usa `#0f0f0f` (mesmo valor do About), criando alternância sutil com o Differentials (`bg-background`). A borda superior em `border-border` reforça a separação visual entre as seções.

### Arquivos criados

- `src/components/sections/FAQ.tsx` — componente da seção FAQ (Client Component)

### Arquivos alterados

- `src/app/page.tsx` — FAQ importado via `@/` e renderizado após Differentials

---

## 29. Seção Contato

### Componente criado

`src/components/sections/Contact.tsx` — Client Component (`"use client"`). Layout em duas colunas no desktop: informações à esquerda, formulário à direita. Identificado com `id="contato"` para navegação âncora.

### Campos do formulário

| Campo | Tipo | Obrigatório |
|---|---|---|
| Nome completo | `input[type=text]` | Sim |
| Telefone | `input[type=tel]` | Sim |
| Mensagem | `textarea` | Sim |

### Estados do formulário

| Estado | Comportamento |
|---|---|
| `idle` | Formulário disponível para preenchimento |
| `loading` | Botão desabilitado com texto "Enviando..." |
| `success` | Formulário substituído por card de confirmação |

### Decisão — simulação de envio sem backend real

O formulário não tem `action` real nem integração com API nesta etapa. O envio é simulado com `setTimeout` de 1,5 segundo, que transita o estado para `success`. Quando o número de WhatsApp e o backend forem definidos, o `handleSubmit` será atualizado para fazer a requisição real sem alterar a estrutura do componente.

### Decisão — aviso ético incluído conforme OAB

O texto abaixo do botão de envio esclarece que o formulário não implica contratação automática nem cria relação advogado-cliente. Esse aviso é obrigatório para respeitar as normas de publicidade da OAB e foi posicionado imediatamente abaixo do botão para garantir visibilidade antes do envio.

### Decisão — fundo `#0b0b0b` (fechamento do ciclo visual)

A seção retorna ao fundo base do Hero (`#0b0b0b`), fechando o ciclo visual da landing page: o site começa e termina no mesmo tom escuro. Esse fechamento reforça coesão e evita que a página termine em um fundo de valor diferente.

### Dados de contato

- **Localização:** Nova Iguaçu — Baixada Fluminense e Grande Rio
- **WhatsApp:** placeholder `#` — será atualizado com o número real da advogada
- **Disponibilidade:** Plantão 24h para urgências criminais

### Arquivos criados

- `src/components/sections/Contact.tsx` — componente da seção Contato (Client Component)

### Arquivos alterados

- `src/app/page.tsx` — Contact importado via `@/` e renderizado após FAQ

---

## 30. Integração Resend — formulário de contato

### O que foi feito

Substituição da simulação (`setTimeout`) por envio real de e-mail via **Resend**, sem alterar nada no visual do componente.

### Route Handler criado

`src/app/api/contact/route.ts` — Route Handler Next.js (método POST). Responsável por:

1. Ler os campos `name`, `phone` e `message` do body JSON
2. Validar que nenhum campo está vazio (retorna `400` se faltar)
3. Chamar `resend.emails.send(...)` com os dados formatados
4. Retornar `200` em caso de sucesso ou `500` em caso de erro no envio

### Configuração do e-mail

| Campo | Valor |
|---|---|
| `from` | `Site Monique Ranauro <onboarding@resend.dev>` |
| `to` | `moniqueranauro@hotmail.com` |
| `subject` | `Nova mensagem pelo site — [nome do remetente]` |
| `text` | Nome, telefone e mensagem em texto simples |

### Decisão — `onboarding@resend.dev` como remetente

O domínio `onboarding@resend.dev` é o domínio de teste oficial do Resend, disponível sem configuração adicional. Quando o domínio real da advogada for verificado no painel do Resend, basta atualizar apenas o campo `from` em `route.ts` — nenhum outro arquivo precisa ser alterado.

### Variável de ambiente necessária

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

Deve ser configurada no `.env.local` para desenvolvimento local e nas variáveis de ambiente da Vercel para produção. A chave é obtida no painel do Resend em resend.com/api-keys.

### Atualização no Contact.tsx

- `handleSubmit` tornou-se `async`
- `setTimeout` removido
- `fetch("/api/contact", { method: "POST", ... })` chamado no submit
- Adicionado estado `error: string | null` para exibir mensagem de erro inline sem apagar os dados do formulário
- Em caso de sucesso (`res.ok`): transita para estado `success` (card de confirmação)
- Em caso de erro (`400` / `500` / falha de rede): exibe mensagem de erro em `text-red-400` acima do botão e retorna ao estado `idle`

### Arquivos criados

- `src/app/api/contact/route.ts` — Route Handler POST para envio de e-mail via Resend

### Arquivos alterados

- `src/components/sections/Contact.tsx` — integração real com a API; remoção do setTimeout; tratamento de erro inline
- `package.json` / `package-lock.json` — dependência `resend` adicionada