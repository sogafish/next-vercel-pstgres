import { NextResponse } from 'next/server'

export async function GET() {
  const data = { ok: true };

  return NextResponse.json({ status: 200, data })
}
