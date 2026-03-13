import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const event = await db.analyticsEvent.create({
      data: {
        event: data.event ?? 'unknown',
        page: data.page ?? '',
        sessionId: data.sessionId ?? null,
        leadId: data.leadId ?? null,
        meta: data.meta ?? null,
      },
    });

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Analytics API error', error);
    return NextResponse.json({ success: false, error: 'Unable to record event' }, { status: 500 });
  }
}
