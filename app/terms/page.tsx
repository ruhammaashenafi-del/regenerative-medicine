import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Orthopedic & Spine Institute website.",
};

export default function TermsPage() {
  return (
    <section className="bg-canvas">
      <div className="container-wide pt-32 pb-20 md:pt-40 md:pb-28 max-w-2xl">
        <p className="eyebrow mb-4">Terms of Service</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-heading">
          This page is a placeholder.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Formal terms of service are being drafted with the practice&apos;s
          counsel and will replace this page before launch. One thing worth
          stating plainly in the meantime: nothing on this site is medical
          advice, and using it — including submitting the contact form —
          does not create a doctor-patient relationship. That begins with an
          actual consultation.
        </p>
        <p className="mt-4 text-sm text-ink/50 leading-relaxed">
          TODO: replace with the practice&apos;s reviewed terms of service
          before this site goes live.
        </p>
      </div>
    </section>
  );
}
