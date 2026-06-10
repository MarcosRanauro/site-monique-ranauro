# Site Monique Ranauro

Site profissional desenvolvido para a advogada **Monique Ranauro**, com foco em uma presença digital moderna, elegante, responsiva e alinhada à atuação na área criminal.

O projeto apresenta a profissional, suas áreas de atuação e facilita o contato direto com potenciais clientes, mantendo uma comunicação sóbria, técnica e compatível com a seriedade da advocacia.

**URL em produção:** [moniqueranauro.com.br](https://moniqueranauro.com.br)

---

## Visão geral

Landing page institucional para advocacia criminal, com:

- Design moderno e elegante (paleta escura, dourado discreto)
- Comunicação clara e profissional
- Alta performance e responsividade mobile-first
- SEO básico (metadata, Open Graph, sitemap, robots.txt)
- Formulário de contato com envio de e-mail via Resend
- Painel administrativo para gestão de contatos recebidos

---

## Status do projeto

**Em produção** — versão **1.5.0** (ver `CHANGELOG.md`).

Deploy automático na Vercel a cada push na branch `main`.

Principais marcos concluídos:

- [x] Landing page completa (Hero, Plantão 24h, Sobre, Áreas de Atuação, Diferenciais, FAQ, Contato)
- [x] Identidade visual definida (tokens, fontes, componentes)
- [x] Responsividade e acessibilidade auditadas
- [x] SEO (metadata, Open Graph, sitemap, robots.txt)
- [x] Fotos profissionais no Hero e na seção Sobre
- [x] WhatsApp configurado em todos os CTAs
- [x] Domínio `moniqueranauro.com.br` em produção
- [x] Formulário de contato integrado ao Resend
- [x] Persistência de contatos no Supabase (tabela `contacts`)
- [x] Painel admin em `/acesso` com autenticação por senha

---

## Funcionalidades

### Site público

- Header com navegação desktop e menu mobile
- Botão WhatsApp flutuante
- Formulário de contato (nome, e-mail, telefone, mensagem) com validação client-side e server-side
- Acordeão interativo no FAQ

### Backend e integrações

| Recurso | Descrição |
|---|---|
| **Resend** | Envio de e-mail do formulário via `POST /api/contact` |
| **Supabase** | Tabela `public.contacts` — contatos salvos após envio bem-sucedido (opcional para o formulário; obrigatório para o painel) |
| **Upstash Redis** | Rate limiting e sessões do painel admin |
| **Painel admin** (`/acesso`) | Login por senha (`ADMIN_PASSWORD`); listagem, busca, exportação CSV e exclusão de contatos |

A autenticação do painel usa cookie httpOnly com token de sessão armazenado no Redis (TTL 8 horas). Rotas protegidas: `/acesso/painel` e `/api/admin/*`.

---

## Tecnologias

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Resend](https://resend.com/) — e-mail
- [Supabase](https://supabase.com/) — PostgreSQL
- [Upstash Redis](https://upstash.com/) — rate limiting e sessões
- Deploy: [Vercel](https://vercel.com/)

---

## Estrutura do projeto

```txt
site-monique-ranauro/
├── public/
│   ├── images/          # Fotos e assets visuais
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page
│   │   ├── acesso/            # Login e painel admin
│   │   └── api/
│   │       ├── contact/       # Formulário público
│   │       └── admin/         # Login, logout, contatos
│   ├── components/
│   ├── config/                # WHATSAPP_URL, SITE_URL, navLinks
│   ├── lib/
│   └── proxy.ts               # Proteção das rotas admin
├── supabase/migrations/       # Schema versionado
├── package.json
└── next.config.ts
```

---

## Como rodar localmente

```bash
git clone git@github.com:MarcosRanauro/site-monique-ranauro.git
cd site-monique-ranauro
npm install
cp .env.example .env.local   # preencher variáveis
npm run dev
```

Disponível em `http://localhost:3000`.

---

## Scripts disponíveis

| Comando | Função |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção (após build) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificação TypeScript |
| `npm run audit:project` | Auditoria automática do projeto |

---

## Variáveis de ambiente

Referência completa em `.env.example`. Principais variáveis:

- `RESEND_API_KEY` — envio de e-mail (obrigatório para o formulário)
- `SUPABASE_URL`, `SUPABASE_ANON_KEY` — inserção de contatos
- `SUPABASE_SERVICE_ROLE_KEY` — leitura/exclusão no painel admin
- `ADMIN_PASSWORD` — senha do painel em `/acesso`
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — rate limiting e sessões admin (obrigatório em produção)

---

## Considerações éticas

Por se tratar de um site profissional voltado à advocacia, o conteúdo respeita os limites da publicidade jurídica (Provimento 205/2021 da OAB): sem promessas de resultado, linguagem sensacionalista ou captação indevida de clientela.

---

## Desenvolvedor

Projeto desenvolvido por Marcos.

---

## Licença

Este projeto é privado e destinado exclusivamente ao site profissional da advogada Monique Ranauro. Todos os direitos reservados.
