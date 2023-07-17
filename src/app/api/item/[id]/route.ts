import { NextResponse } from 'next/server'

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  // const { searchParams } = new URL(req.url);
  return NextResponse.json({ status: 200, data: params });
}

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  // const { searchParams } = new URL(req.url);
  return NextResponse.json({ status: 200, data: params });
}
