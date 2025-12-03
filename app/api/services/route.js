export const runtime = "nodejs";

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const { rows } = await db.query("SELECT * FROM services");
    return NextResponse.json(rows);
  } catch (err) {
    console.error("/api/services error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
