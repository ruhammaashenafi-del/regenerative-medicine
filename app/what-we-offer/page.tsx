import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "What exosome and placental matrix therapy actually are, explained plainly — and what to expect from a consultation.",
};

export default function WhatWeOfferPage() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-16 md:py-24">
        <p className="eyebrow mb-4">What We Offer</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-deep-teal max-w-2xl">
          Two therapies, explained plainly.
        </h1>
        <p className="mt-4 text-lg text-ink/75 max-w-xl">Choose one to learn more.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl">
          <ServiceCard
            accent="sage"
            title="Exosome Therapy"
            teaser="Tiny particles your cells already use to communicate and heal."
            fullCopy="Exosomes are tiny particles that cells naturally release to communicate with each other and support the body's own repair process. We offer exosome therapy by injection. In your consultation, we'll walk you through what the research actually shows right now — including where it's still catching up to the interest around it."
          />
          <ServiceCard
            accent="clay"
            title="Placental Matrix Therapy"
            teaser="Tissue-derived material rich in natural growth factors."
            fullCopy="Placental matrix therapy uses tissue-derived material rich in the same kinds of natural growth factors your body already relies on to heal. It's offered alongside exosome therapy, under the same physician oversight, and the same straightforward conversation about what to expect."
          />
        </div>

        <div className="mt-14 rounded-2xl bg-white border border-line p-8 max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-deep-teal">
            Curious whether one of these fits you?
          </h2>
          <p className="mt-3 text-sm text-ink/75 leading-relaxed">
            The right option depends on your situation — that&apos;s exactly
            what a consultation is for.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
