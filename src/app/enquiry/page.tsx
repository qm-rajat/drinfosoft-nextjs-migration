'use client';

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';

export default function EnquiryPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      service: form.service.value,
      message: form.message.value,
      source: 'enquiry_page',
      sourcePage: '/enquiry',
    };

    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Enquiry"
        description="Send us an enquiry and our team will reach out to you." 
      />

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-xl border bg-white p-8 shadow-sm md:grid-cols-2"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input name="name" required className="rounded-md border border-slate-300 px-3 py-2" />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            name="phone"
            type="tel"
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Company</span>
          <input name="company" className="rounded-md border border-slate-300 px-3 py-2" />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Service interested</span>
          <input name="service" className="rounded-md border border-slate-300 px-3 py-2" />
        </label>

        <label className="col-span-full flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            name="message"
            rows={5}
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="col-span-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
        </button>

        {status === 'success' ? (
          <p className="col-span-full text-sm text-green-700">Your enquiry has been submitted.</p>
        ) : null}
        {status === 'error' ? (
          <p className="col-span-full text-sm text-red-700">Unable to submit. Please try again.</p>
        ) : null}
      </form>
    </div>
  );
}
