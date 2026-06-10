import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const SESSION_KEY_PREFIX = "admin:session:";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;

  if (token) {
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      const redis = new Redis({ url: redisUrl, token: redisToken });
      try {
        await redis.del(`${SESSION_KEY_PREFIX}${token}`);
      } catch {
        // Cookie is still cleared even if Redis deletion fails.
      }
    }
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set("admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
  return response;
}
