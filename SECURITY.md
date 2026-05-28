# Segurança do Projeto

Este documento registra cuidados de segurança, variáveis sensíveis e regras importantes para desenvolvimento, auditoria e deploy deste projeto.

---

## Variáveis de Ambiente

As variáveis reais do projeto devem ficar somente em arquivos locais ou no painel do provedor de deploy.

Arquivos como `.env.local` não devem ser versionados no Git.

O arquivo `.env.example` deve conter apenas nomes de variáveis e valores fictícios.

Exemplo:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Nunca incluir chaves reais no `.env.example`.

---

## Supabase

Este projeto pode usar Supabase para autenticação, banco de dados, storage ou APIs internas.

Cuidados obrigatórios:

* não expor `SUPABASE_SERVICE_ROLE_KEY` no frontend;
* não criar variável `NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY`;
* usar `NEXT_PUBLIC_SUPABASE_ANON_KEY` somente quando for seguro para o client;
* validar usuário autenticado em rotas privadas;
* garantir que queries sensíveis filtrem dados pelo usuário correto;
* revisar políticas de RLS quando houver tabelas privadas;
* evitar que um usuário acesse dados de outro usuário.

---

## Service Role Key

A `SUPABASE_SERVICE_ROLE_KEY`, se existir, só pode ser usada em ambiente seguro de servidor.

Ela não deve aparecer em:

* componentes React client-side;
* arquivos com `"use client"`;
* código enviado ao navegador;
* logs;
* respostas de API;
* arquivos públicos;
* variáveis com prefixo `NEXT_PUBLIC_`.

---

## Logs

Evitar logs com dados sensíveis, como:

* tokens;
* senhas;
* chaves de API;
* dados pessoais;
* payloads completos de autenticação;
* URLs assinadas;
* informações internas do banco.

Antes do deploy, procurar e remover `console.log` desnecessários.

---

## Autenticação e Autorização

Rotas, server actions e endpoints que acessam dados privados devem:

* validar se existe usuário autenticado;
* validar se o usuário tem permissão para acessar o recurso;
* retornar erro seguro quando o acesso for negado;
* nunca confiar apenas em dados enviados pelo frontend.

---

## Uploads e Arquivos

Se o projeto usar upload de imagens ou arquivos:

* validar tipo do arquivo;
* validar tamanho máximo;
* evitar nomes previsíveis quando necessário;
* garantir que buckets privados não fiquem públicos sem intenção;
* usar URLs assinadas quando o arquivo não deve ser público.

---

## Checklist Antes do Deploy

Antes de publicar o projeto, verificar:

* `npm run lint`;
* `npx tsc --noEmit` ou `npm run typecheck`;
* `npm run build`;
* variáveis de ambiente configuradas no ambiente de produção;
* `.env.local` fora do Git;
* ausência de chaves sensíveis no frontend;
* ausência de `NEXT_PUBLIC_` em variáveis secretas;
* ausência de logs sensíveis;
* autenticação funcionando;
* regras de acesso funcionando;
* Supabase configurado corretamente;
* produção testada após deploy.

---

## Auditoria

Sempre que o projeto entrar em fase de fechamento, rodar:

```bash
npm run audit:project
```

Depois, enviar o relatório mais recente da pasta `reports/` para análise no Claude Code.

---

## Status

Este documento deve ser atualizado sempre que houver mudança relevante em:

* autenticação;
* variáveis de ambiente;
* Supabase;
* banco de dados;
* storage;
* rotas privadas;
* regras de segurança;
* deploy.
