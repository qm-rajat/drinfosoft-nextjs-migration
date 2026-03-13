import PageHeader from '@/components/ui/PageHeader';

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Products"
        description="Readymade products and platforms built for fast deployment and scalability."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Travel CRM</h2>
          <p className="mt-2 text-slate-600">
            A CRM solution tailored for travel agencies, with booking management,
            lead tracking, and automated communication.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Packers CRM</h2>
          <p className="mt-2 text-slate-600">
            Manage enquiries, quotations, and customer follow-ups for logistics
            and packers services.
          </p>
        </div>
      </section>
    </div>
  );
}
