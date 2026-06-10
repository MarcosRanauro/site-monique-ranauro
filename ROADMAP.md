# Roadmap — Site Monique Ranauro

**Status atual:** v1.5.0 em produção em [moniqueranauro.com.br](https://moniqueranauro.com.br).

---

## ✅ Concluído

### Setup e infraestrutura

- [x] Setup do projeto (Next.js 16 + TypeScript + Tailwind CSS v4)
- [x] Estrutura em `src/` com alias `@/`
- [x] Deploy na Vercel com CI automático (push na `main`)
- [x] Domínio `moniqueranauro.com.br` configurado em produção
- [x] Domínio verificado no Resend (`site@moniqueranauro.com.br`)
- [x] Security headers (HSTS, CSP, X-Frame-Options, COOP)
- [x] Migrations Supabase versionadas em `supabase/migrations/`
- [x] Restrições RLS M-05 executadas na política `allow_insert_contacts`

### Site público

- [x] Identidade visual (tokens, fontes Playfair Display + Inter, paleta escura/dourado)
- [x] Header (desktop + menu hambúrguer mobile)
- [x] Hero principal com foto profissional de fundo
- [x] Seção Plantão 24h (OnCall)
- [x] Seção Sobre (About) com foto da advogada em mobile e desktop
- [x] Seção Áreas de Atuação (PracticeAreas) — 7 cards
- [x] Seção Diferenciais — 4 cards
- [x] Seção FAQ — acordeão interativo (6 perguntas)
- [x] Seção Contato — formulário com validação
- [x] Footer institucional
- [x] Botão WhatsApp flutuante
- [x] Número de WhatsApp real configurado em todos os CTAs
- [x] Hover interactions e micro-animações (`duration-300`)
- [x] Responsividade auditada (375px, 390px, 430px, 768px, 1280px)
- [x] Acessibilidade básica (WCAG AA, ARIA, headings, listas semânticas)

### Backend e integrações

- [x] Formulário de contato — `POST /api/contact`
- [x] Integração Resend — envio real de e-mail
- [x] Integração Supabase — tabela `public.contacts` com RLS
- [x] Rate limiting via Upstash Redis (3/10min no formulário, 5/15min no login)
- [x] Rate limiting obrigatório em produção (fail closed sem Upstash)
- [x] Painel admin em `/acesso` — autenticação por senha
- [x] Sessões admin stateful no Redis (token UUID, TTL 8h, revogação no logout)
- [x] Painel: listagem, busca, paginação, exportação CSV, exclusão de contatos
- [x] Proxy (`src/proxy.ts`) protegendo `/acesso/painel` e `/api/admin/*`

### SEO

- [x] Metadata completa (title, description, keywords)
- [x] Open Graph e Twitter Card
- [x] Imagem OG em PNG 1200×630px
- [x] Sitemap (`/sitemap.xml`) e robots (`/robots.txt`)
- [x] URL canônica `https://moniqueranauro.com.br`

### Qualidade

- [x] Auditorias técnicas (rounds 1–3)
- [x] `npm run lint`, `typecheck` e `build` sem erros
- [x] Script de auditoria automática (`npm run audit:project`)

---

## 🔲 Futuro / Melhorias

Itens documentados como pendentes ou opcionais no `CONTEXT.md`:

### Conteúdo (depende da cliente)

- [ ] Endereço completo do escritório no Footer e Contato (hoje: apenas "Nova Iguaçu, RJ")
- [ ] Copy final revisado pela advogada

### Limpeza e documentação

- [ ] Remover `public/images/monique-ranauro2.png` (arquivo órfão, não referenciado)
- [ ] Atualizar `CLAUDE.md` seção 10 (pendências desatualizadas)

### Infraestrutura e validação

- [ ] Confirmar variáveis de ambiente configuradas na Vercel em produção
- [ ] Validar formulário de contato e painel admin em produção após deploy
- [ ] Verificar pré-visualização OG no WhatsApp/LinkedIn
- [ ] Confirmar `/sitemap.xml` e `/robots.txt` acessíveis em produção

### Segurança e dependências

- [ ] Atualizar `next@16.3.0` (ou superior estável) quando disponível — corrige vulnerabilidade PostCSS (GHSA-qx2v-qp2m-jg93); ver `SECURITY.md`
