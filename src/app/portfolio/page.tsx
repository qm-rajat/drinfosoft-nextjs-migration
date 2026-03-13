import PageHeader from '@/components/ui/PageHeader';

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Portfolio"
        description="Featured projects and success stories showcasing our work." 
      />

      <section className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Project Title {idx + 1}</h2>
            <p className="mt-2 text-slate-600">
              A short description of the project, the problem solved, and the
              results achieved.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
