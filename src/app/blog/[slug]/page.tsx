import { notFound } from 'next/navigation';
import PageHeader from '@/components/ui/PageHeader';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // TODO: Fetch post from Sanity by slug
  if (!slug) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader title={`Blog: ${slug}`} description="Article coming soon." />
      <section className="prose max-w-none">
        <p>This is a placeholder for the blog post &quot;{slug}&quot;.</p>
      </section>
    </div>
  );
}
