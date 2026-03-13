import PageHeader from '@/components/ui/PageHeader';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="About DR Infosoft"
        description="A modern digital agency specializing in full-stack web solutions and growth-driven marketing." 
      />

      <section className="prose max-w-none">
        <p>
          DR Infosoft is a forward-looking web and digital agency focused on
          building fast, scalable websites and applications that drive results.
        </p>
        <p>
          This project demonstrates a full-stack platform built with Next.js,
          Prisma, and Sanity with a complete admin system, CRM features, and
          SEO-ready architecture.
        </p>
      </section>
    </div>
  );
}
