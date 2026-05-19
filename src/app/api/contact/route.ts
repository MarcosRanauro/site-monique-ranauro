import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
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

  try {
    await resend.emails.send({
      from: "Site Monique Ranauro <site@moniqueranauro.com.br>",
      to: "moniqueranauro@gmail.com",
      subject: `Nova mensagem pelo site — ${name.trim()}`,
      text: `Nome: ${name.trim()}\nTelefone: ${phone.trim()}\nMensagem: ${message.trim()}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
