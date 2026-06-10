import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const SESSION_KEY_PREFIX = "admin:session:";
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function denyAccess(request: NextRequest, pathname: string): NextResponse {
  if (pathname.startsWith("/acesso/painel")) {
    return NextResponse.redirect(new URL("/acesso", request.url));
  }

  return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
}

async function isSessionValid(token: string | undefined): Promise<boolean> {
  if (!token || !UUID_REGEX.test(token)) {
    return false;
  }

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return false;
  }

  const redis = new Redis({ url: redisUrl, token: redisToken });

  try {
    const session = await redis.get(`${SESSION_KEY_PREFIX}${token}`);
    return session !== null;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login endpoint is always public
  if (pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;
  const isAuthenticated = await isSessionValid(token);

  if (!isAuthenticated) {
    return denyAccess(request, pathname);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/acesso/painel/:path*", "/api/admin/:path*"],
};
