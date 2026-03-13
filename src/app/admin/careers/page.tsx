import { useEffect, useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';

type Application = {
  id: string;
  jobSlug: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  createdAt: string;
};

export default function AdminCareersPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/careers')
      .then((res) => res.json())
      .then((data) => setApps(data.applications ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader title="Job Applications" description="View candidate submissions." />

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white p-6 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Position</th>
                <th className="py-2">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app.id} className="border-b last:border-b-0 hover:bg-slate-50">
                  <td className="py-2">{app.name}</td>
                  <td className="py-2">{app.email}</td>
                  <td className="py-2">{app.jobSlug}</td>
                  <td className="py-2">{new Date(app.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
