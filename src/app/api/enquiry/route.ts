import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await db.lead.create({
      data: {
        name: body.name ?? '',
        email: body.email ?? '',
        phone: body.phone ?? '',
        company: body.company ?? null,
        service: body.service ?? null,
        serviceInterested: body.serviceInterested ?? null,
        message: body.message ?? '',
        source: body.source ?? 'enquiry_form',
        sourcePage: body.sourcePage ?? '',
        status: 'NEW',
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Enquiry API error', error);
    return NextResponse.json({ success: false, error: 'Unable to save enquiry' }, { status: 500 });
  }
}
