import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export async function POST(request: NextRequest) {
  const ratelimitUrl = process.env.UPSTASH_REDIS_REST_URL;
  const ratelimitToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (ratelimitUrl && ratelimitToken) {
    const ratelimit = new Ratelimit({
      redis: new Redis({ url: ratelimitUrl, token: ratelimitToken }),
      limiter: Ratelimit.slidingWindow(5, "15 m"),
      analytics: true,
    });

    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      request.headers.get("x-real-ip") ??
      (forwarded ? forwarded.split(",").at(-1)?.trim() : undefined) ??
      "anonymous";

    const { success } = await ratelimit.limit(`admin_login:${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde alguns minutos." },
        { status: 429 }
      );
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
  }

  const { password } = body as { password?: string };
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  const passwordBuffer = Buffer.from(password);
  const adminBuffer = Buffer.from(adminPassword);
  const passwordMatch =
    passwordBuffer.length === adminBuffer.length &&
    timingSafeEqual(passwordBuffer, adminBuffer);

  if (!passwordMatch) {
    return NextResponse.json(
      { error: "Senha incorreta." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return response;
}
