import { Resend } from "resend";
import { NextResponse } from "next/server";

const NAME_MAX = 100;
const MESSAGE_MAX = 2000;
const PHONE_REGEX = /^\d{10,11}$/;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
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

  const { name, phone, message } = body as {
    name?: string;
    phone?: string;
    message?: string;
  };

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
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

  try {
    await resend.emails.send({
      from:
        process.env.CONTACT_EMAIL_FROM ??
        "Site Monique Ranauro <site@moniqueranauro.com.br>",
      to:
        process.env.CONTACT_EMAIL_TO ?? "moniqueranauro@gmail.com",
      subject: `Nova mensagem pelo site — ${name.trim()}`,
      text: `Nome: ${name.trim()}\nTelefone: ${phone.trim()}\nMensagem: ${message.trim()}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
