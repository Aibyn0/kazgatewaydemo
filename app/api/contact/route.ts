import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  // mock: log to server console
  console.log("contact payload", payload);
  return NextResponse.json({ ok: true });
}


