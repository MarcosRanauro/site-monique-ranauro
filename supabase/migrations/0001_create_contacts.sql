-- Migration retroativa: criação da tabela contacts e políticas RLS
-- Projeto: site-monique-ranauro (joejrgoanvjpouexmrig) — sa-east-1
-- Originalmente aplicada via MCP em 2026-05; versionada no Git em 2026-06-09

-- Tabela de contatos recebidos pelo formulário público (/api/contact)
CREATE TABLE public.contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Habilita Row Level Security: todas as operações passam por políticas
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Permite INSERT via anon key (chamada da API route com validação server-side)
-- A política inicial é permissiva; restrições de tamanho são adicionadas em 0002
CREATE POLICY "allow_insert_contacts"
  ON public.contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Leitura restrita a usuários autenticados via Supabase Auth
-- O painel admin usa SUPABASE_SERVICE_ROLE_KEY server-side (bypassa RLS)
CREATE POLICY "allow_select_authenticated"
  ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true);
