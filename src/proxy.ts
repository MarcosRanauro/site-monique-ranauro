import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login endpoint is always public
  if (pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin_session");
  const isAuthenticated = session?.value === "authenticated";

  if (!isAuthenticated) {
    if (pathname.startsWith("/acesso/painel")) {
      return NextResponse.redirect(new URL("/acesso", request.url));
    }

    if (pathname.startsWith("/api/admin/")) {
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/acesso/painel/:path*", "/api/admin/:path*"],
};
