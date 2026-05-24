# CLAUDE.md

Instruções persistentes para o Claude Code neste projeto.
Leia este arquivo antes de qualquer implementação.

---

## 1. Identidade do projeto

- **Projeto:** site-monique-ranauro
- **Cliente:** Monique Ranauro — advogada criminalista
- **Site:** moniqueranauro.com.br
- **Stack:** Next.js 16 · React · TypeScript · Tailwind CSS v4
- **Deploy:** Vercel
- **Repositório:** github.com/MarcosRanauro/site-monique-ranauro

---

## 2. Comportamento esperado

- Leia sempre o README.md e o CONTEXT.md antes de qualquer alteração.
- Confirme a branch antes de implementar. Se não estiver na branch correta, pare e avise.
- Não altere arquivos fora do escopo da tarefa.
- Não crie funcionalidades extras sem solicitação.
- Não invente textos, dados de contato ou informações da cliente.
- Não remova nem altere conteúdo existente sem instrução explícita.
- Se uma decisão for ambígua, pergunte antes de implementar.

---

## 3. Padrões de código

- TypeScript estrito — sem any implícito, props sempre tipadas.
- Componentes de seção são Server Components por padrão.
- Usar "use client" apenas quando houver estado ou interatividade.
- Imports sempre com alias @/.
- Exportação default em componentes, named em constantes e utilitários.
- Funções puras fora do escopo do componente.
- Classes Tailwind condicionais com cn() (clsx).

---

## 4. Padrões de acessibilidade

- Hierarquia de headings: h1 → h2 → h3. Nunca pular níveis.
- Elementos semânticos corretos: section, nav, main, footer, ul, li.
- Conteúdo decorativo sempre com aria-hidden="true".
- Listas de itens sempre com <ul> + <li>, nunca div + div.
- Botões interativos com aria-label ou texto visível descritivo.
- Formulários com noValidate quando houver validação JS customizada.
- Regiões de acordeão com aria-expanded, aria-controls e role="region".
- Mensagens de erro e sucesso com role="alert".

---

## 5. Identidade visual — nunca alterar sem instrução

| Token | Valor | Uso |
|---|---|---|
| --background | #0b0b0b | Fundo base |
| --background-secondary | #0f0f0f | Fundo seções alternadas |
| --background-tertiary | #0d0d0d | Fundo seções intermediárias |
| --background-footer | #080808 | Fundo do rodapé |
| --foreground | #f5f1ea | Texto principal |
| --accent | #b08d57 | Dourado — cor de destaque |
| --font-heading | Playfair Display | Títulos |
| --font-sans | Inter | Corpo de texto |

---

## 6. Regras de conteúdo — OAB Provimento 205/2021

- Nunca prometer resultados, mesmo em textos de exemplo.
- Nunca usar superlativos como "o melhor", "o maior", "garantido".
- Nunca comparar com outros advogados ou escritórios.
- Linguagem sempre técnica, sóbria e informativa.
- Aviso ético obrigatório no formulário de contato.

---

## 7. Arquivos de configuração centralizada

| Arquivo | Conteúdo |
|---|---|
| src/config/contact.ts | WHATSAPP_URL |
| src/config/site.ts | SITE_URL |

Nunca hardcodar a URL do WhatsApp ou o domínio do site fora desses arquivos.

---

## 8. Componentes reutilizáveis

| Componente | Uso |
|---|---|
| src/components/ui/SectionBadge.tsx | Eyebrow badge de seção |
| src/components/ui/WhatsAppButton.tsx | Botão flutuante WhatsApp |

---

## 9. Fluxo de trabalho

1. Leia README.md e CONTEXT.md.
2. Confirme a branch.
3. Implemente apenas o escopo solicitado.
4. Rode npm run lint ao final.
5. Liste arquivos criados e alterados.
6. Atualize o CONTEXT.md com o que foi feito.

---

## 10. Pendências conhecidas

- Foto profissional da cliente — Hero e About ainda sem imagem real.
- Endereço do escritório — Footer e Contact com placeholder.
- Rate limiting na API de contato (/api/contact) — requer Upstash Redis.
- Variáveis CONTACT_EMAIL_FROM e CONTACT_EMAIL_TO — opcionais na Vercel,
  fallback já configurado no código.
