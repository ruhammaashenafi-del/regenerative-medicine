import Link from "next/link";
import Aurora from "./components/Aurora";
import HashScrollFix from "./components/HashScrollFix";
import IsometricLayers from "./components/IsometricLayers";
import PhysicianCard from "./components/PhysicianCard";
import ServiceCard from "./components/ServiceCard";
import Reveal from "./components/Reveal";
import PracticeCarousel from "./components/PracticeCarousel";
import ParallaxImage from "./components/ParallaxImage";
import { THERAPIES, PHYSICIANS } from "./lib/content";
import FaqSection from "./components/FaqSection";
import { FAQS } from "./lib/faqs";
import TextReveal from "./components/TextReveal";

const PRINCIPLES = [
  {
    title: "Who it's for",
    body: "People we already know, mostly. Patients looking for relief, not a trend.",
    glyph: (
      <>
        <circle cx="8.5" cy="8.5" r="4.1" />
        <circle cx="15.5" cy="8.5" r="4.1" />
        <circle cx="8.5" cy="15.5" r="4.1" />
        <circle cx="15.5" cy="15.5" r="4.1" />
      </>
    ),
  },
  {
    title: "How we offer it",
    body: "Everything, from day one. No slow rollout, no upsell.",
    glyph: (
      <>
        <circle cx="8" cy="8" r="4.4" />
        <circle cx="16" cy="8" r="4.4" />
        <circle cx="12" cy="16" r="4.4" />
      </>
    ),
  },
  {
    title: "How we talk about it",
    body: "Plainly. If science doesn't back a claim, we won't make it.",
    glyph: (
      <>
        <circle cx="12" cy="7" r="3.7" />
        <circle cx="12" cy="17" r="3.7" />
        <circle cx="7" cy="12" r="3.7" />
        <circle cx="17" cy="12" r="3.7" />
        <circle cx="12" cy="12" r="3.1" />
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HashScrollFix />

      {/* 50/50 split: headline + copy grounded on the left, the isometric
          layer graphic on the right — no grid texture, no floating
          center-stage interface nodes. Structure, not an "AI startup" motif. */}
      <section className="relative overflow-hidden bg-canvas">
        <Aurora tone="light" position="top" />

        {/* This section deliberately doesn't use `container-wide` (1180px,
            shared by every other section) — it has its own wider cap so
            widening the hero doesn't widen the whole site. */}
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 relative z-10 pt-28 md:pt-36 pb-3 md:pb-2 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-9 lg:gap-10 xl:gap-[clamp(4rem,43vw-30.75rem,14.4rem)] items-center lg:justify-center">
          {/* `min-w-0`: grid items default to `min-width: auto`, which
              refuses to shrink below the column's content size — without
              this, any wide child (even one that's visually scaled down)
              can force the whole row past the viewport on mobile. */}
          <div className="min-w-0 text-center lg:text-left">
            {/* Two lines exactly: "A new option, from a team" / "you already
                trust." — `lg:whitespace-nowrap` plus the reduced clamp max
                keep each phrase from wrapping again at this column width. */}
            <h1 className="mt-6 font-display font-semibold tracking-[-0.02em] leading-[1.15] text-[clamp(1.8rem,3.2vw,2.85rem)] text-heading lg:whitespace-nowrap">
              A new option, from a team
              <br />
              <span className="text-sage">you already trust.</span>
            </h1>

            <p className="mt-5 text-base text-ink/65 max-w-[46ch] mx-auto lg:mx-0 leading-relaxed">
              We&apos;re bringing exosome and placental matrix therapy into the
              care we&apos;ve always provided — no hype, no pressure, just an
              honest conversation about whether it&apos;s right for you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3.5">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link href="/#what-we-offer" className="btn-secondary">
                What We Offer
              </Link>
            </div>
          </div>

          <IsometricLayers />
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-wide pt-8 md:pt-16 pb-6 md:pb-8 max-w-7xl text-center">
          <TextReveal
            className="text-lg md:text-xl text-heading/80 leading-[1.6] font-display"
            text="For years, patients have trusted us with their orthopedic and pain care. Regenerative medicine is simply the next tool in that same relationship — something we looked into carefully before ever offering it, and something we'll only recommend if it actually makes sense for you."
          />
        </div>
      </section>

      {/* Photo band with scooped edges. The gradient is a fallback for
          browsers/crawlers that never load the image.
          `scroll-mt-28` matches the fixed nav's height + gap, so
          scrollIntoView (HashScrollFix) and native anchor jumps both land
          below it instead of underneath it. */}
      <section id="our-approach" className="relative overflow-hidden scroll-mt-28">
        <ParallaxImage
          src="/our-approach-bg.jpg"
          fallbackGradient="linear-gradient(115deg, #6b421c 0%, #b87a2e 26%, #f2c579 50%, #d99a44 72%, #5d3c1c 100%)"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(22,15,8,0.66) 0%, rgba(22,15,8,0.50) 45%, rgba(31,61,54,0.70) 100%)",
          }}
        />

        {/* Edges curve inward, into the band */}
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-x-0 top-0 w-full h-[70px] md:h-[140px]"
        >
          <path d="M0,0 H1440 V18 C1120,150 320,150 0,18 Z" fill="var(--canvas)" />
        </svg>
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-x-0 bottom-0 w-full h-[70px] md:h-[140px]"
        >
          <path d="M0,140 H1440 V122 C1120,-10 320,-10 0,122 Z" fill="var(--canvas)" />
        </svg>

        <div className="container-wide relative z-10 pt-36 pb-36 md:pt-52 md:pb-52">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Our Approach
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
              Three principles behind everything we offer.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.12} scale={0.96} y={30}>
                <div className="h-full rounded-[1.35rem] border border-white/25 bg-white/10 backdrop-blur-md p-3 flex flex-col">
                  <span className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#241f1a]">
                    {principle.title}
                  </span>
                  <div className="flex-1 flex flex-col items-center justify-between gap-9 px-4 pt-10 pb-7">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                      className="h-11 w-11 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                    >
                      {principle.glyph}
                    </svg>
                    <p className="text-center text-sm leading-relaxed text-white/90">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <section id="what-we-offer" className="bg-canvas scroll-mt-28">
        <div className="container-wide py-20 md:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-3">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-heading tracking-[-0.01em]">
              Two therapies, explained plainly.
            </h2>
            <p className="mt-4 text-ink/65">Choose one to learn more.</p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {THERAPIES.map((therapy, i) => (
              <Reveal key={therapy.title} delay={i * 0.12} scale={0.96} y={30}>
                <ServiceCard {...therapy} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-wide py-20 md:py-28">
          <Reveal className="grid gap-8 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <p className="eyebrow mb-4">Inside the practice</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-heading tracking-[-0.01em] leading-[1.12] max-w-[16ch]">
                Care that starts with a conversation.
              </h2>
            </div>
            <p className="text-ink/65 leading-relaxed md:pt-3">
              Regenerative medicine is new to most of our patients, so we take
              the time to explain it properly — what it is, what the research
              supports today, and where it doesn&apos;t yet. You&apos;ll leave a
              consultation understanding your options, whether or not you decide
              to go ahead.
            </p>
          </Reveal>

          <PracticeCarousel />
        </div>
      </section>

      <section id="physicians" className="bg-canvas scroll-mt-28">
        <div className="container-wide py-20 md:py-28">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-3">Meet Our Physicians</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-heading tracking-[-0.01em]">
              The team behind the program.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {PHYSICIANS.map((physician, i) => (
              <Reveal key={physician.name} delay={i * 0.12} scale={0.96} y={30}>
                <PhysicianCard {...physician} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <Reveal className="container-wide py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-heading tracking-[-0.01em] max-w-2xl mx-auto">
            Curious whether it might help you?
          </h2>
          <p className="mt-4 text-ink/65 max-w-[48ch] mx-auto leading-relaxed">
            The right option depends on your situation — that&apos;s exactly
            what a consultation is for.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <FaqSection items={FAQS.home} />
    </>
  );
}
