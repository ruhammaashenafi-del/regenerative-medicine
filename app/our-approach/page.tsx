import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How we think about regenerative medicine — who it's for, what we offer, and why we won't promise more than the evidence supports.",
};

const SECTIONS = [
  {
    heading: "Who We're Serving",
    body: "This isn't about finding new patients. It's about giving the patients we already have another option — especially the ones who've been dealing with pain for years and are hoping there's something short of surgery that actually helps.",
  },
  {
    heading: "How We're Offering It",
    body: "We didn't want to launch with one product and add more later. Exosome therapy and placental matrix therapy are both available from the start, so you and your doctor can talk through what actually fits your situation — not just whatever happens to be available that month.",
  },
  {
    heading: "How We Communicate",
    body: "Regenerative medicine is still a developing field. The research is promising, but it's not settled — so we won't promise outcomes we can't back up. What we can offer is a straight answer, and real stories from real patients instead of glossy claims.",
  },
];

export default function OurApproachPage() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-16 md:py-24">
        <p className="eyebrow mb-4">Our Approach</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-deep-teal max-w-2xl">
          Three principles behind everything we offer.
        </h1>

        <div className="mt-14 flex flex-col gap-12 max-w-3xl">
          {SECTIONS.map((s, i) => (
            <div key={s.heading} className="flex gap-6">
              <span className="font-display text-2xl font-semibold text-sage shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-deep-teal">
                  {s.heading}
                </h2>
                <p className="mt-3 text-base text-ink/80 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
