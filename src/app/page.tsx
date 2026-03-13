'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block text-yellow-300">DR Infosoft</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Leading digital agency specializing in web development, SEO, and
            growth solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquiry"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive online.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Web Development"
            description="Custom websites and applications built with modern technologies."
            icon="💻"
          />
          <ServiceCard
            title="SEO & Marketing"
            description="Boost your online visibility and drive targeted traffic."
            icon="📈"
          />
          <ServiceCard
            title="CRM Solutions"
            description="Streamline your customer relationships with powerful tools."
            icon="👥"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="200+" label="Happy Clients" />
            <StatCard number="10+" label="Years Experience" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates, tips, and
            industry insights.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and see how we can help
            your business grow.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-3xl md:text-4xl mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
}

function NewsletterSignup() {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [email, setEmail] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition text-base"
      >
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 text-sm mt-2 sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
          Successfully subscribed!
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2 sm:absolute sm:top-full sm:left-1/2 sm:transform sm:-translate-x-1/2">
          Failed to subscribe. Try again.
        </p>
      )}
    </form>
  );
}
