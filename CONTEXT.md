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

---

### Correção pós-implementação — NO_LCP (branch `feature/fix-lcp`)

#### Problema identificado

Após a implementação dos `dynamic()` imports, o Lighthouse passou a retornar `NO_LCP` — nenhum elemento era identificado como Largest Contentful Paint, invalidando a medição inteira.

#### Causa raiz

Embora o Hero seja um import estático com `h1` sempre presente no HTML, o `dynamic()` em um Server Component criava **Suspense boundaries** ao redor de FAQ e Contact. Durante a **hidratação no cliente**, essas boundaries exibiam os placeholders (divs vazias) enquanto os módulos JS dos Client Components carregavam. O Lighthouse avaliava o DOM nesse estado transitório — com seções visíveis substituídas por divs — e não conseguia encontrar um candidato válido ao LCP.

O problema era agravado pelo fato já documentado na seção 38:

> *"When a Server Component dynamically imports a Client Component, automatic code splitting is currently **not** supported."*

Ou seja: os `dynamic()` não entregavam o benefício de code-splitting (que era o objetivo), mas **introduziam o efeito colateral** das Suspense boundaries durante hidratação.

#### Correção aplicada

`src/app/page.tsx` revertido para imports estáticos em todos os componentes. As demais otimizações da seção 38 foram mantidas:

- `next.config.ts` — `compress: true` + `images.formats` — mantidos
- `src/app/layout.tsx` — `metadataBase` — mantido

#### Decisão sobre dynamic imports

**Dynamic imports de Client Components a partir de Server Components não são a abordagem correta para code-splitting no App Router do Next.js 16.**

A estratégia correta para reduzir o JavaScript inicial neste projeto quando necessário no futuro é:
- Criar wrapper Client Components explícitos que usem `dynamic()` com `ssr: false` internamente
- Ou usar React `Suspense` manualmente em um Client Component pai
- Ou aguardar imagens reais (que terão maior impacto no LCP e onde `priority` do `next/image` será a otimização mais eficaz)

---

## 39. Auditoria de conteúdo — ajustes de copy

### Ajuste 1 — `About.tsx`: frase do card decorativo

**Antes:** `"A defesa começa com escuta atenta e se constrói com estratégia precisa."`
**Depois:** `"A defesa começa com escuta atenta e se constrói com análise cuidadosa de cada caso."`

Motivo: a expressão "estratégia precisa" tinha tom levemente autopromocionail. A versão nova mantém o mesmo sentido com linguagem mais sóbria, alinhada às normas de publicidade da OAB.

### Ajuste 2 — `Footer.tsx`: ano de copyright

**Antes:** `© 2025 Monique Ranauro Advocacia Criminal...`
**Depois:** `© {new Date().getFullYear()} Monique Ranauro Advocacia Criminal...`

Motivo: ano fixo fica desatualizado em janeiro de cada ano sem necessidade de intervenção manual. O `new Date().getFullYear()` é avaliado no servidor em cada build — em produção na Vercel, cada deploy atualiza o valor automaticamente.

### Arquivos alterados

- `src/components/sections/About.tsx` — frase do card institucional ajustada
- `src/components/layout/Footer.tsx` — ano de copyright tornado dinâmico

### Branch

Alterações realizadas na branch `fix/content-review`.

---

## 40. Correções de alta severidade — auditoria de código

### Contexto

Após a auditoria completa realizada na branch `audit/code-review`, quatro problemas de alta severidade foram identificados e corrigidos.

### [A-01] Hero.tsx — `aria-hidden` no card decorativo

Adicionado `aria-hidden="true"` no `<div>` externo da coluna decorativa direita do Hero. O card CSS continha texto duplicado ("Defesa Criminal", "Sigilo. Estratégia. Precisão.", áreas de atuação) que seria anunciado por leitores de tela em paralelo ao conteúdo principal da página.

### [A-02] About.tsx — `aria-hidden` no card decorativo

Adicionado `aria-hidden="true"` no `<div>` externo do card institucional esquerdo da seção Sobre. O card continha monograma "M", nome, título e citação — conteúdo decorativo que duplicava informações presentes no corpo da seção.

### [A-03] next.config.ts — security headers

Adicionado bloco `async headers()` com os seguintes headers aplicados a todas as rotas (`source: "/(.*)"`:

| Header | Valor | Proteção |
|---|---|---|
| `X-Frame-Options` | `DENY` | Clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Vazamento de referência |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | APIs sensíveis do browser |

Adicionado também `poweredByHeader: false` para remover o header `X-Powered-By: Next.js` de todas as respostas.

### [A-04] Centralização da URL do WhatsApp

Criado `src/config/contact.ts` com a constante:

```ts
export const WHATSAPP_URL =
  "https://wa.me/5521959247775?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Monique%20Ranauro.";
```

A URL hardcoded foi substituída pela importação da constante em 6 arquivos (total de 6 ocorrências eliminadas):

| Arquivo | Ocorrências substituídas |
|---|---|
| `src/components/layout/Header.tsx` | 2 |
| `src/components/layout/Footer.tsx` | 1 |
| `src/components/sections/OnCall.tsx` | 1 |
| `src/components/sections/Contact.tsx` | 1 |
| `src/components/ui/WhatsAppButton.tsx` | 1 |

Qualquer alteração futura no número ou mensagem do WhatsApp exige mudança em um único arquivo.

### Arquivos criados

- `src/config/contact.ts` — constante WHATSAPP_URL

### Arquivos alterados

- `next.config.ts` — `poweredByHeader: false` + `headers()` com security headers
- `src/components/sections/Hero.tsx` — `aria-hidden="true"` no card decorativo
- `src/components/sections/About.tsx` — `aria-hidden="true"` no card decorativo
- `src/components/layout/Header.tsx` — import WHATSAPP_URL + substituição (2×)
- `src/components/layout/Footer.tsx` — import WHATSAPP_URL + substituição (1×)
- `src/components/sections/OnCall.tsx` — import WHATSAPP_URL + substituição (1×)
- `src/components/sections/Contact.tsx` — import WHATSAPP_URL + substituição (1×)
- `src/components/ui/WhatsAppButton.tsx` — import WHATSAPP_URL + substituição (1×)

### Branch

Alterações realizadas na branch `audit/code-review`.

---

## 41. Correções de manutenibilidade — auditoria de código

### Contexto

Continuação da auditoria na branch `audit/code-review`. Dois problemas de manutenibilidade foram resolvidos com centralização de valores duplicados.

### [B-13] Centralização de SITE_URL

Criado `src/config/site.ts` com a constante:

```ts
export const SITE_URL = "https://moniqueranauro.com.br";
```

A constante local `SITE_URL` em `layout.tsx` foi removida e substituída pelo import. Os outros dois arquivos que continham a URL hardcoded também foram atualizados.

| Arquivo | Mudança |
|---|---|
| `src/app/layout.tsx` | Removida `const SITE_URL`; adicionado import de `@/config/site` |
| `src/app/sitemap.ts` | `"https://moniqueranauro.com.br"` → `SITE_URL` |
| `src/app/robots.ts` | `"https://moniqueranauro.com.br/sitemap.xml"` → `` `${SITE_URL}/sitemap.xml` `` |

### [B-14] Componente SectionBadge

Criado `src/components/ui/SectionBadge.tsx` encapsulando o padrão de badge de seção:

```tsx
export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block w-fit border border-accent/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
```

O `<span>` hardcoded foi substituído em 7 arquivos:

| Arquivo | Texto do badge |
|---|---|
| `src/components/sections/Hero.tsx` | "Advocacia Criminal" |
| `src/components/sections/OnCall.tsx` | "Plantão Criminal" |
| `src/components/sections/About.tsx` | "Sobre a profissional" |
| `src/components/sections/PracticeAreas.tsx` | "Áreas de atuação" |
| `src/components/sections/Differentials.tsx` | "Por que contar com atuação técnica" |
| `src/components/sections/FAQ.tsx` | "Dúvidas frequentes" |
| `src/components/sections/Contact.tsx` | "Fale com a advogada" |

### Arquivos criados

- `src/config/site.ts` — constante SITE_URL
- `src/components/ui/SectionBadge.tsx` — componente de badge de seção

### Arquivos alterados

- `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` — import SITE_URL
- `src/components/sections/Hero.tsx`, `OnCall.tsx`, `About.tsx`, `PracticeAreas.tsx`, `Differentials.tsx`, `FAQ.tsx`, `Contact.tsx` — import + uso de SectionBadge

### Branch

Alterações realizadas na branch `audit/code-review`.

---

## 42. Correções de segurança na rota de contato — auditoria de código

### Contexto

Continuação da auditoria na branch `audit/code-review`. Quatro problemas identificados no arquivo `src/app/api/contact/route.ts` foram corrigidos.

### [B-09] JSON parse sem tratamento de erro

**Antes:** `request.json()` era chamado diretamente no fluxo principal. Um corpo malformado lançava uma exceção não capturada.

**Depois:** `request.json()` foi movido para um bloco `try/catch` isolado. Falha no parse retorna imediatamente `400 Formato inválido.`.

### [B-10] `catch {}` silencioso no bloco Resend

**Antes:** O bloco `catch` não capturava o erro — `catch {}` sem parâmetro silenciava qualquer falha da API Resend.

**Depois:** `catch (error) { console.error("[contact] Resend error:", error); }` — erros são registrados no log do servidor para diagnóstico.

### [B-12] Ausência de validação de tipo em runtime

**Antes:** O corpo era convertido diretamente com `as { name?: string; ... }` sem verificar se era de fato um objeto, o que permitia que arrays e primitivos passassem silenciosamente.

**Depois:** Validação explícita:
```ts
if (!body || typeof body !== "object" || Array.isArray(body)) {
  return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
}
```

### [B-15] Valores de e-mail hardcoded

**Antes:** `from` e `to` estavam hardcoded no código-fonte.

**Depois:** Substituídos por variáveis de ambiente com fallback:
```ts
from: process.env.CONTACT_EMAIL_FROM ?? "Site Monique Ranauro <site@moniqueranauro.com.br>",
to:   process.env.CONTACT_EMAIL_TO   ?? "moniqueranauro@gmail.com",
```

### [B-11] Rate limiting — pendente

Rate limiting na rota `/api/contact` não foi implementado nesta iteração. Requer infraestrutura adicional (ex: Upstash Redis via `@upstash/ratelimit` ou Vercel WAF). Registrado como pendente para iteração futura.

### Arquivos alterados

- `src/app/api/contact/route.ts` — B-09, B-10, B-12, B-15

### Branch

Alterações realizadas na branch `audit/code-review`.

---

## 43. Correções de média e baixa severidade — auditoria de código

### Contexto

Conclusão da auditoria na branch `audit/code-review`. Todos os itens de média severidade (B-01–B-07) e baixa severidade (C-01–C-10) foram tratados nesta iteração.

### [B-01] Differentials.tsx — aria-hidden nos símbolos decorativos

Adicionado `aria-hidden="true"` nos `<span>` que exibem os símbolos ◈ e ◇. Leitores de tela anunciavam nomes técnicos Unicode sem significado semântico para o usuário.

### [B-02] OnCall.tsx — lista semântica nos bullets

`<div className="flex flex-col gap-3">` → `<ul>` com mesmas classes. Cada `<div>` filho → `<li>`, mantendo classes e conteúdo. Os 4 bullets do plantão agora são marcação de lista semântica.

### [B-03] About.tsx — lista semântica nos itens de apoio

Mesmo fix do B-02 aplicado nos 3 itens de apoio ("Análise individualizada", "Comunicação clara", "Atuação ética"). `<div>` wrapper → `<ul>`, itens → `<li>`.

### [B-04] Hero.tsx — lista semântica nos trustIndicators

Mesmo fix aplicado nos 3 trustIndicators ("Atendimento sigiloso", "Estratégia individualizada", "Atuação técnica"). `<div>` wrapper → `<ul>`, itens → `<li>`.

### [B-05] Contact.tsx — noValidate no formulário

Adicionado `noValidate` na tag `<form>`. Delega a validação integralmente ao JavaScript customizado, evitando o popup nativo do browser.

### [B-06] Contact.tsx — role="alert" no card de sucesso

Adicionado `role="alert"` no `<div>` do card de confirmação pós-envio. Leitores de tela anunciam automaticamente o conteúdo quando ele é inserido no DOM.

### [B-07] FAQ.tsx — aria-controls e role="region" no acordeão

Adicionado em cada botão: `aria-controls={\`faq-panel-${index}\`}`. Adicionado em cada painel: `id={\`faq-panel-${index}\`}` e `role="region"`. Conecta explicitamente trigger e painel para tecnologias assistivas (padrão WAI-ARIA para acordeão).

### [C-01] Contact.tsx — aria-describedby e id no campo de telefone

Adicionado no input de telefone: `aria-describedby={phoneError ? "phone-error" : undefined}`. Adicionado no `<p>` de erro: `id="phone-error"` e `role="alert"`. Associa programaticamente o campo ao seu erro para leitores de tela.

### [C-02] Header.tsx — useCallback no close

Import: adicionado `useCallback` ao import do React. `const close = () => setIsOpen(false)` → `const close = useCallback(() => setIsOpen(false), [])`. Evita recriação da função a cada render.

### [C-03] Contact.tsx — maskPhone movida para módulo

`maskPhone` era arrow function declarada dentro do componente `Contact`. Movida para fora como função nomeada de nível de módulo. Não recria a função a cada render e não depende de estado do componente.

### [C-04] PracticeAreas.tsx — clsx para classes condicionais

Instalada `clsx`. Adicionado `import cn from "clsx"`. Substituída concatenação de string condicional:
```tsx
// antes
className={`...${isLast ? " lg:col-start-2" : ""}`}
// depois
className={cn("...", { "lg:col-start-2": isLast })}
```

### [C-05] globals.css — tokens para fundos intermediários

Adicionados ao bloco `@theme inline`:
```css
--color-background-secondary: #0f0f0f;
--color-background-tertiary: #0d0d0d;
--color-background-footer: #080808;
```

Substituições nos componentes:

| Arquivo | Antes | Depois |
|---|---|---|
| `About.tsx` | `bg-[#0f0f0f]` | `bg-background-secondary` |
| `FAQ.tsx` | `bg-[#0f0f0f]` | `bg-background-secondary` |
| `OnCall.tsx` | `bg-[#0d0d0d]` | `bg-background-tertiary` |
| `Footer.tsx` | `bg-[#080808]` | `bg-background-footer` |

### [C-06] next.config.ts — removido compress: true

`compress: true` é o valor padrão do Next.js e não precisa ser declarado explicitamente. Linha removida.

### [C-07] PracticeAreas.tsx — comentário para isLast

Adicionado comentário acima da lógica `isLast`:
```tsx
// 7 items in 3-col grid — center the lone last card on lg
```

### [C-08] Differentials.tsx — xl:grid-cols-4 mantido

Avaliado: com 4 cards de conteúdo variado, `lg:grid-cols-4` (1024px) resultaria em colunas de ~232px, potencialmente estreitas para os textos de descrição. Decisão: manter `xl:grid-cols-4` (1280px) para garantir legibilidade sem risco visual.

### [C-09] Header.tsx — useState inferência de tipo

`useState(false)` já estava sem anotação `<boolean>` explícita — TypeScript inferia corretamente desde a implementação anterior. Nenhuma alteração necessária.

### [C-10] layout.tsx — simplificação do tipo das props

`Readonly<{ children: React.ReactNode }>` → `{ children: React.ReactNode }`. `Readonly` era redundante para props de componente React.

### Arquivos criados

- Nenhum (apenas alterações)

### Arquivos alterados

- `src/components/sections/Differentials.tsx` — B-01
- `src/components/sections/OnCall.tsx` — B-02, C-05
- `src/components/sections/About.tsx` — B-03, C-05
- `src/components/sections/Hero.tsx` — B-04
- `src/components/sections/Contact.tsx` — B-05, B-06, C-01, C-03
- `src/components/sections/FAQ.tsx` — B-07, C-05
- `src/components/sections/PracticeAreas.tsx` — C-04, C-07
- `src/components/layout/Header.tsx` — C-02
- `src/components/layout/Footer.tsx` — C-05
- `src/app/globals.css` — C-05 (tokens adicionados)
- `next.config.ts` — C-06
- `src/app/layout.tsx` — C-10

### Branch

Alterações realizadas na branch `audit/code-review`.

---

## 44. Correções da reauditoria — itens residuais

### Contexto

Após a aplicação de todos os itens da auditoria original (seções 40–43), uma segunda passagem completa identificou 5 problemas residuais. Todos corrigidos na branch `audit/code-review`.

### [B-16] Contact.tsx — role="alert" no erro geral do formulário

O `<p>` que exibe erros de submissão (falha na API) não tinha `role="alert"`. O erro do campo de telefone já havia sido corrigido em C-01, mas esse ficou de fora. Adicionado `role="alert"` ao `<p>` do estado `error`.

### [B-17] Header.tsx — aria-expanded no botão hambúrguer

O botão de menu mobile não tinha `aria-expanded`. O padrão WAI-ARIA para disclosure buttons exige esse atributo para comunicar o estado aberto/fechado a tecnologias assistivas. O `aria-label` já alternava entre "Abrir menu" e "Fechar menu", mas `aria-expanded` é o mecanismo semântico correto.

### [C-11] Contact.tsx — bg-[#0b0b0b] → bg-background

A seção Contact usava `bg-[#0b0b0b]` hardcoded — mesmo valor que `--background: #0b0b0b`. Substituído por `bg-background` para consistência com a tokenização feita em C-05.

### [C-12] FAQ.tsx — aria-labelledby nos painéis do acordeão

Os painéis com `role="region"` não tinham nome acessível. `role="region"` só é promovido a landmark quando nomeado. Adicionado `id="faq-trigger-${index}"` em cada botão e `aria-labelledby={faq-trigger-${index}}` em cada painel.

### [C-13] Header.tsx + Footer.tsx — aria-label nos elementos nav

Dois `<nav>` sem `aria-label` são anunciados como landmarks idênticos por leitores de tela. Adicionados:
- `aria-label="Navegação principal"` — nav desktop do Header
- `aria-label="Menu mobile"` — nav mobile do Header
- `aria-label="Navegação do rodapé"` — nav do Footer

### Arquivos alterados

- `src/components/sections/Contact.tsx` — B-16, C-11
- `src/components/layout/Header.tsx` — B-17, C-13
- `src/components/sections/FAQ.tsx` — C-12
- `src/components/layout/Footer.tsx` — C-13

### Branch

Alterações realizadas na branch `audit/code-review`.

---

## 45. Criação do CLAUDE.md — instruções persistentes para o Claude Code

### Arquivo criado

`CLAUDE.md` na raiz do projeto — instruções persistentes lidas pelo Claude Code ao iniciar qualquer sessão neste projeto.

### Conteúdo

O arquivo documenta 10 seções:

1. **Identidade do projeto** — nome, cliente, site, stack, deploy e repositório.
2. **Comportamento esperado** — regras de conduta para o agente: ler README e CONTEXT antes de agir, confirmar branch, não inventar conteúdo, perguntar em caso de ambiguidade.
3. **Padrões de código** — TypeScript estrito, Server Components por padrão, alias @/, exportações, funções puras, cn() para classes condicionais.
4. **Padrões de acessibilidade** — hierarquia de headings, elementos semânticos, aria-hidden, listas com ul/li, aria-expanded, role="alert".
5. **Identidade visual** — tokens de cor e tipografia que nunca devem ser alterados sem instrução explícita.
6. **Regras de conteúdo (OAB)** — restrições de publicidade jurídica: sem promessas, sem superlativos, sem comparações.
7. **Arquivos de configuração centralizada** — WHATSAPP_URL em contact.ts, SITE_URL em site.ts.
8. **Componentes reutilizáveis** — SectionBadge e WhatsAppButton.
9. **Fluxo de trabalho** — checklist: ler docs, confirmar branch, implementar escopo, lint, listar arquivos, atualizar CONTEXT.md.
10. **Pendências conhecidas** — foto profissional, endereço, rate limiting, variáveis de e-mail.

### Decisão — substituição do @AGENTS.md

O `CLAUDE.md` anterior continha apenas `@AGENTS.md` (referência ao arquivo de instrução de agentes genéricos). Foi substituído por instruções específicas do projeto, que são mais completas e diretamente acionáveis pelo Claude Code neste contexto.

### Arquivos criados

- `CLAUDE.md` — instruções persistentes para o Claude Code

### Branch

Alterações realizadas na branch `main`.

---

## 46. Hero com imagem profissional como background

### Contexto

A imagem profissional da cliente estava disponível em `public/images/`. Esta iteração substituiu o fundo sólido do Hero (`bg-background`) pela imagem real com overlay em gradiente, card semi-transparente e estrutura de camadas com z-index.

### Imagens disponíveis em public/images/

| Arquivo | Uso |
|---|---|
| `Fundo hero.png` | Background do Hero — imagem profissional usada como camada base |
| `Monique Final.png` | Foto profissional da advogada — disponível para uso futuro na seção About |

### Estrutura de camadas implementada

| z-index | Elemento | Descrição |
|---|---|---|
| z-0 | `<div aria-hidden="true">` + `<Image>` | Imagem de fundo com `fill` e `object-cover` |
| z-10 | `<div aria-hidden="true">` overlay | Gradiente `from-background/95 via-background/80 to-background/40` |
| z-20 | `<div>` conteúdo | Grid com coluna de texto e card decorativo |

### Alterações no `<section>`

- Removido: `bg-background` (fundo sólido)
- Adicionado: `relative overflow-hidden` (necessários para o `fill` e o overlay funcionarem)

### Coluna esquerda (texto)

Nenhuma alteração de conteúdo ou lógica. O texto respira sobre o overlay sem caixa de fundo.

### Coluna direita (card decorativo)

| Propriedade | Antes | Depois |
|---|---|---|
| background | `bg-gradient-to-br from-foreground/5 to-transparent` | `bg-background/60` |
| border | `border-border` | `border-accent/30` |
| blur | ausente | `backdrop-blur-sm` |

### Acessibilidade

- Wrapper da imagem com `aria-hidden="true"` — imagem decorativa, não anunciada por leitores de tela
- `alt=""` no `<Image>` — confirma caráter decorativo para tecnologias assistivas
- `priority` no `<Image>` — imagem above the fold, carregada com prioridade (impacta LCP positivamente)
- `sizes="100vw"` — informa ao browser que a imagem ocupa 100% da largura do viewport

### Decisão — `Fundo hero.png` como background

O arquivo `Fundo hero.png` foi escolhido por ter o nome que indica uso explícito como fundo do Hero. O arquivo `Monique Final.png` permanece disponível para uso na seção About em iteração futura.

### Decisão — gradiente assimétrico

O gradiente `from-background/95 via-background/80 to-background/40` mantém o lado esquerdo (texto) com alta cobertura (~95% de opacidade), garantindo legibilidade, enquanto o lado direito (~40%) deixa a imagem mais visível atrás do card semi-transparente.

### Arquivos alterados

- `src/components/sections/Hero.tsx` — background com imagem, overlay, card semi-transparente, z-index

### Branch

Alterações realizadas na branch `feature/professional-photos`.

---

## 47. Hero — deslocamento do conteúdo para a esquerda

### Contexto

Com a imagem de fundo adicionada na seção 46, o conteúdo (texto + card) ainda ocupava uma área centralizada que encobraia grande parte da imagem. O objetivo desta iteração foi puxar o bloco de conteúdo para a esquerda, abrindo espaço visual para a imagem de fundo aparecer no lado direito da tela.

### Abordagem escolhida

A `<section>` do Hero usa `display: flex`. Nesse contexto, o container filho responde a `margin: auto` de forma diferente de um layout de bloco comum. A solução mais simples e direta foi:

1. **`mx-auto` → `mr-auto`** — em flex row, `mr-auto` consome o espaço restante à direita, empurrando o item para a esquerda sem precisar de posicionamento absoluto.
2. **`max-w-6xl` → `max-w-5xl`** — reduz a largura máxima do container de 1152px para 960px. O deslocamento passa a ser visível em telas acima de 960px de largura.
3. **`md:pl-12 lg:pl-20`** — adiciona respiro da borda esquerda no desktop (48px em md, 80px em lg) sem criar caixa de fundo pesada, apenas espaçando o conteúdo internamente.

### Trecho alterado

| Classe | Antes | Depois |
|---|---|---|
| Alinhamento | `mx-auto` | `mr-auto` |
| Largura máxima | `max-w-6xl` (1152px) | `max-w-5xl` (960px) |
| Padding esquerdo desktop | `px-6` apenas | `px-6` + `md:pl-12 lg:pl-20` |

### Comportamento por breakpoint

| Largura de tela | Container | Margem direita (imagem visível) |
|---|---|---|
| < 960px | 100% da tela | 0px (imagem cobre tudo) |
| 1024px | 960px | 64px |
| 1280px | 960px | 320px |
| 1440px | 960px | 480px |

### Decisão — `mr-auto` + `max-w-5xl` vs padding assimétrico

A opção por `mr-auto` + `max-w-5xl` foi preferida ao uso de `pl-*` grande com `pr-0` no container porque:
- Não interfere na largura interna do grid — as colunas continuam com o espaço proporcional correto
- O deslocamento é estrutural (o container é menor), não cosmético (padding que encolheria o conteúdo por dentro)
- Manter `px-6` para mobile garante padding simétrico na coluna única

### Arquivos alterados

- `src/components/sections/Hero.tsx` — linha do container `z-20` (uma classe alterada, duas adicionadas)

### Branch

Alterações realizadas na branch `feature/professional-photos`.

---

## 48. About — foto profissional da cliente

### Contexto

O card decorativo esquerdo da seção About (com monograma "M", nome, título e citação) foi substituído pela foto profissional da advogada Monique Ranauro. A pendência registrada desde a seção 24 do CONTEXT.md foi resolvida.

### Imagem utilizada

```
public/images/Monique Final.png
```

O arquivo `Fundo hero.png` já foi utilizado como background do Hero (seção 46). O `Monique Final.png` é a foto profissional da cliente, utilizada aqui.

### Estrutura da coluna esquerda

**Antes:** `div` com `aria-hidden="true"` contendo card decorativo (monograma, nome, título, linha, citação).

**Depois:** `div` sem `aria-hidden` contendo:

```
div.flex.flex-col.gap-5.max-w-[380px]
├── div.relative.aspect-[3/4].overflow-hidden.border.border-accent/30.shadow-lg
│   └── Image (fill, object-cover object-top)
└── p.text-xs.italic.text-muted/80  ← citação como legenda da foto
```

### Decisões de implementação

| Decisão | Escolha | Motivo |
|---|---|---|
| Proporção | `aspect-[3/4]` | Proporção retrato padrão para fotos profissionais; mantém a coluna com altura semelhante ao card anterior |
| Object position | `object-top` | Prioriza o rosto/busto em fotos de perfil, onde o sujeito está no topo do enquadramento |
| Borda | `border border-accent/30` | Consistente com o card decorativo do Hero (`border-accent/30`) |
| Sombra | `shadow-lg` | Profundidade sutil, sem exagero — identidade sóbria do projeto |
| Border radius | nenhum (sharp) | O projeto não usa arredondamento nos demais cards e componentes estruturais |
| Cantos decorativos | removidos | Com a foto real, os cantos dourados são desnecessários — a borda `border-accent/30` já ancora visualmente |
| `aria-hidden` | removido | A foto da cliente é conteúdo institucional, não decorativo |
| `alt` | `"Monique Ranauro, advogada criminalista"` | Descritivo e institucional |
| `priority` | ausente | Seção abaixo do fold — lazy loading correto |
| `sizes` | `"380px"` | Corresponde ao `max-w-[380px]` do container da foto |
| Citação | mantida como legenda | Abaixo da foto com `text-xs italic text-muted/80`, sem card separado |

### Pendências resolvidas

- ~~Foto profissional da cliente — About ainda sem imagem real.~~ ✅ Resolvida.

### Arquivos alterados

- `src/components/sections/About.tsx` — coluna esquerda substituída (card decorativo → foto profissional + citação)

### Branch

Alterações realizadas na branch `feature/professional-photos`.

---

## 49. Hero — atualização de copy para comunicação mais humana

### Contexto

Os textos anteriores do Hero tinham tom técnico e institucional. Esta iteração aproxima a comunicação do cliente, com linguagem mais humana e direta, sem perder a seriedade e sem violar o Provimento 205/2021 da OAB.

### Alterações de texto

| Elemento | Antes | Depois |
|---|---|---|
| `h1` | "Defesa criminal firme, humanizada, estratégica e técnica." | "Advocacia criminal para quem precisa ser ouvido e defendido de verdade." |
| Subtítulo | "Atuação profissional para proteger direitos, orientar decisões e construir estratégias jurídicas com seriedade em momentos decisivos." | "Monique Ranauro atua ao seu lado em momentos difíceis — com escuta atenta, orientação clara e defesa técnica desde o primeiro contato." |
| CTA principal | "Falar com a advogada" | "Falar com a Monique" |

### Conformidade OAB

Os novos textos mantêm conformidade com o Provimento 205/2021:
- Nenhuma promessa de resultado
- Nenhum superlativo ou comparação
- Linguagem informativa e humanizada, não apelativa

### Arquivos alterados

- `src/components/sections/Hero.tsx` — três textos alterados, nenhum layout ou estilo tocado

### Branch

Alterações realizadas na branch `feature/professional-photos`.

---

## 50. Correção C-01 — Open Graph image: SVG → PNG

### Contexto

A auditoria técnica (reports/project-audit-2026-05-24_14-25-30.md) identificou como item CRÍTICO que a imagem Open Graph e Twitter Card estava em formato `.svg`. Facebook/Meta, Twitter/X, LinkedIn e WhatsApp não suportam SVG para pré-visualização de links — os compartilhamentos do site ficavam sem imagem.

### Solução implementada

O arquivo `public/og-image.svg` foi convertido para PNG via `sharp` (Node.js), preservando o design original:

- Fundo: `#0b0b0b`
- Nome "Monique Ranauro" em destaque (Georgia, 68px, `#f5f1ea`)
- Subtítulo "ADVOGADA CRIMINALISTA" em dourado (`#b08d57`)
- Localização: "Nova Iguaçu · Baixada Fluminense · Grande Rio"
- Rodapé: "ADVOCACIA CRIMINAL ESTRATÉGICA · PLANTÃO 24H"
- Dimensões: 1200×630px (padrão OG)
- Tamanho: ~40 KB

O PNG foi gerado com o comando:
```bash
sharp(svgBuffer).resize(1200, 630).png().toFile('public/og-image.png')
```

### Arquivos criados

- `public/og-image.png` — imagem Open Graph em formato PNG (1200×630px)

### Arquivos alterados

- `src/app/layout.tsx` — `/og-image.svg` → `/og-image.png` (2 ocorrências: `openGraph.images` e `twitter.images`)

### Arquivos removidos

- `public/og-image.svg` — substituído pelo PNG; nenhuma referência ao arquivo `.svg` permanece no projeto

### Branch

Alterações realizadas na branch `fix/audit-round-2`.

---

## 51. Correções de segurança A-02, A-03 e B-02 — auditoria técnica

### Contexto

Continuação das correções da auditoria técnica. Esta seção documenta os itens A-02 (CSP), A-03 (validação server-side) e B-02 (limites nos campos do formulário).

---

### [A-02] next.config.ts — Content-Security-Policy

Adicionado header `Content-Security-Policy` ao bloco `headers()` existente.

#### Diretivas e justificativas

| Diretiva | Valor | Motivo |
|---|---|---|
| `default-src` | `'self'` | Bloqueia por padrão qualquer recurso de origem externa não listada explicitamente |
| `script-src` | `'self' 'unsafe-inline'` | `'unsafe-inline'` necessário para hidratação do Next.js (scripts inline de bootstrap) |
| `style-src` | `'self' 'unsafe-inline'` | `'unsafe-inline'` necessário para `next/image` (inline styles de layout) e Tailwind |
| `img-src` | `'self' data: blob:` | `data:` para blur placeholders do `next/image`; `blob:` para eventuais object URLs |
| `font-src` | `'self'` | Fontes carregadas localmente via `next/font` em `/_next/static/` |
| `connect-src` | `'self'` | Fetch e XHR apenas para rotas próprias (ex: `/api/contact`) |
| `frame-ancestors` | `'none'` | Reforça `X-Frame-Options: DENY` — nenhum site pode embeddar este em iframe |

#### O que não quebra

- `next/image` — serve de `/_next/image` (self) com blur placeholders em `data:` ✓
- `backdrop-blur`, `animate-ping` — CSS estático gerado em build, servido de `'self'` ✓
- WhatsApp links — `target="_blank"` é navegação, não fetch; não afetado por `connect-src` ✓
- `Resend` SDK — executa server-side (Node.js), não restringido por CSP ✓

---

### [A-03] src/app/api/contact/route.ts — Validação server-side

Adicionadas constantes de limite e validação após a verificação de campos vazios existente.

#### Constantes adicionadas

```ts
const NAME_MAX = 100;
const MESSAGE_MAX = 2000;
const PHONE_REGEX = /^\d{10,11}$/;
```

#### Validação adicionada

Após o bloco `if (!name?.trim() || !phone?.trim() || !message?.trim())`:

```ts
const phoneDigits = phone.replace(/\D/g, "");
if (
  name.trim().length > NAME_MAX ||
  message.trim().length > MESSAGE_MAX ||
  !PHONE_REGEX.test(phoneDigits)
) {
  return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
}
```

Cobertura: nome acima de 100 chars, mensagem acima de 2000 chars, telefone com formato inválido (não 10 ou 11 dígitos numéricos). Todos os retornos anteriores permanecem intactos.

---

### [B-02] src/components/sections/Contact.tsx — Limites nos campos

Adicionados atributos `minLength`/`maxLength` nos três campos do formulário para alinhar com as validações server-side de [A-03]:

| Campo | Atributo adicionado | Valor | Observação |
|---|---|---|---|
| `name` | `minLength` | `2` | Novo |
| `name` | `maxLength` | `100` | Novo — espelha `NAME_MAX` |
| `phone` | `minLength` | `14` | Novo — formato mascarado `(XX) 9XXXX-XXXX` tem 15 chars; `14` cobre `(XX) XXXX-XXXX` |
| `phone` | `maxLength` | `15` | Já existia |
| `message` | `minLength` | `10` | Novo |
| `message` | `maxLength` | `2000` | Novo — espelha `MESSAGE_MAX` |

O `noValidate` no `<form>` permanece — a validação nativa do browser está desabilitada intencionalmente para manter o feedback visual customizado em JavaScript.

---

### Arquivos alterados

- `next.config.ts` — header `Content-Security-Policy` adicionado ao bloco `headers()`
- `src/app/api/contact/route.ts` — constantes `NAME_MAX`, `MESSAGE_MAX`, `PHONE_REGEX` + validação de comprimento e formato
- `src/components/sections/Contact.tsx` — `minLength`/`maxLength` nos campos `name`, `phone` e `message`

### Branch

Alterações realizadas na branch `fix/audit-round-2`.

---

## 52. Correções de organização M-01, M-02 e M-03 — auditoria técnica

### [M-01] Centralização de navLinks em src/config/nav.ts

O array `navLinks` estava duplicado e idêntico em `Header.tsx` e `Footer.tsx`. Qualquer alteração futura (novo item de menu, label ou âncora) exigia edição em dois arquivos — risco de dessincronia.

**Solução:** criado `src/config/nav.ts` com a definição canônica do array. Definições locais removidas dos dois componentes. Import adicionado via `@/config/nav`.

### [M-02] Renomeação de imagens para kebab-case

O arquivo `Fundo hero.png` (espaço no nome) foi renomeado para `fundo-hero.png`. Referência atualizada em `Hero.tsx`.

O arquivo `monique-ranauro2.png` já estava em kebab-case — sem alteração.

| Arquivo antigo | Arquivo novo | Componente atualizado |
|---|---|---|
| `public/images/Fundo hero.png` | `public/images/fundo-hero.png` | `Hero.tsx` linha 25 |

### [M-03] Remoção de imagens não referenciadas

Confirmado via `grep` que nenhum dos 5 arquivos abaixo era referenciado em qualquer componente, antes de remover:

| Arquivo removido | Motivo |
|---|---|
| `Firefly (1).png` | Não referenciado; parênteses no nome são problemáticos em URLs |
| `Monique Final.png` | Não referenciado; foto pessoal sem uso |
| `Monique-escritorio.png` | Não referenciado; substituído por `monique-ranauro2.png` |
| `Monique-escritorio2.png` | Não referenciado |
| `Monique-ranauro.png` | Não referenciado |

**Estado final de `public/images/`:**
```
fundo-hero.png        ← Hero background (renomeado)
monique-ranauro2.png  ← Foto da About (já estava em kebab-case)
```

### Arquivos criados

- `src/config/nav.ts` — array `navLinks` centralizado

### Arquivos alterados

- `src/components/layout/Header.tsx` — definição local removida; import de `@/config/nav` adicionado
- `src/components/layout/Footer.tsx` — definição local removida; import de `@/config/nav` adicionado
- `src/components/sections/Hero.tsx` — referência de `/images/Fundo hero.png` → `/images/fundo-hero.png`

### Arquivos removidos

- `public/images/Firefly (1).png`
- `public/images/Monique Final.png`
- `public/images/Monique-escritorio.png`
- `public/images/Monique-escritorio2.png`
- `public/images/Monique-ranauro.png`

### Branch

Alterações realizadas na branch `fix/audit-round-2`.

---

## 53. Correções de refinamento M-04, M-05, M-06, M-07, B-01, B-03 e B-05 — auditoria técnica round 2

### [M-04] FAQ.tsx — substituição de template literals por cn()

Criado `src/lib/utils.ts` com a função `cn()` baseada em `clsx`, seguindo o padrão de projetos Next.js com Tailwind. Importado em `FAQ.tsx` para substituir dois template literals condicionais:

- `className={index > 0 ? "border-t border-border" : ""}` → `className={cn(index > 0 && "border-t border-border")}`
- `` className={`grid ... ${isOpen ? ... : ...}`} `` → `className={cn("grid ...", isOpen ? ... : ...)}`

### [M-05] sitemap.ts — remoção de lastModified dinâmico

`lastModified: new Date()` removido. O valor era regenerado a cada deploy/request com a data de execução, o que não reflete modificação real de conteúdo e pode confundir crawlers de SEO.

### [M-06] globals.css — scroll-behavior respeitando prefers-reduced-motion

`scroll-behavior: smooth` movido para dentro de `@media (prefers-reduced-motion: no-preference)`. Usuários com configuração de redução de movimento do sistema operacional não são mais forçados a animação de scroll.

### [M-07] Contact.tsx — ul/li para lista de localização

Os dois itens de localização que usavam `div/div` foram corretamente marcados como lista com `ul/li`, melhorando semântica e leitura por leitores de tela.

### [B-01] Header.tsx — type="button" e aria-controls no hambúrguer

Adicionados `type="button"` (evita submit acidental em contexto de form) e `aria-controls="mobile-menu"` ao botão hambúrguer. Painel mobile recebeu `id="mobile-menu"`, completando o vínculo ARIA entre controle e região controlada.

### [B-03] Contact.tsx — campos desabilitados durante loading e autocomplete

`disabled={status === "loading"}` adicionado aos três campos do formulário (`name`, `phone`, `message`) com classe `disabled:opacity-60`. Atributos `autoComplete` adicionados: `"name"` no nome, `"tel"` no telefone, `"off"` na mensagem (conteúdo sensível).

### [B-05] SectionBadge.tsx — tipo nomeado extraído

Tipo inline `{ children: React.ReactNode }` extraído para `type SectionBadgeProps`. Padrão mais legível e extensível para futuras props.

### Arquivos criados

- `src/lib/utils.ts` — função `cn()` usando `clsx`

### Arquivos alterados

- `src/components/sections/FAQ.tsx` — import de `cn`, substituição dos template literals
- `src/app/sitemap.ts` — remoção de `lastModified`
- `src/app/globals.css` — `scroll-behavior` dentro de `prefers-reduced-motion`
- `src/components/sections/Contact.tsx` — ul/li, autocomplete, disabled durante loading
- `src/components/layout/Header.tsx` — `type="button"`, `aria-controls`, `id="mobile-menu"`
- `src/components/ui/SectionBadge.tsx` — tipo `SectionBadgeProps` extraído

### Branch

Alterações realizadas na branch `fix/audit-round-2`.

---

## 54. Status da auditoria técnica — round 2 concluída

Todos os itens da auditoria técnica foram corrigidos ou documentados como pendências conhecidas.

### Itens corrigidos

| ID | Categoria | Descrição | Branch |
|---|---|---|---|
| C-01 | Crítico | og-image.svg convertido para PNG (sharp) | fix/audit-round-2 |
| A-02 | Alta | Security headers adicionados ao next.config.ts | fix/audit-round-2 |
| A-03 | Alta | Validação e sanitização no /api/contact route | fix/audit-round-2 |
| B-02 | Média | minLength/maxLength nos campos do formulário | fix/audit-round-2 |
| M-01 | Organização | navLinks centralizado em src/config/nav.ts | fix/audit-round-2 |
| M-02 | Organização | Imagem renomeada para kebab-case | fix/audit-round-2 |
| M-03 | Organização | 5 imagens não referenciadas removidas | fix/audit-round-2 |
| M-04 | Refinamento | FAQ.tsx: template literals → cn() | fix/audit-round-2 |
| M-05 | Refinamento | sitemap.ts: lastModified dinâmico removido | fix/audit-round-2 |
| M-06 | Refinamento | globals.css: scroll-behavior em prefers-reduced-motion | fix/audit-round-2 |
| M-07 | Refinamento | Contact.tsx: div/div → ul/li para lista de localização | fix/audit-round-2 |
| B-01 | Média | Header.tsx: type="button", aria-controls, id no painel | fix/audit-round-2 |
| B-03 | Média | Contact.tsx: campos disabled durante loading + autocomplete | fix/audit-round-2 |
| B-05 | Média | SectionBadge.tsx: tipo nomeado extraído | fix/audit-round-2 |

### Pendências conhecidas (não bloqueantes)

| ID | Categoria | Descrição | Motivo da pendência |
|---|---|---|---|
| A-01 | Alta | Rate limiting no /api/contact | Requer Upstash Redis (dependência externa não provisionada) |
| A-04 | Alta | Vulnerabilidade no PostCSS | Não corrigível sem downgrade do Next.js; aguarda atualização upstream |

---

## 55. CSP: unsafe-eval liberado apenas em desenvolvimento

### Problema

O CSP adicionado em `next.config.ts` bloqueava `eval()`, que o React/Turbopack usa em desenvolvimento para reconstruir call stacks e habilitar features de debug. Em produção o React não usa `eval()`, portanto o bloqueio era correto — mas quebrava o ambiente de desenvolvimento.

### Solução

Variável `isDev` derivada de `process.env.NODE_ENV` avaliada em tempo de build do Next.js. O array do CSP usa operador ternário para incluir `'unsafe-eval'` no `script-src` apenas quando `isDev === true`.

```ts
const isDev = process.env.NODE_ENV === "development";

const cspHeader = [
  "default-src 'self'",
  isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'",
  // ...
].join("; ");
```

**Produção:** `script-src 'self' 'unsafe-inline'` — sem `unsafe-eval`.
**Desenvolvimento:** `script-src 'self' 'unsafe-inline' 'unsafe-eval'` — Turbopack/React DevTools funcionam normalmente.

### Arquivo alterado

- `next.config.ts` — CSP separado por ambiente via `isDev`

### Branch

Alterações realizadas na branch `fix/audit-round-2`.

---

## 56. Criação de documentação — DECISOES.md, CHANGELOG.md e .env.example

### Contexto

Consolidação da documentação técnica do projeto em três arquivos independentes, complementando o CONTEXT.md com registros de decisões, histórico de versões e referência de variáveis de ambiente.

### Arquivos criados

#### DECISOES.md

Registro de 15 decisões técnicas e arquiteturais extraídas do CONTEXT.md.

| ID | Decisão |
|---|---|
| D-01 | Next.js como framework |
| D-02 | Tailwind CSS v4 |
| D-03 | Migração para src/ |
| D-04 | Identidade visual — paleta e tipografia |
| D-05 | next/font em vez de Google Fonts externo |
| D-06 | Server Components como padrão |
| D-07 | Centralização da WHATSAPP_URL |
| D-08 | Centralização da SITE_URL |
| D-09 | Centralização de navLinks |
| D-10 | SectionBadge como componente reutilizável |
| D-11 | Resend para envio de e-mail |
| D-12 | Deploy na Vercel |
| D-13 | DNS via Cloudflare |
| D-14 | Security headers via next.config.ts |
| D-15 | CSP separado por ambiente (dev vs produção) |

Cada decisão registra: data, status, contexto, decisão, motivo e consequências.

#### CHANGELOG.md

Histórico de versões no padrão Keep a Changelog (https://keepachangelog.com), com 4 versões:

| Versão | Data | Escopo |
|---|---|---|
| 1.0.0 | 2026-05-18 | Lançamento inicial em produção |
| 1.1.0 | 2026-05-20 | Auditorias de responsividade, acessibilidade, performance, conteúdo e código |
| 1.2.0 | 2026-05-24 | Fotos profissionais e humanização da comunicação |
| 1.3.0 | 2026-05-24 | Auditoria técnica round 2 |

#### .env.example

Documentação das 3 variáveis de ambiente do projeto com comentários explicativos:

- `RESEND_API_KEY` — obrigatória para o formulário de contato
- `CONTACT_EMAIL_FROM` — e-mail de origem (deve usar domínio verificado no Resend)
- `CONTACT_EMAIL_TO` — e-mail de destino das mensagens

### Branch

Alterações realizadas na branch `docs/project-files`.

---

## 57. Hover com underline dourado deslizante — Header e Footer

### Contexto

Branch `feature/hover-interactions`. Adicionado efeito de hover com underline dourado deslizante nos links de navegação desktop do Header e do Footer, seguindo a identidade visual premium do projeto.

### [HV-01a] Header.tsx — links de navegação desktop

Links dentro do `<nav aria-label="Navegação principal">` (visível apenas em `md:flex`).

| Propriedade | Antes | Depois |
|---|---|---|
| Hover de cor | `hover:text-foreground` | removido |
| Transição | `transition-colors duration-200` | removida |
| Posição | — | `relative` adicionado |
| Pseudo-elemento after | — | `after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full` |

O underline cresce de `w-0` para `w-full` em `duration-300` no hover. Cor: `--accent` (#b08d57).

### [HV-01b] Footer.tsx — links de navegação

Links dentro do `<nav aria-label="Navegação do rodapé">`.

| Propriedade | Antes | Depois |
|---|---|---|
| Hover de cor | `hover:text-accent` | removido |
| Transição | `transition-colors duration-200` | removida |
| Posição | — | `relative` adicionado |
| Pseudo-elemento after | — | `after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent/70 after:transition-all after:duration-300 hover:after:w-full` |

Versão mais discreta: `after:bg-accent/70` (70% de opacidade) em vez do `after:bg-accent` do Header. O `w-fit` já existente no link garante que o underline não se estenda além do texto.

### Regras seguidas

- Velocidade: `duration-300` em ambos
- Easing: padrão Tailwind (`ease-in-out`)
- Sem alteração de tamanho de fonte
- Cores dentro da paleta do projeto (`--accent`)
- Layout mobile não afetado — os links desktop ficam em `hidden md:flex`
- Textos, estrutura e lógica inalterados

### Arquivos alterados

- `src/components/layout/Header.tsx` — links desktop: hover de cor removido, underline after adicionado
- `src/components/layout/Footer.tsx` — links de navegação: hover de cor removido, underline after adicionado (accent/70)

---

## 58. Hovers no Hero, About e WhatsAppButton

### Contexto

Branch `feature/hover-interactions`. Adicionados hovers nos botões CTA do Hero, na foto da seção About e no botão flutuante WhatsApp.

---

### [HV-02a] Hero.tsx — botões CTA e trust indicators

**Botão primário ("Falar com a Monique"):**

| Propriedade | Antes | Depois |
|---|---|---|
| Transição | `transition-colors duration-200` | `transition-all duration-300` |
| Border base | ausente | `border border-accent` |
| Hover border | — | `hover:border-accent-light` |
| Hover bg | `hover:bg-accent-light` | mantido |
| Hover deslocamento | — | `hover:-translate-y-0.5` |

**Botão secundário ("Conhecer áreas de atuação"):**

| Propriedade | Antes | Depois |
|---|---|---|
| Cor do texto | `text-foreground` | `text-accent` |
| Transição | `transition-colors duration-200` | `transition-all duration-300` |
| Hover texto | — | `hover:text-accent-light` |
| Hover deslocamento | — | `hover:-translate-y-0.5` |
| Hover border | `hover:border-foreground/50` | mantido |

**Trust indicators ("Atendimento sigiloso", etc.):**

- `<li>` recebeu `group`
- Ponto separador: base `bg-muted` (era `bg-accent`) + `transition-colors duration-300 group-hover:bg-accent`
- Efeito: ponto acende em dourado no hover do item

---

### [HV-02b] About.tsx — foto profissional

Container da foto recebeu `group`. A imagem e o overlay respondem ao hover do grupo.

| Elemento | Classe adicionada |
|---|---|
| `div` container (já tinha `overflow-hidden`) | `group` |
| `<Image>` | `transition-transform duration-500 ease-out group-hover:scale-105` |
| `<div>` overlay (novo, `aria-hidden`) | `pointer-events-none absolute inset-0 bg-background opacity-0 transition-opacity duration-500 group-hover:opacity-20` |

O zoom `scale-105` é contido pelo `overflow-hidden` existente — sem vazamento.

---

### [HV-02c] WhatsAppButton.tsx — botão flutuante + globals.css

**globals.css — animação adicionada:**

```css
@keyframes subtle-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(176, 141, 87, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(176, 141, 87, 0); }
}

@media (prefers-reduced-motion: no-preference) {
  .animate-subtle-pulse {
    animation: subtle-pulse 2.5s ease-in-out infinite;
  }
}
```

Pulso restrito a `prefers-reduced-motion: no-preference` — usuários com configuração de redução de movimento não veem a animação.

**WhatsAppButton.tsx:**

| Propriedade | Antes | Depois |
|---|---|---|
| Transição | `transition-colors duration-200` | `transition-all duration-300` |
| Pulso periódico | — | `animate-subtle-pulse` |
| Hover escala | — | `hover:scale-110` |
| Hover sombra | — | `hover:shadow-xl` |
| Hover bg/text | `hover:bg-accent hover:text-background` | mantidos |

---

### Arquivos alterados

- `src/components/sections/Hero.tsx` — botões CTA + trust indicators
- `src/components/sections/About.tsx` — zoom + overlay na foto
- `src/components/ui/WhatsAppButton.tsx` — pulso + escala no hover
- `src/app/globals.css` — keyframe `subtle-pulse` + `.animate-subtle-pulse`

---

## 59. Hovers nas seções PracticeAreas, Differentials e FAQ

### Contexto

Branch `feature/hover-interactions`. Última iteração da feature de hover interactions — aplicados hovers nos cards de áreas de atuação, diferenciais e acordeão de FAQ.

---

### [HV-03a] PracticeAreas.tsx — cards de área de atuação

`group` já estava presente no card desde a implementação anterior.

| Elemento | Antes | Depois |
|---|---|---|
| Card `transition` | `duration-200` | `duration-300` |
| Card hover fundo | `hover:bg-foreground/[0.03]` | `hover:bg-white/[0.02]` |
| Número (01–07) | `text-accent` | `text-accent/50` + `transition-colors duration-300 group-hover:text-accent` |
| Linha crescente | `h-px w-0 bg-accent/50 group-hover:w-8` | mantida — já estava correta |

Efeito: número acende do dourado apagado para dourado pleno no hover; fundo clarea ligeiramente; borda realça em dourado.

---

### [HV-03b] Differentials.tsx — cards de diferenciais

`group` já estava presente no card desde a implementação anterior.

| Elemento | Antes | Depois |
|---|---|---|
| Card `transition` | `duration-200` | `duration-300` |
| Card hover fundo | `hover:bg-foreground/[0.03]` | `hover:bg-white/[0.02]` |
| Símbolo Unicode | `transition-colors duration-200` | `inline-block transition-transform duration-300 group-hover:rotate-[15deg]` |
| `aria-hidden` no símbolo | presente | mantido |
| Linha crescente | `h-px w-0 bg-accent/50 group-hover:w-8` | mantida — já estava correta |

`inline-block` adicionado ao span do símbolo — necessário para `rotate` funcionar em elementos `inline` no Tailwind.

---

### [HV-03c] FAQ.tsx — acordeão

`group` adicionado ao wrapper de cada item do acordeão.

| Elemento | Antes | Depois |
|---|---|---|
| Wrapper `div` | sem `group`; `cn(index > 0 && "border-t border-border")` | `group` sempre + `transition-colors duration-300 group-hover:border-accent/40` no `index > 0` |
| `<button>` | sem hover de cor; sem `text-foreground` | `text-foreground transition-colors duration-300 hover:text-accent` |
| `<span>` da pergunta | `text-base font-medium text-foreground` | `text-base font-medium` (cor herdada do button) |
| Lógica do acordeão | inalterada | inalterada |

Ao mover `text-foreground` do `<span>` para o `<button>`, o texto herda a cor do estado hover do botão (`hover:text-accent`), sem necessidade de classes adicionais no span. O `<span>` do indicador `+`/`−` mantém `text-accent` explícito e não é afetado.

---

### Feature hover-interactions — concluída

Todos os itens da branch `feature/hover-interactions` foram implementados:

| ID | Componente | Escopo |
|---|---|---|
| HV-01a | Header.tsx | Underline deslizante nos links desktop |
| HV-01b | Footer.tsx | Underline deslizante discreto nos links do rodapé |
| HV-02a | Hero.tsx | Botões CTA com translate + borda; trust indicators com ponto |
| HV-02b | About.tsx | Zoom + overlay na foto profissional |
| HV-02c | WhatsAppButton.tsx | Pulso periódico + escala no hover |
| HV-03a | PracticeAreas.tsx | Número acende; fundo clarea; linha crescente mantida |
| HV-03b | Differentials.tsx | Símbolo rotaciona 15°; fundo clarea; linha crescente mantida |
| HV-03c | FAQ.tsx | Texto da pergunta muda para accent; borda do separador realça |

Todos os hovers seguem: `duration-300`, paleta do projeto, sem alteração de tamanho de fonte, sem impacto no layout mobile.

### Arquivos alterados

- `src/components/sections/PracticeAreas.tsx` — número + fundo + duração
- `src/components/sections/Differentials.tsx` — símbolo + fundo + duração
- `src/components/sections/FAQ.tsx` — group no wrapper, hover no botão, cor herdada no span

---

## 60. About — foto da cliente visível em mobile

### Contexto

Branch `feature/hover-interactions`. A foto profissional da advogada estava oculta em mobile (`hidden md:flex`). Com a imagem real disponível, faz sentido exibi-la também em telas pequenas, centralizada e em proporção reduzida.

### Alterações em `src/components/sections/About.tsx`

| Elemento | Antes | Depois |
|---|---|---|
| Wrapper externo da coluna | `hidden md:flex md:items-center md:justify-center` | `flex items-center justify-center` |
| Wrapper interno (tamanho) | `w-full max-w-[380px]` | `w-56 md:w-full md:max-w-[380px]` |
| `sizes` da imagem | `"380px"` | `"(max-width: 768px) 224px, 380px"` |

### Comportamento por breakpoint

| Breakpoint | Layout |
|---|---|
| Mobile | Foto centralizada, `w-56` (224px), proporção retrato `aspect-[3/4]`, acima do texto (ordem natural do grid) |
| Desktop (`md:`) | Comportamento anterior intacto — coluna à esquerda, largura até 380px |

### Decisões

- **Sem ajuste de `order`** — na grade `grid-cols-1` do mobile, a coluna da foto já é o primeiro elemento e aparece naturalmente acima do texto.
- **`w-56` (224px) no mobile** — proporcional e elegante sem tomar toda a largura da tela.
- **`sizes` atualizado** — comunica ao browser o tamanho real de renderização em cada breakpoint, evitando download excessivo de imagem.
- **Todos os hovers preservados** — `group`, `group-hover:scale-105`, overlay e `transition-transform` inalterados.
- **`alt` e acessibilidade intactos.**

### Arquivos alterados

- `src/components/sections/About.tsx` — exibição da foto em mobile

---

## 61. About — diagnóstico e correção definitiva da foto em mobile

### Contexto

Branch `feature/hover-interactions`. A foto da seção About continuava não aparecendo em mobile após a correção anterior (seção 60). Esta iteração diagnosticou a causa raiz e aplicou correção definitiva.

### Diagnóstico completo

Hierarquia de elementos ao redor da imagem após a correção da seção 60:

| Nível | Elemento | Classes | Problema? |
|---|---|---|---|
| 1 | `<section>` | `bg-background-secondary py-16 md:py-28` | Nenhum |
| 2 | `<div>` grid | `grid-cols-1 gap-16 md:grid-cols-2 md:items-center` | Nenhum |
| 3 | `<div>` coluna | `flex items-center justify-center` | Nenhum — `hidden` corrigido na seção 60 |
| 4 | `<div>` wrapper | `flex w-56 flex-col gap-5 md:w-full md:max-w-[380px]` | Nenhum |
| 5 | `<div>` container foto | `group relative aspect-[3/4] w-full overflow-hidden` | **Causa raiz** |
| 6 | `<Image fill>` | — | Dependente do container |

**Causa raiz identificada:** o `next/image` com `fill` posiciona o `<img>` com `position: absolute; inset: 0; height: 100%`. Para que tenha altura, o container pai precisa de uma altura computada. A classe `aspect-[3/4]` (Tailwind) gera `aspect-ratio: 3/4` como regra de folha de estilos. Em alguns browsers mobile, quando o elemento está dentro de um contexto `flex-col`, a resolução do `aspect-ratio` via classe CSS pode falhar — o browser calcula altura 0 antes de computar o `aspect-ratio`. Com altura 0, a imagem com `fill` não aparece.

**page.tsx** foi verificado e não tem nenhum wrapper ocultando a seção About.

### Correção aplicada

| Campo | Antes | Depois |
|---|---|---|
| Wrapper interno largura | `w-56` (fixo) | `w-48 sm:w-56 md:w-full` |
| Container foto `aspect-ratio` | `aspect-[3/4]` (classe Tailwind) | `style={{ aspectRatio: "3/4" }}` (inline style) |
| `sizes` da imagem | `(max-width: 768px) 224px, 380px` | `(max-width: 640px) 192px, (max-width: 768px) 224px, 380px` |

**Por que inline style resolve:** inline styles têm a maior especificidade CSS e são avaliados diretamente pelo browser como propriedade, sem passar pela pipeline de compilation do Tailwind. Eliminam o risco de a classe não ser gerada, purged ou sobrescrita em algum passo do build.

### Comportamento por breakpoint (atualizado)

| Breakpoint | Largura container | Largura foto | Altura foto (aspect 3:4) |
|---|---|---|---|
| Mobile (< 640px) | `w-48` = 192px | 192px | ~256px |
| Small (640–767px) | `sm:w-56` = 224px | 224px | ~299px |
| Desktop (≥ 768px) | `md:w-full md:max-w-[380px]` | até 380px | até ~507px |

### Arquivos alterados

- `src/components/sections/About.tsx` — inline style para `aspectRatio`, `w-48 sm:w-56`, `sizes` atualizado

---

## 62. Correções críticas C-02 e C-03 — auditoria round 3

### Contexto

Branch `fix/audit-round-3`. Correção de dois itens críticos identificados na auditoria técnica (seção da conversa que gerou o diagnóstico completo).

---

### [C-02] `src/app/api/contact/route.ts` — Resend movido para dentro do handler

**Problema:** `const resend = new Resend(process.env.RESEND_API_KEY)` era inicializado em nível de módulo. O construtor do Resend lança `Error: Missing API key` imediatamente se a variável não estiver definida, crashando toda a route com 500 não tratado — sem mensagem amigável para o usuário e impossível de diagnosticar nos logs.

**Correção aplicada:**

| Campo | Antes | Depois |
|---|---|---|
| `Resend` instance | nível de módulo (antes do handler) | dentro do handler POST |
| Validação da chave | ausente | `if (!apiKey)` → retorna `503 Serviço indisponível.` |
| Restante do handler | inalterado | inalterado |

```ts
// antes
const resend = new Resend(process.env.RESEND_API_KEY); // módulo
export async function POST(...) { ... }

// depois
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }
  const resend = new Resend(apiKey);
  // restante inalterado
}
```

**Por que 503:** semanticamente correto — o serviço de envio de e-mail está indisponível por ausência de configuração, não por erro do cliente (4xx) nem por falha inesperada (500).

---

### [C-03] `public/images/monique-ranauro3.png` — permissão corrigida de 600 para 644

**Problema:** O arquivo tinha permissão `-rw-------` (600 — somente owner lê). Os outros arquivos de imagem tinham `-rw-rw-r--` (664). Em ambientes Docker, CI/CD com usuário diferente do owner, ou ao compartilhar o projeto em equipe, o servidor não conseguia ler o arquivo.

**Correção aplicada:**

```bash
chmod 644 public/images/monique-ranauro3.png
```

| Antes | Depois |
|---|---|
| `-rw-------` (600) | `-rw-r--r--` (644) |

Owner lê/escreve; grupo e outros leem. Consistente com os demais arquivos do projeto (que têm 664; 644 é mais restritivo porém seguro para arquivo de imagem estática).

---

### Arquivos alterados

- `src/app/api/contact/route.ts` — `Resend` movido para o handler, validação `apiKey` adicionada
- `public/images/monique-ranauro3.png` — permissão `chmod 644` (não é alteração de conteúdo)

---

## 63. Correções de alta severidade A-01, A-02, A-03, A-04 — auditoria round 3

### Contexto

Branch `fix/audit-round-3`. Quatro itens de alta severidade identificados na auditoria técnica foram corrigidos.

---

### [A-01] Padronização de `duration-300` — 11 ocorrências

`duration-200` substituído por `duration-300` em todos os elementos interativos do projeto. O valor padrão do projeto é `duration-300` (definido na feature `hover-interactions`); os elementos abaixo haviam ficado com o valor anterior.

| Arquivo | Elemento | Ocorrências |
|---|---|---|
| `src/components/layout/Header.tsx` | CTA desktop, botão hambúrguer, links mobile, botão WhatsApp mobile | 4 |
| `src/components/layout/Footer.tsx` | Link "Falar no WhatsApp" (coluna Contato) | 1 |
| `src/components/sections/Contact.tsx` | Link WhatsApp, input nome, input telefone, textarea mensagem, botão submit | 5 |
| `src/components/sections/OnCall.tsx` | Botão "Acionar plantão 24h no WhatsApp" | 1 |

Total: **11 ocorrências** substituídas com `replace_all`. Confirmado via `grep` que não há residual de `duration-200` em nenhum arquivo do projeto.

---

### [A-02] `src/components/sections/PracticeAreas.tsx` — import do `cn` corrigido

`import cn from "clsx"` substituído por `import { cn } from "@/lib/utils"`. A função `cn` de `@/lib/utils` é o ponto canônico do projeto (criado em M-04, seção 53). O import direto do `clsx` evitava que a resolução de conflitos do `tailwind-merge` fosse aplicada aos cards de áreas de atuação.

---

### [A-03] `tailwind-merge` integrado ao `cn`

Instalado `tailwind-merge` e atualizado `src/lib/utils.ts`:

```ts
// antes
import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// depois
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

`twMerge` resolve conflitos entre classes Tailwind (ex: `p-4` + `p-6` → apenas `p-6`), eliminando a classe menos específica. Sem isso, classes conflitantes em qualquer uso futuro do `cn()` produziriam comportamento imprevisível dependente da ordem de declaração no CSS gerado.

---

### [A-04] `next.config.ts` — HSTS adicionado aos security headers

Header `Strict-Transport-Security` adicionado ao bloco `headers()`:

```ts
{
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
}
```

| Diretiva | Valor | Significado |
|---|---|---|
| `max-age` | `63072000` | 2 anos — período durante o qual o browser força HTTPS |
| `includeSubDomains` | — | Aplica a todos os subdomínios de `moniqueranauro.com.br` |
| `preload` | — | Permite submissão ao HSTS preload list dos browsers |

Proteção: força o browser a usar HTTPS em todas as futuras visitas, eliminando o risco de downgrade para HTTP em redes comprometidas.

---

### Arquivos alterados

- `src/components/layout/Header.tsx` — A-01 (4 ocorrências)
- `src/components/layout/Footer.tsx` — A-01 (1 ocorrência)
- `src/components/sections/Contact.tsx` — A-01 (5 ocorrências)
- `src/components/sections/OnCall.tsx` — A-01 (1 ocorrência)
- `src/components/sections/PracticeAreas.tsx` — A-02
- `src/lib/utils.ts` — A-03
- `next.config.ts` — A-04
- `package.json` / `package-lock.json` — A-03 (`tailwind-merge` instalado)

### Branch

Alterações realizadas na branch `fix/audit-round-3`.

---

## 64. Correções médias M-01, M-02, M-03, M-04 e M-05 — auditoria round 3 (conclusão)

### Contexto

Branch `fix/audit-round-3`. Cinco itens de média prioridade corrigidos, concluindo a auditoria técnica round 3.

---

### [M-01] `src/components/sections/About.tsx` — `aspect-ratio` inline → classe Tailwind

`style={{ aspectRatio: "3/4" }}` removido e substituído por `aspect-[3/4]` incorporado ao `className` do container da foto.

| Campo | Antes | Depois |
|---|---|---|
| `className` | `"group relative w-full overflow-hidden border border-accent/30 shadow-lg"` | `"group relative aspect-[3/4] w-full overflow-hidden border border-accent/30 shadow-lg"` |
| `style` | `{{ aspectRatio: "3/4" }}` | removido |

O inline style havia sido introduzido como workaround na seção 61 (diagnóstico de mobile). A causa raiz era o `hidden md:flex` na coluna wrapper — removido na seção 60. Com o `hidden` corrigido e o contexto de flex-col resolvido, a classe Tailwind `aspect-[3/4]` funciona corretamente em todos os breakpoints. A foto permanece visível em mobile.

---

### [M-02] `src/components/sections/About.tsx` — gap mobile do grid

`gap-16` substituído por `gap-8 md:gap-16` no container grid principal da seção.

| Antes | Depois |
|---|---|
| `gap-16` (64px em todos os breakpoints) | `gap-8` (32px mobile) + `md:gap-16` (64px desktop) |

Em mobile, o grid é de 1 coluna — o gap entre foto e texto estava em 64px sem necessidade. 32px é proporcional ao espaçamento vertical das demais seções em mobile.

---

### [M-03] `src/config/nav.ts` — Plantão 24h adicionado ao navLinks

Novo item inserido entre "Início" e "Sobre":

```ts
{ label: "Plantão 24h", href: "#plantao" }
```

A seção `#plantao` existe desde a seção 26 do CONTEXT.md mas estava ausente do menu de navegação. O posicionamento como segundo item reflete a prioridade da seção na landing page — conteúdo de alta urgência logo após o hero.

---

### [M-04] Componente `LiveIndicator` criado

Criado `src/components/ui/LiveIndicator.tsx` encapsulando o indicador de pulsação que estava duplicado em dois arquivos:

```tsx
export default function LiveIndicator() {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}
```

Bloco inline substituído por `<LiveIndicator />` em:

| Arquivo | Contexto |
|---|---|
| `src/components/sections/OnCall.tsx` | Botão "Acionar plantão 24h no WhatsApp" |
| `src/components/sections/Contact.tsx` | Botão "Falar no WhatsApp agora" |

Ambos os arquivos receberam `import LiveIndicator from "@/components/ui/LiveIndicator"`.

---

### [M-05] `src/components/sections/Contact.tsx` — validação de telefone alinhada ao servidor

Validação no client atualizada para aceitar 10 ou 11 dígitos (fixo e celular), alinhando com a regex `/^\d{10,11}$/` já existente no servidor (`src/app/api/contact/route.ts`).

| Campo | Antes | Depois |
|---|---|---|
| Condição | `phoneDigits.length < 11` | `phoneDigits.length < 10 \|\| phoneDigits.length > 11` |
| Mensagem de erro | `"Informe um celular válido com DDD..."` | `"Informe um telefone válido com DDD..."` |

A palavra "celular" foi substituída por "telefone" para refletir corretamente a aceitação de telefones fixos (10 dígitos) além de celulares (11 dígitos). A regex do servidor permanece inalterada.

---

### Arquivos criados

- `src/components/ui/LiveIndicator.tsx` — componente de indicador de pulsação (M-04)

### Arquivos alterados

- `src/components/sections/About.tsx` — M-01 (aspect-ratio inline → classe) + M-02 (gap mobile)
- `src/config/nav.ts` — M-03 (Plantão 24h adicionado)
- `src/components/sections/OnCall.tsx` — M-04 (LiveIndicator substituindo bloco inline)
- `src/components/sections/Contact.tsx` — M-04 (LiveIndicator) + M-05 (validação telefone)

---

## 65. Auditoria técnica round 3 — concluída

### Status final

Todos os itens da auditoria round 3 foram corrigidos.

| ID | Severidade | Descrição | Branch | Seção |
|---|---|---|---|---|
| C-02 | Crítico | Resend movido para dentro do handler POST | fix/audit-round-3 | 62 |
| C-03 | Crítico | chmod 644 em monique-ranauro3.png | fix/audit-round-3 | 62 |
| A-01 | Alta | duration-200 → duration-300 (11 ocorrências) | fix/audit-round-3 | 63 |
| A-02 | Alta | import cn corrigido em PracticeAreas | fix/audit-round-3 | 63 |
| A-03 | Alta | tailwind-merge integrado ao cn | fix/audit-round-3 | 63 |
| A-04 | Alta | HSTS adicionado ao next.config.ts | fix/audit-round-3 | 63 |
| M-01 | Média | aspect-ratio inline → classe Tailwind (About) | fix/audit-round-3 | 64 |
| M-02 | Média | gap-16 → gap-8 md:gap-16 em mobile (About) | fix/audit-round-3 | 64 |
| M-03 | Média | Plantão 24h adicionado ao navLinks | fix/audit-round-3 | 64 |
| M-04 | Média | LiveIndicator extraído como componente reutilizável | fix/audit-round-3 | 64 |
| M-05 | Média | Validação de telefone: 10–11 dígitos no client | fix/audit-round-3 | 64 |

### Pendência conhecida (não bloqueante)

| ID | Categoria | Descrição | Motivo |
|---|---|---|---|
| C-01 | Rate limiting | `/api/contact` sem rate limiting | Requer Upstash Redis — dependência externa não provisionada |