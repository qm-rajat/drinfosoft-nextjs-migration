import { useEffect, useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader title="Leads" description="View and manage incoming leads." />

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white p-6 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Status</th>
                <th className="py-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b last:border-b-0 hover:bg-slate-50">
                  <td className="py-2">{lead.name}</td>
                  <td className="py-2">{lead.email}</td>
                  <td className="py-2">{lead.phone}</td>
                  <td className="py-2">{lead.status}</td>
                  <td className="py-2">{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
