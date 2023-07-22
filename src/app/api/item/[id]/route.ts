import { NextResponse } from 'next/server'
import { prismaClient } from '../../lib/prisma';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  // const { searchParams } = new URL(req.url);
  return NextResponse.json({ status: 200, data: params });
}

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  // const { searchParams } = new URL(req.url);
  return NextResponse.json({ status: 200, data: params });
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const data = await prismaClient.item.delete({
      select: {
        id: true,
      },
      where: {
        id: parseInt(params.id, 10),
      },
    });
    return NextResponse.json({ status: 200, data });
  } catch (e) {
    console.error(e);
  }
}
