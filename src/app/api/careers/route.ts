import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerAuthSession } from '@/lib/session';

export async function GET() {
  // const session = await getServerAuthSession();
  // if (!session?.user?.role) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  // const applications = await db.jobApplication.findMany({
  //   orderBy: { createdAt: 'desc' },
  // });
  // return NextResponse.json({ applications });

  // For demo, return empty array
  return NextResponse.json({ applications: [] });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Simulate saving to DB
    console.log('Job application:', body);

    // Uncomment when DB is set up:
    // const application = await db.jobApplication.create({
    //   data: {
    //     jobSlug: body.jobSlug ?? '',
    //     name: body.name ?? '',
    //     email: body.email ?? '',
    //     phone: body.phone ?? '',
    //     resumeUrl: body.resumeUrl ?? '',
    //     coverLetter: body.coverLetter ?? null,
    //   },
    // });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Careers API error', error);
    return NextResponse.json(
      { success: false, error: 'Unable to submit application' },
      { status: 500 }
    );
  }
}
