import PageHeader from '@/components/ui/PageHeader';

export default function CareersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Careers"
        description="Join our team. Explore open roles and apply online." 
      />

      <section className="grid gap-6 md:grid-cols-2">
        {[
          { title: 'Frontend Developer', location: 'Remote', type: 'Full-time' },
          { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
        ].map((job) => (
          <div key={job.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{job.location} • {job.type}</p>
            <p className="mt-4 text-slate-600">A great opportunity to join our fast-growing team and make an impact.</p>
            <a
              className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              href="/careers/apply"
            >
              Apply Now
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
