import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/lib/session';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  if (!session?.user?.email) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-lg font-semibold">Admin Dashboard</div>
          <div className="text-sm text-slate-600">Signed in as {session.user.email}</div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
