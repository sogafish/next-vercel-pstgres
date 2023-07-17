import { NextResponse } from 'next/server'
import { prismaClient } from '../lib/prisma';

export const GET = async (req: Request) => {
  const data = await prismaClient.item.findMany();

  return NextResponse.json({ status: 200, data});
}
