-- Tabela de visitantes únicos
CREATE TABLE public.page_views (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_hash text NOT NULL,
  visited_at date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(visitor_hash, visited_at)
);

-- Índice para contagem rápida
CREATE INDEX idx_page_views_visited_at ON public.page_views(visited_at);

-- RLS habilitado
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Apenas service role pode ler e escrever (via API route server-side)
-- Nenhuma policy pública — acesso apenas via SUPABASE_SERVICE_ROLE_KEY
