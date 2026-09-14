import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Orthopedic & Spine Institute handles information submitted through this site.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-canvas">
      <div className="container-wide pt-32 pb-20 md:pt-40 md:pb-28 max-w-2xl">
        <p className="eyebrow mb-4">Privacy Policy</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-heading">
          This page is a placeholder.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          A full privacy policy is being drafted with the practice&apos;s
          counsel and will replace this page before launch. In the meantime,
          two things are true of this site as built: the contact form does
          not collect health information — it&apos;s a scheduling request,
          not an intake form — and no information submitted through it is
          sold or shared with third parties for marketing.
        </p>
        <p className="mt-4 text-sm text-ink/50 leading-relaxed">
          TODO: replace with the practice&apos;s reviewed privacy policy
          before this site goes live.
        </p>
      </div>
    </section>
  );
}
