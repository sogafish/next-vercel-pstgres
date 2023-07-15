import { NextResponse } from 'next/server'

export async function GET() {
  const data = {};

  return NextResponse.json({ status: 200, data })
}
