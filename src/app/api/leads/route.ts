import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerAuthSession } from '@/lib/session';

export async function GET(req: Request) {
  const session = await getServerAuthSession();
  if (!session?.user?.role) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const status = url.searchParams.get('status');

  const where = status ? { status } : {};

  const leads = await db.lead.findMany({
    where,
    include: { notes: { include: { user: true } }, assignedTo: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ leads });
}

export async function PATCH(req: Request) {
  const session = await getServerAuthSession();
  if (!session?.user?.role) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { id, status, assignedToId, note } = body;

  if (!id) {
    return NextResponse.json({ error: 'Missing lead id' }, { status: 400 });
  }

  const data: Record<string, unknown> = {};
  if (status) data.status = status;
  if (assignedToId) data.assignedToId = assignedToId;

  const updated = await db.lead.update({
    where: { id },
    data,
  });

  if (note) {
    await db.leadNote.create({
      data: {
        leadId: id,
        note,
        userId: session.user.id,
      },
    });
  }

  return NextResponse.json({ lead: updated });
}
