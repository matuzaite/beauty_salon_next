export const runtime = "nodejs";

import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM specialists", (err, results) => {
      if (err) return reject(NextResponse.json({ error: err.message }, { status: 500 }));

      resolve(NextResponse.json(results));
    });
  });
}
