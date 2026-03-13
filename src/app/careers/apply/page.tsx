'use client';

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';

export default function CareerApplyPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const data = {
      jobSlug: form.jobSlug.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      resumeUrl: form.resumeUrl.value,
      coverLetter: form.coverLetter.value,
    };

    const res = await fetch('/api/careers', {
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
      <PageHeader title="Apply for a Role" description="Submit your details and we&apos;ll be in touch." />

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-xl border bg-white p-8 shadow-sm md:grid-cols-2"
      >
        <input type="hidden" name="jobSlug" value="frontend-developer" />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Full Name</span>
          <input
            name="name"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            name="phone"
            type="tel"
            required
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Resume URL</span>
          <input
            name="resumeUrl"
            type="url"
            required
            placeholder="https://"
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="col-span-full flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Cover Letter</span>
          <textarea
            name="coverLetter"
            rows={5}
            className="rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="col-span-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Submitting…' : 'Submit Application'}
        </button>

        {status === 'success' ? (
          <p className="col-span-full text-sm text-green-700">Application submitted successfully!</p>
        ) : null}
        {status === 'error' ? (
          <p className="col-span-full text-sm text-red-700">Unable to submit. Please try again.</p>
        ) : null}
      </form>
    </div>
  );
}
