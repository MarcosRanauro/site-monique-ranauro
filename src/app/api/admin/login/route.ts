import { randomUUID, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const SESSION_TTL_SECONDS = 60 * 60 * 8;
const SESSION_KEY_PREFIX = "admin:session:";

export async function POST(request: NextRequest) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (
    process.env.NODE_ENV === "production" &&
    (!redisUrl || !redisToken)
  ) {
    console.error(
      "[admin/login] Rate limiting indisponível em produção: UPSTASH_REDIS_REST_URL ou UPSTASH_REDIS_REST_TOKEN ausente."
    );
    return NextResponse.json(
      { error: "Serviço indisponível." },
      { status: 503 }
    );
  }

  if (redisUrl && redisToken) {
    const ratelimit = new Ratelimit({
      redis: new Redis({ url: redisUrl, token: redisToken }),
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

  if (!password || typeof password !== "string") {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
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

  if (!redisUrl || !redisToken) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  const token = randomUUID();
  const redis = new Redis({ url: redisUrl, token: redisToken });

  try {
    await redis.set(`${SESSION_KEY_PREFIX}${token}`, "1", {
      ex: SESSION_TTL_SECONDS,
    });
  } catch {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_TTL_SECONDS,
    path: "/",
  });

  return response;
}
