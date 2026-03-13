import Link from 'next/link';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold">
            DR Infosoft
          </Link>
          <nav className="hidden gap-4 text-sm font-medium md:flex">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <Link href="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-blue-600">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/enquiry"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Enquiry
            </Link>
            <Link
              href="/admin"
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>

      <footer className="border-t bg-white/90 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} DR Infosoft. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/privacy-policy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-blue-600">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="hover:text-blue-600">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
