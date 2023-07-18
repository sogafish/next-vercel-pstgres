import { NextResponse } from 'next/server'
import { prismaClient } from '../lib/prisma';
import { NextApiRequest } from 'next';

export const GET = async (req: Request) => {
  const data = await prismaClient.item.findMany();

  return NextResponse.json({ status: 200, data});
}

export const POST = async (req: Request) => {
  const { title, description } = await req.json();

  try {
    const data = await prismaClient.item.create({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      data: {
        title,
        description,
      },
    });
    return NextResponse.json({ status: 200, data });
  } catch (e) {
    console.error(e);
  }
}
