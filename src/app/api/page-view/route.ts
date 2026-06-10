import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const ua = req.headers.get("user-agent") ?? "unknown";
    const date = new Date().toISOString().slice(0, 10);

    const hash = createHash("sha256")
      .update(`${ip}|${ua}|${date}`)
      .digest("hex");

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } },
    );

    await supabase
      .from("page_views")
      .upsert(
        { visitor_hash: hash, visited_at: date },
        { onConflict: "visitor_hash,visited_at", ignoreDuplicates: true },
      );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
