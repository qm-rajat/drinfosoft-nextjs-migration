import Link from 'next/link';
import { getServerAuthSession } from '@/lib/session';

export default async function AdminPage() {
  const session = await getServerAuthSession();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-slate-600">Welcome back, {session?.user?.email}.</p>

      <div className="grid gap-4 md:grid-cols-3">
        <AdminCard href="/admin/leads" title="Leads" />
        <AdminCard href="/admin/newsletter" title="Subscribers" />
        <AdminCard href="/admin/careers" title="Applications" />
        <AdminCard href="/admin/coupons" title="Coupons" />
        <AdminCard href="/admin/settings" title="Settings" />
      </div>
    </div>
  );
}

function AdminCard({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:border-blue-500 hover:bg-blue-50"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
    </Link>
  );
}
