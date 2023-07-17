import { NextResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const data = {};

  return NextResponse.json({ status: 200, data })
}
