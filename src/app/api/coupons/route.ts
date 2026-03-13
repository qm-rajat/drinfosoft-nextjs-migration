import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getServerAuthSession } from '@/lib/session';

export async function GET() {
  // const session = await getServerAuthSession();
  // if (!session?.user?.role) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  // const coupons = await db.coupon.findMany({ orderBy: { createdAt: 'desc' } });
  // return NextResponse.json({ coupons });

  // For demo, return empty array
  return NextResponse.json({ coupons: [] });
}

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json(
        { error: 'Coupon code is required' },
        { status: 400 }
      );
    }

    // Simulate coupon validation
    console.log('Validating coupon:', code);

    // For demo, accept any code starting with 'DR'
    if (code.toUpperCase().startsWith('DR')) {
      return NextResponse.json({
        valid: true,
        coupon: {
          code: code.toUpperCase(),
          discount: 10,
          type: 'percentage',
        },
      });
    } else {
      return NextResponse.json(
        { valid: false, reason: 'Invalid coupon code' },
        { status: 404 }
      );
    }

    // Uncomment when DB is set up:
    // const coupon = await db.coupon.findUnique({ where: { code } });
    // if (!coupon || !coupon.active) {
    //   return NextResponse.json({ valid: false, reason: 'Invalid or inactive coupon' }, { status: 404 });
    // }

    // if (coupon.expiryDate && coupon.expiryDate < new Date()) {
    //   return NextResponse.json({ valid: false, reason: 'Coupon expired' }, { status: 400 });
    // }

    // return NextResponse.json({ valid: true, coupon });
  } catch (error) {
    console.error('Coupon API error', error);
    return NextResponse.json(
      { success: false, error: 'Unable to validate coupon' },
      { status: 500 }
    );
  }
}
