import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const NAME_MAX = 100;
const MESSAGE_MAX = 2000;
const PHONE_REGEX = /^\d{10,11}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  // Rate limiting — opcional, ativo apenas se as variáveis estiverem configuradas
  const ratelimitUrl = process.env.UPSTASH_REDIS_REST_URL;
  const ratelimitToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (ratelimitUrl && ratelimitToken) {
    const ratelimit = new Ratelimit({
      redis: new Redis({ url: ratelimitUrl, token: ratelimitToken }),
      limiter: Ratelimit.slidingWindow(3, "10 m"),
      analytics: true,
    });

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde alguns minutos." },
        { status: 429 }
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Serviço indisponível." },
      { status: 503 }
    );
  }
  const resend = new Resend(apiKey);
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Formato inválido." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Formato inválido." },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    name.trim().length > NAME_MAX ||
    message.trim().length > MESSAGE_MAX ||
    !PHONE_REGEX.test(phoneDigits)
  ) {
    return NextResponse.json(
      { error: "Dados inválidos." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "E-mail inválido." },
      { status: 400 }
    );
  }

  try {
    console.log("[contact] Tentando enviar email via Resend...");
    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_EMAIL_FROM ??
        "Site Monique Ranauro <site@moniqueranauro.com.br>",
      to:
        process.env.CONTACT_EMAIL_TO ?? "moniqueranauro@gmail.com",
      subject: `Nova mensagem pelo site — ${name.trim()}`,
      text: `Nome: ${name.trim()}\nE-mail: ${email.trim()}\nTelefone: ${phone.trim()}\nMensagem: ${message.trim()}`,
    });
    console.log("[contact] Resend result:", { data, error });
  } catch (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }

  // Salvar no Supabase — opcional, não bloqueia o retorno de sucesso
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      await supabase.from("contacts").insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        created_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error("[contact] Supabase error:", error);
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
