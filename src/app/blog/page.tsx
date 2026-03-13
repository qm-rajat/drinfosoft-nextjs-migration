import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';

export default function BlogPage() {
  const posts = [
    { slug: 'welcome', title: 'Welcome to the Blog', excerpt: 'A short intro to our new blog system.' },
    { slug: 'seo-tips', title: 'SEO Tips for 2026', excerpt: 'Practical advice to get more organic traffic.' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Blog"
        description="Latest articles on marketing, technology, and digital growth."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
