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