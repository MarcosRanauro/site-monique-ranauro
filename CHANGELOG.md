# Changelog — Site Monique Ranauro

Todas as mudanças relevantes do projeto estão documentadas aqui.

O formato segue o padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não lançado]

Sem alterações pendentes de lançamento.

---

## [1.3.0] — 2026-05-24

Auditoria técnica round 2: segurança, organização e refinamentos de acessibilidade.

### Adicionado

- `src/config/nav.ts` — array `navLinks` centralizado (importado por Header e Footer)
- `src/lib/utils.ts` — função `cn()` com `clsx` para classes Tailwind condicionais
- `public/og-image.png` — imagem Open Graph em PNG 1200×630px (gerada via `sharp`)
- Content-Security-Policy adicionado ao `next.config.ts` com diretivas por ambiente
- `'unsafe-eval'` no `script-src` apenas em desenvolvimento (Turbopack/React DevTools)
- Atributos `autoComplete` nos campos do formulário de contato (`name`, `tel`, `off`)
- `aria-controls="mobile-menu"` no botão hambúrguer; `id="mobile-menu"` no painel
- `type="button"` explícito no botão hambúrguer do Header

### Corrigido

- `public/og-image.svg` convertido para PNG — Facebook, Twitter/X e WhatsApp não suportam SVG para pré-visualização de links
- Validação server-side na API `/api/contact`: comprimento máximo de nome e mensagem, formato de telefone via regex
- `minLength`/`maxLength` nos campos do formulário alinhados com validação server-side
- `lastModified: new Date()` removido do `sitemap.ts` — valor dinâmico não reflete modificação real de conteúdo
- `scroll-behavior: smooth` movido para `@media (prefers-reduced-motion: no-preference)`
- Itens de localização no Contact convertidos de `div/div` para `ul/li` (semântica correta)
- Campos do formulário desabilitados durante envio (`disabled={status === "loading"}`)
- Tipo inline do `SectionBadge` extraído para `type SectionBadgeProps`
- Definição local de `navLinks` removida de `Header.tsx` e `Footer.tsx`
- 5 imagens não referenciadas removidas de `public/images/`
- `public/og-image.svg` removido após conversão para PNG

---

## [1.2.0] — 2026-05-24

Integração de fotos profissionais e humanização da comunicação.

### Adicionado

- Imagem profissional da advogada como background do Hero com overlay em gradiente
- Estrutura de camadas com z-index (z-0 imagem, z-10 overlay, z-20 conteúdo)
- Foto profissional da advogada na seção About (substituiu card decorativo com monograma)
- Citação institucional como legenda da foto no About

### Alterado

- Hero: conteúdo deslocado para a esquerda (`mr-auto`, `max-w-5xl`, `md:pl-12 lg:pl-20`) para expor imagem de fundo
- Hero `h1`: "Defesa criminal firme, humanizada, estratégica e técnica." → "Advocacia criminal para quem precisa ser ouvido e defendido de verdade."
- Hero subtítulo: texto técnico anterior → "Dra. Monique Ranauro atua ao seu lado em momentos difíceis, com escuta atenta, orientação clara e defesa técnica desde o primeiro contato."
- Hero CTA principal: "Falar com a advogada" → "Falar com a Monique"
- Card decorativo do Hero: fundo sólido → `bg-background/60 backdrop-blur-sm`

---

## [1.1.0] — 2026-05-20

Auditorias de responsividade, acessibilidade, performance, conteúdo e código.

### Adicionado

- `CLAUDE.md` — instruções persistentes para o Claude Code (10 seções: identidade, padrões de código, acessibilidade, identidade visual, OAB, configs centralizadas, componentes reutilizáveis, fluxo de trabalho, pendências)
- `src/config/contact.ts` — constante `WHATSAPP_URL` (eliminou URL hardcoded em 6 arquivos)
- `src/config/site.ts` — constante `SITE_URL` (eliminou URL hardcoded em 3 arquivos)
- `src/components/ui/SectionBadge.tsx` — componente de badge de seção (eliminou padrão duplicado em 7 arquivos)
- Security headers no `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- `poweredByHeader: false` para remover `X-Powered-By: Next.js`
- `images.formats: ["image/avif", "image/webp"]` para otimização automática de imagens
- `metadataBase` no `layout.tsx` para resolver warning de Open Graph sem URL base
- Tokens de fundo intermediários em `globals.css`: `--color-background-secondary`, `--color-background-tertiary`, `--color-background-footer`

### Corrigido

- Espaçamento excessivo em mobile: `py-28` → `py-16 md:py-28` em todas as seções
- Gap entre colunas do Hero: `gap-16` → `gap-12 md:gap-16`
- Gap entre cabeçalho e conteúdo em mobile: `mb-16` → `mb-10 md:mb-16` (PracticeAreas, Differentials, FAQ)
- Contraste WCAG AA: `text-accent/70` e `text-accent/80` → `text-accent` (ratio de 3.63:1 e 4.42:1 corrigidos para 6.37:1)
- `aria-hidden="true"` adicionado nos cards decorativos do Hero e do About
- `aria-expanded` no botão hambúrguer do Header
- `aria-controls` e `role="region"` no acordeão FAQ
- `aria-label` nos três elementos `<nav>` (navegação principal, menu mobile, rodapé)
- `aria-labelledby` nos painéis do acordeão FAQ
- `role="alert"` no card de confirmação e no erro geral do formulário Contact
- `aria-hidden="true"` nos símbolos decorativos Unicode do Differentials
- Listas semânticas `ul/li` em OnCall (bullets de plantão), About (itens de apoio) e Hero (trustIndicators)
- `noValidate` no formulário Contact para delegar validação ao JavaScript
- `useCallback` no `close` do Header para evitar recriação a cada render
- `maskPhone` movida para escopo de módulo no Contact (fora do componente)
- `clsx` instalado e usado para classes condicionais em PracticeAreas
- `bg-[#0f0f0f]`, `bg-[#0d0d0d]`, `bg-[#080808]` substituídos por tokens semânticos
- Frase do card do About: tom ajustado para conformidade com Provimento 205/2021 da OAB
- Ano de copyright no Footer: fixo 2025 → `new Date().getFullYear()` (dinâmico por build)
- Validação server-side robusta em `/api/contact`: JSON parse com try/catch, verificação de tipo em runtime, log de erros Resend

---

## [1.0.0] — 2026-05-18

Lançamento inicial em produção.

### Adicionado

- Landing page completa com 9 seções: Hero, Plantão 24h (OnCall), About, PracticeAreas, Differentials, FAQ, Contact, Header e Footer
- Header responsivo com navegação desktop, menu hambúrguer mobile e CTA WhatsApp
- Botão WhatsApp flutuante (`WhatsAppButton`) fixo no canto inferior direito
- Seção Hero com badge, h1, subtítulo, CTAs e indicadores de confiança
- Seção Plantão 24h com bullets de serviço e CTA de urgência
- Seção About com card institucional e texto profissional
- Seção Áreas de Atuação com 7 cards (Prisão em flagrante, Audiência de custódia, Inquérito policial, Processo criminal, Tribunal do Júri, Crimes contra a honra, Medidas urgentes)
- Seção Diferenciais com 4 cards (Sigilo absoluto, Estratégia individualizada, Comunicação clara, Plantão 24h)
- Seção FAQ com acordeão interativo de 6 perguntas e respostas
- Seção Contato com formulário (nome, telefone com máscara, mensagem), integração Resend e aviso ético OAB
- Footer institucional com marca, navegação rápida e informações de contato
- Formulário de contato integrado ao Resend via Route Handler `/api/contact`
- SEO completo: metadata, Open Graph, Twitter Card, sitemap automático, robots.txt
- Imagem Open Graph placeholder (`public/og-image.svg`) 1200×630px
- Domínio `moniqueranauro.com.br` configurado e produção ativa
- Deploy automático na Vercel a cada push na branch `main`
- Número real de WhatsApp configurado com mensagem pré-preenchida
- Estrutura de código em `src/` com alias `@/`
- Fontes Playfair Display e Inter via `next/font/google` (auto-hospedadas)
- Identidade visual completa: paleta escura, dourado discreto, tokens CSS no `@theme inline`
- `lang="pt-BR"` no HTML, `scroll-behavior: smooth`, seleção de texto em dourado
- Responsividade mobile-first testada em 375px, 390px, 430px, 768px e 1280px
