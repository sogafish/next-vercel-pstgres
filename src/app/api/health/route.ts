import { NextResponse } from 'next/server'

export const GET = () => {
  const data = { ok: true };

  return NextResponse.json({ status: 200, data })
}
