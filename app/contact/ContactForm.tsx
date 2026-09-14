"use client";

import { useTransition, useState } from "react";
import { sendConsultation } from "./actions";

const INTERESTS = [
  { value: "exosome", label: "Exosome Therapy" },
  { value: "placental-matrix", label: "Placental Matrix" },
  { value: "unsure", label: "Not sure yet" },
];

const CONTACT_METHODS = [
  { value: "either", label: "Either" },
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
];

const CHIP_SELECTED =
  "peer-checked:bg-clay peer-checked:border-clay peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--clay)]";

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
      <div className="flex flex-col justify-center min-h-[320px]">
        <p className="eyebrow mb-3">Received</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-heading">
          Thank you — we&apos;ll be in touch shortly.
        </h2>
        <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
          A member of our team will reach out to set up a conversation. No
          pressure, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-7">
      <fieldset>
        <legend className="field-label">What you&apos;re interested in</legend>
        <div className="flex flex-wrap gap-2 mt-1">
          {INTERESTS.map((option, i) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="interest"
                value={option.value}
                defaultChecked={i === 0}
                className="sr-only peer"
              />
              <span className={`chip ${CHIP_SELECTED}`}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="field-label">Preferred contact method</legend>
        <div className="flex flex-wrap gap-2 mt-1">
          {CONTACT_METHODS.map((option, i) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={option.value}
                defaultChecked={i === 0}
                className="sr-only peer"
              />
              <span className={`chip ${CHIP_SELECTED}`}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Full name<span className="text-clay">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field-underline" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email<span className="text-clay">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field-underline" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="field-label">
          Phone <span className="text-ink/45 font-normal">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className="field-underline" />
      </div>

      <div>
        <label htmlFor="reason" className="field-label">
          What brings you in?<span className="text-clay">*</span>
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          rows={3}
          className="field-underline resize-y"
          placeholder="A sentence or two is plenty."
        />
      </div>

      {error && <p className="text-sm text-clay">{error}</p>}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full justify-center disabled:opacity-60"
        >
          {pending ? "Sending…" : "Submit inquiry"}
        </button>
        <p className="mt-3 text-xs text-ink/50 text-center">
          No medical information needed — this is a request for a conversation,
          not an intake form.
        </p>
      </div>
    </form>
  );
}
