import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });

  const { data, error } = await supabase
    .from("contacts")
    .select("id, name, email, phone, message, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[admin/contacts] Supabase error:", error);
    return NextResponse.json({ error: "Erro ao buscar contatos." }, { status: 500 });
  }

  return NextResponse.json({ contacts: data }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
  }

  const { id } = body as { id?: string };

  if (!id || !UUID_REGEX.test(id)) {
    return NextResponse.json({ error: "ID inválido." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    console.error("[admin/contacts] Supabase delete error:", error);
    return NextResponse.json({ error: "Erro ao deletar contato." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
