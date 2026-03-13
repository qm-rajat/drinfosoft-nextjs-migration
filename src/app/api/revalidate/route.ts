import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Placeholder for ISR revalidation via webhook.
  return NextResponse.json({ success: true });
}
