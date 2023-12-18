import { NextRequest, NextResponse } from 'next/server';
import notion from '@/lib/notion';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { url }: { url: string } = await req.json();
  const openId = url.split('/').pop() as string;
  const notionPage = await notion.getPage(openId);
  return NextResponse.json({ page: notionPage });
}
