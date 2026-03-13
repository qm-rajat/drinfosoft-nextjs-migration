export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl border bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-bold">DR Infosoft</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Modern corporate website template built with Next.js, Tailwind CSS,
          Prisma, and Sanity CMS. This project includes marketing pages, blog
          system, lead capture CRM, admin dashboard, and more.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Marketing Pages" href="/about">
          Home, About, Services, Portfolio, Blog, Careers, Contact, Enquiry
        </Card>
        <Card title="Blog System" href="/blog">
          List and detail pages with SEO metadata. Content comes from Sanity.
        </Card>
        <Card title="Lead CRM" href="/enquiry">
          Capture leads in the database, manage status, notes, and exports.
        </Card>
        <Card title="Admin Dashboard" href="/admin">
          Role-based admin panel with lead management, subscribers, and more.
        </Card>
      </section>
    </div>
  );
}

function Card({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:border-blue-500 hover:bg-blue-50"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
    </a>
  );
}
