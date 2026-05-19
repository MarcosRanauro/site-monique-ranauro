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
| Telefone | `input[type=tel]` | Sim — máscara `(XX) 9XXXX-XXXX`, 11 dígitos obrigatórios |
| Mensagem | `textarea` | Sim |

### Máscara e validação do campo telefone

Adicionados na branch `feature/contact-phone-mask`, sem bibliotecas externas.

- **Formato aceito:** `(XX) 9XXXX-XXXX` (celular brasileiro com DDD — 11 dígitos numéricos)
- **Máscara automática:** a função `maskPhone` extrai apenas dígitos da entrada e aplica a formatação em tempo real conforme o usuário digita, bloqueando letras e caracteres especiais
- **Validação no envio:** antes do `fetch`, `handleSubmit` verifica se os dígitos extraídos do campo somam 11 caracteres; caso contrário, exibe erro inline abaixo do campo (`phoneError`) e interrompe o envio sem apagar o valor digitado
- **Mensagem de erro:** `"Informe um celular válido com DDD. Ex: (21) 99999-9999"`, em `text-xs text-red-400`, padrão visual idêntico ao erro geral do formulário
- **Limpeza do erro:** `phoneError` é limpo assim que o usuário começa a corrigir o campo (`handlePhoneChange` chama `setPhoneError(null)` ao digitar)

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

---

## 31. Footer institucional

### Componente criado

`src/components/layout/Footer.tsx` — Server Component estático (sem `"use client"`). Estrutura em três colunas no desktop e uma coluna no mobile, com barra final separada.

### Estrutura de colunas

| Coluna | Conteúdo |
|---|---|
| 1 — Marca | Nome "Monique Ranauro" em Playfair Display, subtítulo "ADVOCACIA CRIMINAL" em dourado, texto institucional |
| 2 — Navegação | Título "Navegação" + 6 links âncora (Início, Sobre, Atuação, Diferenciais, FAQ, Contato) |
| 3 — Contato | Título "Contato" + link WhatsApp (placeholder `#`), localização, disponibilidade |

### Barra final

Separada por `border-t border-border`, com dois textos em `text-xs text-muted`:
- **Esquerda:** aviso de direitos autorais
- **Direita:** aviso informativo ("caráter exclusivamente informativo / não constitui consultoria jurídica")

O aviso da direita reforça a conformidade ética exigida pela OAB para sites de advocacia.

### Decisão — fundo `#080808`

O fundo é ligeiramente mais escuro que o base da página (`#0b0b0b`), marcando visualmente o encerramento da landing page. Essa diferença sutil separa o rodapé do restante do conteúdo sem quebrar a coesão do design escuro.

### Decisão — posicionamento como irmão do `<main>`

O Footer é renderizado fora do `<main>`, como elemento irmão no fragmento React (`<> <Header /> <main>...</main> <Footer /> </>`). Isso respeita a semântica HTML correta e evita que o rodapé seja contado como conteúdo principal da página.

### Arquivos criados

- `src/components/layout/Footer.tsx` — componente Footer institucional

### Arquivos alterados

- `src/app/page.tsx` — Footer importado via `@/` e renderizado após `</main>`

---

## 32. Menu mobile e botão WhatsApp flutuante

### Conversão do Header para `"use client"`

O `Header.tsx` foi convertido de Server Component para Client Component para suportar o estado `isOpen` (menu hambúrguer). Adicionados `useState` e `useEffect` do React.

O link FAQ (`#faq`) também foi incluído na lista de links de navegação nesta etapa — estava ausente no Header desde a criação da seção.

### Menu hambúrguer

- Botão com caracteres Unicode: `☰` (aberto) e `✕` (fechado), visível apenas em mobile (`md:hidden`)
- Alterna `isOpen` via `useState<boolean>`
- Painel mobile renderizado condicionalmente abaixo da barra do Header, com `bg-background` e `border-b border-border`
- Cada link tem `min-h-[44px]` para área de toque confortável e `border-b border-border` entre itens
- Função `close()` chamada em cada link âncora — fecha o menu ao navegar
- Botão "Falar no WhatsApp" presente no painel mobile com estilo outline em dourado

### Decisão — bloqueio de scroll com menu aberto

`useEffect` monitora `isOpen` e aplica `document.body.style.overflow = "hidden"` quando o menu está aberto. O cleanup da função reseta para `""`, garantindo que o scroll seja restaurado ao fechar ou ao desmontar o componente.

### Componente WhatsAppButton

`src/components/ui/WhatsAppButton.tsx` — Server Component estático (sem `"use client"`). Botão fixo (`position: fixed`) no canto inferior direito, com `z-50`.

| Propriedade | Valor |
|---|---|
| Posição | `fixed bottom-6 right-6 z-50` |
| Ícone | Letra "W" em Playfair Display (`font-heading`) |
| Fundo | `bg-background` com `border border-accent` |
| Hover | `bg-accent text-background` |
| Mobile | Apenas ícone "W" |
| Desktop | Ícone "W" + texto "WhatsApp" |
| `href` | `#` — placeholder até número real ser confirmado |

### Arquivos criados

- `src/components/ui/WhatsAppButton.tsx` — botão flutuante de WhatsApp

### Arquivos alterados

- `src/components/layout/Header.tsx` — convertido para `"use client"`, menu hambúrguer adicionado, link FAQ incluído
- `src/app/page.tsx` — `WhatsAppButton` importado via `@/` e renderizado após `<Footer />`

---

## 33. Auditoria de responsividade e acessibilidade

### Breakpoints auditados

375px (iPhone SE) · 390px (iPhone 14) · 430px (iPhone 15 Plus) · 768px (tablet) · 1280px (desktop)

### Problemas encontrados e corrigidos

**Espaçamento vertical excessivo em mobile (todas as seções)**

`py-28` (112px) sem variante mobile era excessivo em telas de 375–430px, comprimindo o conteúdo e reduzindo o espaço disponível para texto.

| Componente | Antes | Depois |
|---|---|---|
| `Hero.tsx` | `py-24` | `py-16 md:py-24` |
| `OnCall.tsx` | `py-28` | `py-16 md:py-28` |
| `About.tsx` | `py-28` | `py-16 md:py-28` |
| `PracticeAreas.tsx` | `py-28` | `py-16 md:py-28` |
| `Differentials.tsx` | `py-28` | `py-16 md:py-28` |
| `FAQ.tsx` | `py-28` | `py-16 md:py-28` |
| `Contact.tsx` | `py-28` | `py-16 md:py-28` |

**Gap excessivo entre cabeçalho de seção e conteúdo em mobile**

`mb-16` (64px) sem variante mobile nas seções com cabeçalho centralizado.

| Componente | Antes | Depois |
|---|---|---|
| `PracticeAreas.tsx` | `mb-16` | `mb-10 md:mb-16` |
| `Differentials.tsx` | `mb-16` | `mb-10 md:mb-16` |
| `FAQ.tsx` | `mb-16` | `mb-10 md:mb-16` |

**Gap entre colunas do Hero em mobile**

`gap-16` sem variante mobile — 64px de espaço entre colunas em layout de 1 coluna era desnecessário.

| Componente | Antes | Depois |
|---|---|---|
| `Hero.tsx` | `gap-16` | `gap-12 md:gap-16` |

**Acessibilidade — botões do acordeão FAQ**

Botões do acordeão sem `aria-expanded` (leitores de tela não comunicavam estado aberto/fechado) e sem `type="button"` explícito.

| Atributo | Antes | Depois |
|---|---|---|
| `aria-expanded` | ausente | `aria-expanded={isOpen}` |
| `type` | ausente | `type="button"` |

### Verificações sem alteração necessária

| Item | Status |
|---|---|
| `lang="pt-BR"` no `<html>` | ✅ Confirmado em `layout.tsx` |
| Ordem de headings h1→h2→h3 | ✅ Correta em todas as seções |
| Áreas de toque ≥ 44px em todos os botões | ✅ Confirmado |
| `aria-label` no hambúrguer e WhatsAppButton | ✅ Presentes |
| Hover states em cards, links e botões | ✅ Funcionando |
| Transição do acordeão FAQ | ✅ Funcionando |
| Coluna decorativa do Hero/About oculta em mobile | ✅ `hidden md:flex` |
| Grid de PracticeAreas e Differentials em tablet | ✅ 2 colunas em sm/md |
| Footer já com `py-16` sem necessidade de ajuste | ✅ |
| Header: menu mobile com min-h-[44px] por item | ✅ |

### Arquivos alterados

- `src/components/sections/Hero.tsx`
- `src/components/sections/OnCall.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/PracticeAreas.tsx`
- `src/components/sections/Differentials.tsx`
- `src/components/sections/FAQ.tsx`
- `src/components/sections/Contact.tsx`

---

## 34. SEO completo e otimizações de performance

### Metadata configurada em `src/app/layout.tsx`

| Campo | Valor |
|---|---|
| `title.default` | "Monique Ranauro \| Advogada Criminalista em Nova Iguaçu" |
| `title.template` | "%s \| Monique Ranauro Advocacia Criminal" |
| `description` | Advocacia criminal, Nova Iguaçu, Baixada Fluminense, plantão 24h |
| `authors` | Monique Ranauro |
| `creator` | Monique Ranauro |
| `alternates.canonical` | `https://moniqueranauro.adv.br` (placeholder) |
| `robots` | index: true, follow: true |
| `viewport` | Export separado (`Viewport`) — `width: device-width, initialScale: 1` |

> **Nota:** No Next.js 16, `viewport` é um export separado do `metadata` (`export const viewport: Viewport`). Colocá-lo dentro do objeto `metadata` está depreciado nessa versão.

### Open Graph e Twitter Card

| Campo | Valor |
|---|---|
| OG type | `website` |
| OG locale | `pt_BR` |
| OG url / canonical | `https://moniqueranauro.adv.br` |
| OG siteName | "Monique Ranauro Advocacia Criminal" |
| OG image | `/og-image.svg` — 1200×630 |
| OG image alt | "Monique Ranauro — Advogada Criminalista" |
| Twitter card | `summary_large_image` |
| Twitter image | `/og-image.svg` |

### Palavras-chave e justificativa SEO local

As keywords foram escolhidas com foco em **SEO local geográfico**, combinando o nome da profissional com os territórios de atuação:

- "advogada criminalista Nova Iguaçu" — busca direta por localização
- "advocacia criminal Baixada Fluminense" — abrangência regional
- "defesa criminal Grande Rio" — expansão para a região metropolitana
- "prisão em flagrante Baixada Fluminense" — busca de urgência por serviço específico
- "habeas corpus Nova Iguaçu" — busca técnica jurídica local
- "Monique Ranauro advogada" — busca nominativa pela profissional

### Sitemap — `src/app/sitemap.ts`

Gerado via convenção de arquivo do Next.js (`MetadataRoute.Sitemap`). Uma entrada para a URL raiz com:
- `changeFrequency: "monthly"`
- `priority: 1`
- Acessível em `/sitemap.xml` automaticamente

### Robots — `src/app/robots.ts`

Gerado via convenção de arquivo do Next.js (`MetadataRoute.Robots`). Permite todos os crawlers na raiz e aponta para o sitemap. Acessível em `/robots.txt` automaticamente.

### Imagem Open Graph — `public/og-image.svg`

Placeholder SVG 1200×630 com:
- Fundo `#0b0b0b`
- Nome em serif grande (`Georgia`)
- Subtítulo "ADVOGADA CRIMINALISTA" em dourado (`#b08d57`) com tracking largo
- Localização: "Nova Iguaçu · Baixada Fluminense · Grande Rio"
- Linha vertical e separadores em dourado
- Texto de rodapé institucional

Será substituída por imagem PNG/JPG real quando o domínio for configurado e imagem profissional estiver disponível.

### Performance — verificações realizadas

| Item | Status |
|---|---|
| Tags `<img>` nuas no código | ✅ Nenhuma encontrada |
| Fontes via `next/font/google` | ✅ Configurado desde o início (Playfair Display + Inter) |
| `viewport` explícito no `layout.tsx` | ✅ Adicionado como export separado |

### Atualização necessária quando domínio for confirmado

~~Os seguintes campos usam `https://moniqueranauro.adv.br` como placeholder~~ — **domínio confirmado e atualizado.** Ver seção 35.

### Arquivos criados

- `src/app/sitemap.ts` — sitemap automático
- `src/app/robots.ts` — robots.txt automático
- `public/og-image.svg` — imagem Open Graph placeholder

### Arquivos alterados

- `src/app/layout.tsx` — metadata completa, Open Graph, Twitter Card, viewport, canonical

---

## 35. Configuração de produção — domínio confirmado

### Domínio confirmado

```
moniqueranauro.com.br
```

O domínio `moniqueranauro.adv.br` era um placeholder. O domínio real confirmado é `moniqueranauro.com.br`.

### URLs atualizadas

Todos os arquivos que referenciavam o domínio placeholder foram atualizados para o domínio definitivo:

| Arquivo | Campo | Valor anterior | Valor atual |
|---|---|---|---|
| `src/app/layout.tsx` | `SITE_URL` | `https://moniqueranauro.adv.br` | `https://moniqueranauro.com.br` |
| `src/app/sitemap.ts` | `url` | `https://moniqueranauro.adv.br` | `https://moniqueranauro.com.br` |
| `src/app/robots.ts` | `sitemap` | `https://moniqueranauro.adv.br/sitemap.xml` | `https://moniqueranauro.com.br/sitemap.xml` |

### Resend configurado com domínio próprio

O campo `from` do e-mail foi atualizado do domínio de teste do Resend para o domínio real da advogada:

| Campo | Valor anterior | Valor atual |
|---|---|---|
| `from` | `Site Monique Ranauro <onboarding@resend.dev>` | `Site Monique Ranauro <site@moniqueranauro.com.br>` |

> **Importante:** Para que o envio funcione com este `from`, o domínio `moniqueranauro.com.br` deve ser verificado no painel do Resend (resend.com/domains). Sem verificação, o Resend rejeitará o envio.

### E-mail de destino final

O e-mail de destino das mensagens do formulário de contato foi atualizado:

| Campo | Valor anterior | Valor atual |
|---|---|---|
| `to` | `marcosranauro@hotmail.com` | `moniqueranauro@gmail.com` |

### Arquivos alterados

- `src/app/layout.tsx` — `SITE_URL` atualizado para `https://moniqueranauro.com.br`
- `src/app/sitemap.ts` — URL raiz atualizada para `https://moniqueranauro.com.br`
- `src/app/robots.ts` — URL do sitemap atualizada para `https://moniqueranauro.com.br/sitemap.xml`
- `src/app/api/contact/route.ts` — `from` e `to` atualizados para domínio e e-mail definitivos

---

## 36. Configuração do WhatsApp — número real

### Número configurado

```
21959247775
```

### Link utilizado

```
https://wa.me/5521959247775?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Monique%20Ranauro.
```

A mensagem pré-preenchida decodificada é:

```
Olá, gostaria de falar com a Dra. Monique Ranauro.
```

### Atributos aplicados em todos os links

Todos os links de WhatsApp foram atualizados com:

```tsx
target="_blank"
rel="noopener noreferrer"
```

### Arquivos atualizados

| Arquivo | Link anterior | Ocorrências |
|---|---|---|
| `src/components/layout/Header.tsx` | `#contato` (desktop e mobile) | 2 |
| `src/components/layout/Footer.tsx` | `#` | 1 |
| `src/components/sections/OnCall.tsx` | `#contato` | 1 |
| `src/components/sections/Contact.tsx` | `#` | 1 |
| `src/components/ui/WhatsAppButton.tsx` | `#` | 1 |

### Branch

Alterações realizadas na branch `feature/whatsapp-links`.

---

## 37. Correção de contraste de acessibilidade (WCAG AA)

### Contexto

O Lighthouse reportava score 95 em acessibilidade com a falha:
> "Background and foreground colors do not have a sufficient contrast ratio."

O problema estava em usos do token `--accent` (#b08d57) com modificadores de opacidade Tailwind (`/70` e `/80`), que reduziam o contraste abaixo do mínimo WCAG AA de 4.5:1 para texto normal.

Textos com `text-muted` (#a8a29e) e outros modificadores como `text-foreground/80` já passavam sem alteração.

### Método de cálculo

Luminância relativa via fórmula sRGB linearizada:
- Componentes sRGB convertidos para linear com gamma 2.4
- L = 0.2126R + 0.7152G + 0.0722B
- Ratio = (L_claro + 0.05) / (L_escuro + 0.05)

### Auditoria completa

| Combinação | Ratio | Mínimo exigido | Resultado |
|---|---|---|---|
| `text-muted` #a8a29e / `#0b0b0b` | 7.81:1 | 4.5:1 | ✅ Passa |
| `text-accent` #b08d57 / `#0b0b0b` | 6.37:1 | 4.5:1 | ✅ Passa |
| `text-muted/80` efetivo / `#0b0b0b` | 5.32:1 | 4.5:1 | ✅ Passa |
| `text-foreground/80` efetivo / `#0b0b0b` | 11.19:1 | 4.5:1 | ✅ Passa |
| `text-foreground/90` efetivo / `#0b0b0b` | ~14:1 | 4.5:1 | ✅ Passa |
| `text-accent/70` efetivo #7f6640 / `#0b0b0b` | **3.63:1** | 4.5:1 | ❌ Falha |
| `text-accent/80` efetivo #8f7348 / `#0b0b0b` | **4.42:1** | 4.5:1 | ❌ Falha |

### Elementos com falha encontrados

| Arquivo | Elemento | Classe anterior | Ratio antes | Ratio depois |
|---|---|---|---|---|
| `Hero.tsx:73` | "Defesa Criminal" (10px, decorativo) | `text-accent/70` | 3.63:1 | 6.37:1 |
| `Differentials.tsx:55` | Símbolos ◈/◇ (xl=20px) | `text-accent/70` | 3.63:1 | 6.37:1 |
| `PracticeAreas.tsx:74` | Números 01–07 (sm, semibold) | `text-accent/80` | 4.42:1 | 6.37:1 |

### Correções aplicadas

Solução: remover o modificador de opacidade, usando `text-accent` puro (6.37:1 em todos os fundos escuros do site).

- Nenhuma nova variável CSS foi necessária.
- Nenhum layout, espaçamento ou estrutura foi alterado.
- Em `Differentials.tsx`, o `group-hover:text-accent` redundante foi removido junto com a mudança (o estado padrão já é `text-accent`).

### Arquivos alterados

- `src/components/sections/Hero.tsx` — `text-accent/70` → `text-accent` (linha 73)
- `src/components/sections/Differentials.tsx` — `text-accent/70 group-hover:text-accent` → `text-accent` (linha 55)
- `src/components/sections/PracticeAreas.tsx` — `text-accent/80` → `text-accent` (linha 74)

### Branch

Alterações realizadas na branch `feature/accessibility-contrast`.

---

## 38. Otimização de performance — Lighthouse

### Contexto

O Lighthouse reportava score 82 em performance com os seguintes problemas:

| Problema | Valor |
|---|---|
| Legacy JavaScript | Est. savings 14 KiB |
| Reduce unused JavaScript | Est. savings 461 KiB |
| Minimize main-thread work | 2.4s |
| Total Blocking Time (TBT) | 590ms |
| Largest Contentful Paint (LCP) | 2.5s |

### Análise de causa

O alto volume de JavaScript "não utilizado" na carga inicial vem dos componentes Client (`"use client"`) `FAQ` e `Contact`, que ficavam no bundle principal mesmo sendo seções abaixo do fold. O browser carregava e parseava todo o código interativo (state, handlers, form masking) antes de o usuário chegar a essas seções, bloqueando o main thread.

### Restrição do Next.js 16 (documentada)

A documentação em `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md` especifica duas restrições críticas:

> "When a Server Component dynamically imports a Client Component, automatic code splitting is currently not supported."

> "`ssr: false` is not allowed with `next/dynamic` in Server Components. Please move it into a Client Component."

Como `page.tsx` é um Server Component (sem `"use client"`), o uso de `ssr: false` causaria erro de build. A abordagem adotada foi `dynamic()` sem `ssr: false`, que:
- Cria Suspense boundaries habilitando streaming progressivo
- Separa o JS em chunks distintos carregados de forma não-bloqueante
- Preserva o SSR (HTML gerado no servidor para SEO e LCP)
- Não requer conversão de `page.tsx` para Client Component

### Otimizações aplicadas

#### 1. `next.config.ts` — configurações de build

| Opção | Valor | Efeito |
|---|---|---|
| `compress` | `true` | Compressão gzip explícita (já é padrão, adicionado por clareza) |
| `images.formats` | `["image/avif", "image/webp"]` | Prepara o projeto para otimização automática de imagens quando fotos forem adicionadas |

Nota sobre `optimizePackageImports`: não adicionado pois nenhum pacote instalado neste projeto se beneficia desta opção (a lista default cobre `lucide-react`, `date-fns`, etc. — nenhum deles está no projeto).

#### 2. `src/app/page.tsx` — lazy loading de componentes abaixo do fold

Componentes mantidos com import estático (acima ou próximo ao fold):

- `Header` — crítico para layout inicial
- `Hero` — primeiro conteúdo visível, afeta LCP
- `OnCall` — primeira seção após o hero
- `About` — conteúdo primário da página
- `PracticeAreas` — seção central
- `Differentials` — ainda próxima do fold em desktop
- `Footer`, `WhatsAppButton` — estruturais

Componentes migrados para `dynamic()` (abaixo do fold):

| Componente | Motivo | Loading placeholder |
|---|---|---|
| `FAQ` | Client Component com accordeão interativo | `<div bg-[#0f0f0f] py-16 md:py-28>` |
| `Contact` | Client Component com form, estado complexo, fetch | `<div bg-[#0b0b0b] py-16 md:py-28>` |

Os placeholders usam as mesmas cores de fundo e `py` das seções originais para evitar layout shift (CLS).

#### 3. `src/app/layout.tsx` — `metadataBase`

Adicionado `metadataBase: new URL(SITE_URL)` para resolver o warning do Lighthouse/Next.js sobre Open Graph e Twitter images sem URL base definida.

#### 4. `globals.css` — fontes

Confirmado: `font-display: swap` já está configurado nas fontes Playfair Display e Inter via `display: "swap"` no `src/app/layout.tsx`. Nenhuma alteração necessária.

### Resultado do build

```
✓ Compiled successfully
✓ TypeScript OK
✓ Static pages geradas sem warnings
Route / → ○ (Static) — prerendered as static content
```

### Melhoria esperada no Lighthouse

| Métrica | Antes | Esperado |
|---|---|---|
| Performance score | 82 | 90+ |
| Unused JavaScript | 461 KiB | Redução significativa |
| TBT | 590ms | < 200ms |
| LCP | 2.5s | < 2.0s |

### Arquivos alterados

- `next.config.ts` — `compress` e `images.formats` adicionados
- `src/app/page.tsx` — imports estáticos → `dynamic()` para FAQ e Contact
- `src/app/layout.tsx` — `metadataBase` adicionado

### Branch

Alterações realizadas na branch `feature/performance-optimization`.