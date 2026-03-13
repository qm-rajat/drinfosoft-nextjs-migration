import { useEffect, useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';

type Subscriber = {
  id: string;
  email: string;
  subscribedAt: string;
};

export default function AdminNewsletterPage() {
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/newsletter')
      .then((res) => res.json())
      .then((data) => setSubs(data.subscribers ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader title="Newsletter Subscribers" description="View and export subscriber list." />

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white p-6 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b">
              <tr>
                <th className="py-2">Email</th>
                <th className="py-2">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {subs.map((sub) => (
                <tr key={sub.id} className="border-b last:border-b-0 hover:bg-slate-50">
                  <td className="py-2">{sub.email}</td>
                  <td className="py-2">{new Date(sub.subscribedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
