-- Migration retroativa: restrições de tamanho na política RLS (SQL M-05)
-- Projeto: site-monique-ranauro (joejrgoanvjpouexmrig) — sa-east-1
-- Documentado em CONTEXT.md seção 71; versionado no Git em 2026-06-09
--
-- Segunda camada de validação no banco. Mesmo que alguém chame o Supabase
-- diretamente com a anon key, inserções fora dos limites são rejeitadas.
-- Limites espelham as constantes em src/app/api/contact/route.ts:
--   NAME_MAX=100, MESSAGE_MAX=2000, PHONE_REGEX, EMAIL_REGEX

ALTER POLICY "allow_insert_contacts"
  ON public.contacts
  WITH CHECK (
    char_length(name) BETWEEN 2 AND 100 AND
    char_length(email) BETWEEN 5 AND 254 AND
    char_length(phone) BETWEEN 8 AND 20 AND
    char_length(message) BETWEEN 10 AND 2000
  );
