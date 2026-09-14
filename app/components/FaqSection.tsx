"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Faq } from "../lib/faqs";
import { FAQ_INTRO } from "../lib/faqs";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "right" ? <path d="M5 12h13M13 6l6 6-6 6" /> : <path d="M19 12H6M11 6l-6 6 6 6" />}
    </svg>
  );
}

export default function FaqSection({ items }: { items: Faq[] }) {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const prevActive = useRef(active);

  const step = (delta: number) =>
    setActive((current) => (current + delta + items.length) % items.length);

  /* The row is wider than the viewport once there are this many questions, so
     bring the open card into view. `inline: nearest` scrolls the row the
     minimum needed horizontally. `block: nearest` was meant to leave the
     page's vertical scroll alone — and does, but only once the section is
     already near the viewport. On mount, before the visitor has scrolled
     anywhere near this section, "nearest" for the vertical axis is the full
     distance to it: this effect was smooth-scrolling the entire homepage
     down to the FAQ section the instant it rendered.
     Only scroll when `active` has actually changed — not on a "this is the
     first run" flag, which React's Strict Mode defeats: development
     double-invokes every effect on mount, and a ref-based counter persists
     across that replay, so a "skip only the first call" guard skips the
     first of the two replays and then fires for real on the second — a bug
     that only ever showed up in dev, never in a production build. Comparing
     the actual value instead is invariant to how many times an unchanged
     `active` gets replayed. */
  useEffect(() => {
    if (prevActive.current === active) return;
    prevActive.current = active;
    cardRefs.current[active]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [active, reduced]);

  return (
    <section className="bg-canvas border-t border-line">
      <div className="container-wide py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-heading tracking-[-0.02em] leading-[1.08]">
            Frequently
            <br />
            Asked <span className="text-clay">Questions</span>
          </h2>

          <div className="md:text-right md:max-w-xs">
            <p className="text-sm text-ink/60 leading-relaxed">{FAQ_INTRO}</p>
            <div className="mt-5 flex gap-3 md:justify-end">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous question"
                className="h-10 w-10 rounded-full border border-line text-ink/70 hover:text-ink hover:border-ink/30 transition-colors inline-flex items-center justify-center"
              >
                <Arrow dir="left" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next question"
                className="h-10 w-10 rounded-full bg-deep-teal text-ivory hover:bg-[#2a5148] transition-colors inline-flex items-center justify-center"
              >
                <Arrow dir="right" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanding row on desktop; a plain stacked accordion on phones,
            where animating width would leave unreadable slivers. */}
        <div className="mt-12 flex flex-col md:flex-row gap-3 md:gap-4 md:items-stretch md:overflow-x-auto no-scrollbar md:pb-1">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.q}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={`group text-left rounded-[1.4rem] p-6 md:p-7 w-full shrink-0 overflow-hidden md:min-h-[290px] flex flex-col transition-[width,background-color,color] duration-500 ease-out ${
                  isActive
                    ? "bg-deep-teal md:w-[360px]"
                    : "bg-muted hover:bg-sage-tint md:w-[136px]"
                }`}
              >
                <p
                  className={`font-display leading-snug transition-colors duration-500 ${
                    isActive
                      ? "text-ivory text-lg md:text-xl"
                      : "text-ink/70 text-base"
                  }`}
                >
                  {item.q}
                </p>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-ivory/75">
                      {item.a}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
