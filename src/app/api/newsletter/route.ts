import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerAuthSession } from '@/lib/session';

export async function GET() {
  const session = await getServerAuthSession();
  if (!session?.user?.role) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const subscribers = await db.newsletterSubscriber.findMany({ orderBy: { subscribedAt: 'desc' } });
  return NextResponse.json({ subscribers });
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email },
      update: { isActive: true },
      create: { email },
    });

    return NextResponse.json({ success: true, subscriber });
  } catch (error) {
    console.error('Newsletter API error', error);
    return NextResponse.json({ success: false, error: 'Unable to subscribe' }, { status: 500 });
  }
}
