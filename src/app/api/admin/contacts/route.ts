import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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
