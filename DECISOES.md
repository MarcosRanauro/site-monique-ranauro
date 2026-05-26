# DECISOES.md — Site Monique Ranauro

Registro consolidado das decisões técnicas e arquiteturais do projeto.
Cada decisão documenta o contexto, a escolha feita e suas consequências.

---

## [D-01] Next.js como framework

**Data:** 2026-05-11
**Status:** ativo

**Contexto:** O projeto precisava de um framework moderno que oferecesse boa performance, geração de HTML no servidor para SEO, e estrutura escalável para uma landing page institucional com formulário de contato via API.

**Decisão:** Next.js 16 com App Router como framework base.

**Motivo:** Performance nativa com SSR/SSG, API Routes integradas (usadas para `/api/contact`), suporte a React Server Components, integração nativa com Vercel e ecossistema maduro com TypeScript.

**Consequências:** TypeScript estrito como convenção, Server Components como padrão, uso de `"use client"` restrito a componentes com estado ou interatividade, API Routes disponíveis sem backend separado.

---

## [D-02] Tailwind CSS v4

**Data:** 2026-05-11
**Status:** ativo

**Contexto:** O projeto exige uma interface refinada, responsiva e consistente com tokens visuais bem definidos (paleta escura + dourado). Escrever CSS customizado manualmente seria mais lento e difícil de manter.

**Decisão:** Tailwind CSS v4 com tokens definidos via `@theme inline` em `globals.css`.

**Motivo:** Acelera a construção da interface sem perder controle visual; responsividade mobile-first nativa; tokens CSS integrados ao sistema de classes utilitárias do Tailwind v4.

**Consequências:** Classes condicionais com `cn()` (clsx); tokens de cor declarados em `globals.css` e consumidos diretamente como classes Tailwind (ex: `bg-background`, `text-accent`); nenhum arquivo CSS customizado adicional necessário.

---

## [D-03] Migração para src/

**Data:** 2026-05-11
**Status:** ativo

**Contexto:** À medida que o projeto crescia, misturar `app/` e `components/` diretamente na raiz junto com `package.json`, `tsconfig.json`, `next.config.ts` e demais arquivos de configuração tornava a estrutura confusa.

**Decisão:** Todo o código da aplicação movido para `src/`; arquivos de configuração permanecem na raiz.

**Motivo:** Separação profissional entre código da aplicação e configuração do projeto; convenção amplamente adotada em projetos Next.js; facilita navegação e manutenção.

**Consequências:** Alias `@/*` no `tsconfig.json` atualizado de `"./*"` para `"./src/*"`; estrutura final: `src/app/`, `src/components/`, `src/config/`, `src/lib/`.

---

## [D-04] Identidade visual — paleta e tipografia

**Data:** 2026-05-11
**Status:** ativo — nunca alterar sem instrução explícita do cliente

**Contexto:** O site precisa transmitir sofisticação, seriedade e autoridade sem recorrer ao visual jurídico clássico (martelo, balança, azul corporativo). A advogada atua em área criminal de alta sensibilidade — o visual deve comunicar confiança, precisão e discrição.

**Decisão:** Paleta escura com dourado discreto como destaque; tipografia serifada elegante nos títulos.

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#0b0b0b` | Fundo base |
| `--foreground` | `#f5f1ea` | Texto principal |
| `--muted` | `#a8a29e` | Texto secundário |
| `--border` | `#2a2623` | Bordas |
| `--accent` | `#b08d57` | Dourado — destaque |
| `--accent-light` | `#d6b77a` | Dourado claro — hover |
| `--font-heading` | Playfair Display | Títulos |
| `--font-sans` | Inter | Corpo de texto |

**Motivo:** Fundo preto profundo → sofisticação/premium sem clichê jurídico; off-white quente → elegância sem peso de branco puro; dourado discreto → autoridade e distinção; Playfair Display → serifada com personalidade forte, ideal para advocacia de alto padrão; Inter → humanista e altamente legível.

**Consequências:** Tokens declarados em `globals.css` e mapeados no `@theme inline`; qualquer alteração visual deve passar por aprovação do cliente.

---

## [D-05] next/font em vez de Google Fonts externo

**Data:** 2026-05-11
**Status:** ativo

**Contexto:** Fontes carregadas de servidores externos (Google Fonts) introduzem requisições de terceiros, afetam performance (render-blocking), e enviam dados de navegação ao Google — potencialmente incompatível com LGPD.

**Decisão:** `next/font/google` para Playfair Display e Inter, com `display: "swap"`.

**Motivo:** Auto-hospedagem das fontes em `/_next/static/` sem nenhuma requisição externa; melhora CLS e LCP; sem vazamento de dados de IP para o Google; `font-display: swap` garante fallback visual imediato.

**Consequências:** Fontes injetadas como variáveis CSS no elemento `html`; disponíveis via `--font-heading` e `--font-sans` em todo o projeto.

---

## [D-06] Server Components como padrão, "use client" mínimo

**Data:** 2026-05-11
**Status:** ativo

**Contexto:** O App Router do Next.js promove Server Components como padrão. Componentes client-side aumentam o bundle JavaScript enviado ao browser e podem impactar TBT e LCP.

**Decisão:** Todos os componentes de seção são Server Components por padrão. `"use client"` usado apenas quando há `useState`, `useEffect` ou handlers de evento.

**Motivo:** Menor bundle JS inicial, melhor performance de carregamento, HTML gerado no servidor para SEO e LCP.

**Consequências:** Apenas três componentes usam `"use client"`: `Header` (menu hambúrguer), `FAQ` (acordeão interativo) e `Contact` (formulário com estado); todos os demais são Server Components estáticos.

---

## [D-07] Centralização da WHATSAPP_URL

**Data:** 2026-05-20
**Status:** ativo

**Contexto:** A URL do WhatsApp estava hardcoded em 6 arquivos diferentes. Qualquer alteração no número da advogada exigiria busca e substituição manual em múltiplos arquivos — risco real de inconsistência.

**Decisão:** Constante `WHATSAPP_URL` centralizada em `src/config/contact.ts`.

**Motivo:** Single source of truth; alteração do número ou da mensagem pré-preenchida exige mudança em um único arquivo; padrão consistente com `SITE_URL`.

**Consequências:** Import obrigatório via `@/config/contact` em todos os componentes que usam o link do WhatsApp; nunca hardcodar a URL fora desse arquivo.

---

## [D-08] Centralização da SITE_URL

**Data:** 2026-05-20
**Status:** ativo

**Contexto:** A URL canônica do site (`https://moniqueranauro.com.br`) estava duplicada em `layout.tsx`, `sitemap.ts` e `robots.ts`. Em uma eventual mudança de domínio, seria necessário atualizar três arquivos.

**Decisão:** Constante `SITE_URL` centralizada em `src/config/site.ts`.

**Motivo:** Single source of truth para o domínio canônico; padrão consistente com `WHATSAPP_URL`.

**Consequências:** Import obrigatório via `@/config/site` em `layout.tsx`, `sitemap.ts` e `robots.ts`; nunca hardcodar o domínio fora desse arquivo.

---

## [D-09] Centralização de navLinks

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** O array `navLinks` (links de navegação) estava duplicado e idêntico em `Header.tsx` e `Footer.tsx`. Uma adição ou alteração de item de menu exigia edição em dois arquivos — risco de dessincronia.

**Decisão:** Array `navLinks` centralizado em `src/config/nav.ts`.

**Motivo:** Single source of truth para a estrutura de navegação; padrão consistente com `WHATSAPP_URL` e `SITE_URL`.

**Consequências:** Import via `@/config/nav` em `Header.tsx` e `Footer.tsx`; qualquer alteração no menu exige mudança em um único arquivo.

---

## [D-10] SectionBadge como componente reutilizável

**Data:** 2026-05-20
**Status:** ativo

**Contexto:** O padrão de badge de seção (eyebrow label com borda dourada, texto em caixa alta, espaçamento de letras) estava duplicado com o mesmo HTML e classes em 7 arquivos de seção.

**Decisão:** Componente `src/components/ui/SectionBadge.tsx` encapsulando o padrão.

**Motivo:** DRY; qualquer ajuste visual no badge (espaçamento, tamanho, cor) exige mudança em um único arquivo; interface uniforme em todas as seções.

**Consequências:** Importado em todas as 7 seções da landing page (Hero, OnCall, About, PracticeAreas, Differentials, FAQ, Contact).

---

## [D-11] Resend para envio de e-mail

**Data:** 2026-05-17
**Status:** ativo

**Contexto:** O formulário de contato precisava de backend para envio de e-mail sem servidor dedicado. A simulação com `setTimeout` foi substituída por envio real.

**Decisão:** SDK Resend integrado via Route Handler Next.js em `src/app/api/contact/route.ts`.

**Motivo:** SDK simples com API REST e TypeScript nativo; suporte a domínio personalizado verificado; integração direta com o ambiente serverless da Vercel; sem necessidade de servidor SMTP próprio.

**Consequências:** Requer variável de ambiente `RESEND_API_KEY`; domínio `moniqueranauro.com.br` verificado no painel do Resend para o campo `from`; e-mail de destino configurável via `CONTACT_EMAIL_TO`.

---

## [D-12] Deploy na Vercel

**Data:** 2026-05-18
**Status:** ativo

**Contexto:** O projeto Next.js precisava de plataforma de deploy com CI/CD automático, CDN global e suporte a serverless functions (necessárias para a Route Handler `/api/contact`).

**Decisão:** Vercel como plataforma de hospedagem e deploy.

**Motivo:** Integração nativa com Next.js (mesmo fabricante); deploy automático a cada push na branch `main`; CDN global com edge caching; preview environments para branches de feature; painel de variáveis de ambiente seguro.

**Consequências:** Variáveis de ambiente (`RESEND_API_KEY`, `CONTACT_EMAIL_FROM`, `CONTACT_EMAIL_TO`) configuradas no painel da Vercel; domínio customizado vinculado ao projeto no dashboard.

---

## [D-13] DNS via Cloudflare

**Data:** 2026-05-18
**Status:** ativo

**Contexto:** O domínio `moniqueranauro.com.br` precisava de gerenciamento de DNS confiável e com proteção adicional para o site em produção.

**Decisão:** Cloudflare como provedor de DNS para o domínio `moniqueranauro.com.br`.

**Motivo:** Proteção DDoS na camada de DNS, CDN global com cache, SSL automático, painel de gerenciamento simples e integração com Vercel via registros CNAME/A.

**Consequências:** Registros DNS gerenciados no painel do Cloudflare; qualquer alteração de domínio ou subdomínio deve ser feita lá; TTL de propagação a considerar em mudanças.

---

## [D-14] Security headers via next.config.ts

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** Auditoria técnica identificou ausência de headers de segurança HTTP. O header `X-Powered-By: Next.js` expunha o framework desnecessariamente.

**Decisão:** Headers de segurança declarados no bloco `headers()` do `next.config.ts`, aplicados a todas as rotas via `source: "/(.*)"`.

| Header | Valor | Proteção |
|---|---|---|
| `X-Frame-Options` | `DENY` | Clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Vazamento de referência |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | APIs sensíveis do browser |
| `Content-Security-Policy` | Diretivas restritivas por ambiente | XSS e injeção de recursos |
| `X-Powered-By` | Removido via `poweredByHeader: false` | Fingerprinting do framework |

**Motivo:** Camada de defesa em profundidade sem custo de performance; headers aplicados em nível de servidor antes do JavaScript do cliente.

**Consequências:** CSP separado por ambiente (ver D-15); qualquer novo recurso externo (fonte, imagem, script) exige atualização das diretivas CSP.

---

## [D-15] CSP separado por ambiente (dev vs produção)

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** O CSP adicionado em D-14 bloqueava `eval()` em desenvolvimento. O React/Turbopack usa `eval()` para reconstruir call stacks e habilitar features de debug. Em produção, `eval()` nunca é usado — o bloqueio estava correto apenas para produção.

**Decisão:** Flag `isDev` derivada de `process.env.NODE_ENV` para incluir `'unsafe-eval'` no `script-src` apenas em ambiente de desenvolvimento.

```ts
const isDev = process.env.NODE_ENV === "development";
// development: "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
// production:  "script-src 'self' 'unsafe-inline'"
```

**Motivo:** Mínimo de permissão necessário em produção (sem `unsafe-eval`); ambiente de desenvolvimento funcional sem bloquear ferramentas de debug.

**Consequências:** O `next.config.ts` lê `NODE_ENV` em tempo de inicialização do servidor; a política de produção é mais restritiva e não inclui `unsafe-eval` em nenhuma circunstância.

---

## [D-16] Imagem profissional como background do Hero

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** O Hero original usava fundo sólido (`bg-background`). Com a foto profissional da cliente disponível, o objetivo era humanizar o site sem sacrificar a legibilidade do texto sobre a imagem.

**Decisão:** Imagem de fundo com overlay em gradiente assimétrico (`from-background/95 via-background/80 to-background/40`) e card semi-transparente (`bg-background/60 backdrop-blur-sm`) na coluna direita. Estrutura de três camadas com z-index (z-0 imagem, z-10 overlay, z-20 conteúdo).

**Motivo:** O gradiente assimétrico mantém alta cobertura no lado esquerdo (texto legível em qualquer dispositivo) enquanto expõe a imagem no lado direito — elegância sem comprometer a comunicação. O card semi-transparente ancora o conteúdo da coluna direita sem bloquear visualmente a foto.

**Consequências:** A `<section>` do Hero requer `relative overflow-hidden` para o `fill` da imagem funcionar; o conteúdo foi deslocado para a esquerda via `mr-auto` + `max-w-5xl` para expor a imagem em telas maiores; `priority` na imagem melhora o LCP.

---

## [D-17] Copy humanizada no Hero

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** Os textos originais do Hero eram técnicos e institucionais. A cliente solicitou uma comunicação mais próxima e humana, sem perder seriedade nem violar o Provimento 205/2021 da OAB.

**Decisão:** Novo `h1` ("Advocacia criminal para quem precisa ser ouvido e defendido de verdade."), subtítulo com nome da advogada ("Monique Ranauro atua ao seu lado em momentos difíceis…") e CTA principal pessoalizado ("Falar com a Monique").

**Motivo:** Conexão emocional com visitantes em situação de crise (familiar preso, investigação em andamento) é diretamente proporcional à conversão em contato. O nome da advogada no subtítulo reforça a relação pessoal sem violar as regras éticas da OAB.

**Consequências:** Nenhuma promessa de resultado, superlativo ou comparação foi introduzida — conformidade com o Provimento 205/2021 mantida; nenhum elemento de layout foi alterado.

---

## [D-18] Foto real na seção About com visibilidade em mobile

**Data:** 2026-05-24
**Status:** ativo

**Contexto:** A seção About usava um card decorativo com monograma "M" em vez da foto da cliente. Com a imagem disponível, faz sentido mostrar a advogada em todas as telas — inclusive mobile, onde anteriormente estava oculta (`hidden md:flex`).

**Decisão:** Card decorativo substituído pela foto profissional (`monique-ranauro3.png`) com `next/image fill`, `aspect-[3/4]`, `object-top`. Visibilidade em mobile com `w-48 sm:w-56 md:w-full`, centralizada acima do texto no layout de 1 coluna.

**Motivo:** A foto da advogada humaniza o site e aumenta a confiança do visitante — especialmente importante em advocacia criminal, onde o vínculo pessoal é fator decisivo na contratação. Mostrar o rosto da profissional em mobile (maioria dos acessos) era prioritário.

**Consequências:** `aria-hidden` removido da coluna (antes era decorativa, agora é conteúdo); `alt` descritivo adicionado; `sizes` responsivo comunicado ao browser para evitar download excessivo; hover de zoom e overlay preservados.

---

## [D-19] Sistema de hovers com `duration-300` como padrão universal

**Data:** 2026-05-25
**Status:** ativo

**Contexto:** A feature de hover interactions usou `duration-300` como padrão para todas as transições. Elementos interativos anteriores usavam `duration-200` de forma inconsistente (11 ocorrências encontradas na auditoria round 3).

**Decisão:** `duration-300` como valor padrão para todas as transições interativas do projeto. Substituição total de `duration-200` em todos os arquivos.

**Motivo:** `300ms` entrega a sensação premium correta para a identidade visual do projeto — rápido o suficiente para não parecer lento, lento o suficiente para perceber a transição. Consistência entre todos os elementos cria coesão visual e elimina a impressão de "partes diferentes do site".

**Consequências:** Nenhum componente deve usar `duration-200` para transições interativas; exceções (`duration-500` na foto do About) são casos documentados com justificativa específica.

---

## [D-20] `tailwind-merge` integrado ao `cn()`

**Data:** 2026-05-25
**Status:** ativo

**Contexto:** A função `cn()` em `src/lib/utils.ts` usava apenas `clsx`, que une classes mas não resolve conflitos entre utilitários Tailwind. Classes conflitantes (ex: `p-4` + `p-6`) produzem comportamento imprevisível dependente da ordem de declaração no CSS gerado.

**Decisão:** `twMerge(clsx(inputs))` como implementação padrão do `cn()`.

```ts
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Motivo:** `tailwind-merge` resolve silenciosamente conflitos de classes Tailwind, mantendo sempre a última classe como vencedora — comportamento previsível e correto. Padrão amplamente adotado em projetos Next.js + Tailwind (shadcn/ui, etc.).

**Consequências:** Qualquer uso de `cn()` com classes conflitantes agora produz o resultado correto automaticamente; `tailwind-merge` adicionado como dependência de produção.

---

## [D-21] `LiveIndicator` como componente reutilizável

**Data:** 2026-05-25
**Status:** ativo

**Contexto:** O bloco de indicador de pulsação (`animate-ping` + círculo sólido) estava duplicado de forma idêntica em `OnCall.tsx` e `Contact.tsx` — dois botões de WhatsApp com propósitos distintos (urgência e contato geral) mas mesmo indicador visual.

**Decisão:** Componente `src/components/ui/LiveIndicator.tsx` encapsulando o padrão de dois círculos concêntricos com `animate-ping`.

**Motivo:** DRY; qualquer ajuste no tamanho, cor ou animação do indicador exige mudança em um único arquivo; padrão consistente com `SectionBadge` e `WhatsAppButton` no diretório `ui/`.

**Consequências:** Importado em `OnCall.tsx` e `Contact.tsx`; pode ser reutilizado em futuras seções ou componentes que precisem indicar status "ao vivo" ou disponibilidade imediata.
