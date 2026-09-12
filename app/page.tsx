import Link from "next/link";

const PRINCIPLES = [
  {
    title: "Who it's for",
    body: "People we already know, mostly. Patients looking for relief, not a trend.",
  },
  {
    title: "How we offer it",
    body: "Everything, from day one. No slow rollout, no upsell.",
  },
  {
    title: "How we talk about it",
    body: "Plainly. If science doesn't back a claim, we won't make it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-deep-teal text-ivory">
        <div className="container-wide py-20 md:py-28">
          <p className="eyebrow mb-5">Regenerative Medicine</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            A new option, from a team you already trust.
          </h1>
          <p className="mt-6 text-lg text-ivory/85 max-w-xl leading-relaxed">
            We&apos;re bringing exosome and placental matrix therapy into the
            care we&apos;ve always provided — no hype, no pressure, just an
            honest conversation about whether it&apos;s right for you.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/what-we-offer" className="btn-primary">
              Learn More
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-16 md:py-20 max-w-3xl">
          <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
            For years, patients have trusted us with their orthopedic and pain
            care. Regenerative medicine is simply the next tool in that same
            relationship — something we looked into carefully before ever
            offering it, and something we&apos;ll only recommend if it
            actually makes sense for you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide py-16 md:py-20">
          <p className="eyebrow mb-3">Our Approach</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-deep-teal max-w-xl">
            Three principles behind everything we offer.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line p-6 bg-ivory-soft">
                <h3 className="font-display text-lg font-semibold text-deep-teal">{p.title}</h3>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <Link
            href="/our-approach"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-[#ab5a41] transition-colors"
          >
            Read our full approach &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
