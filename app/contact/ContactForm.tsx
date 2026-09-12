"use client";

import { useTransition, useState } from "react";
import { sendConsultation } from "./actions";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await sendConsultation(formData);
      if (result.ok) setSent(true);
      else setError(result.error);
    });
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white border border-line p-8 md:p-10">
        <p className="eyebrow mb-3">Received</p>
        <h3 className="font-display text-2xl font-semibold text-deep-teal">
          Thank you — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-4 text-sm text-ink/75 leading-relaxed">
          A member of our team will reach out to set up a conversation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white border border-line p-6 sm:p-8 grid gap-5"
    >
      <div>
        <label htmlFor="name" className="field-label">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" className="field-input" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="field-label">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field-input" />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field-input" />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="field-label">Reason for interest</label>
        <textarea
          id="reason"
          name="reason"
          required
          className="field-textarea"
          style={{ minHeight: "90px" }}
          placeholder="What brings you in?"
        />
      </div>

      <div>
        <label htmlFor="contactMethod" className="field-label">Preferred contact method</label>
        <select id="contactMethod" name="contactMethod" defaultValue="either" className="field-select">
          <option value="either">Either</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
      </div>

      {error && <p className="text-sm text-clay">{error}</p>}

      <button type="submit" disabled={pending} className="btn-primary justify-center disabled:opacity-60">
        {pending ? "Sending…" : "Request a Consultation"}
      </button>
    </form>
  );
}
