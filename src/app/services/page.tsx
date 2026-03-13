import PageHeader from '@/components/ui/PageHeader';

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Our Services"
        description="A suite of digital solutions to help businesses grow online."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {[
          { title: 'Web Development', description: 'Custom web applications built with Next.js and TypeScript.' },
          { title: 'SEO & Content', description: 'Programmatic SEO, content strategy, and technical optimization.' },
          { title: 'Lead Generation', description: 'CRM workflows, landing pages, and conversion tracking.' },
          { title: 'AI Automation', description: 'Chatbots, content generation, and personalization using AI.' },
        ].map((service) => (
          <div key={service.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
