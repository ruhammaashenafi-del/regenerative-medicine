"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Captions describe the process, never an outcome — same guardrail as the
   rest of the site. Photos drop into /public/gallery; until they exist each
   card falls back to the tint below, so a missing file degrades quietly
   instead of rendering a broken image. */
const SLIDES = [
  {
    caption: "A conversation before anything else",
    photo: "/gallery/01.jpg",
    tint: "linear-gradient(150deg,#2d5449 0%,#6b8f73 55%,#a8c2ad 100%)",
  },
  {
    caption: "Questions answered plainly",
    photo: "/gallery/02.jpg",
    tint: "linear-gradient(150deg,#7a3e2a 0%,#c1694f 55%,#e6b49c 100%)",
  },
  {
    caption: "What the research actually shows",
    photo: "/gallery/03.jpg",
    tint: "linear-gradient(150deg,#1f3d36 0%,#3f6b5d 55%,#8fae95 100%)",
  },
  {
    caption: "Care under physician oversight",
    photo: "/gallery/04.jpg",
    tint: "linear-gradient(150deg,#5d3c1c 0%,#b8823e 55%,#f2c579 100%)",
  },
  {
    caption: "Follow-through after your visit",
    photo: "/gallery/05.jpg",
    tint: "linear-gradient(150deg,#324f46 0%,#6b8f73 50%,#cfd9cd 100%)",
  },
];

const DESKTOP_QUERY = "(min-width: 768px)";
function subscribeDesktop(notify: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
}

/* Shortest signed distance around the ring, so slide 0 sits next to slide 4. */
function ringOffset(index: number, active: number, total: number) {
  let delta = index - active;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export default function PracticeCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true,
  );

  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, [reduced, paused]);

  const spread = isDesktop ? 152 : 78;
  const lift = isDesktop ? 22 : 14;
  const cardWidth = isDesktop ? 224 : 152;
  const cardHeight = isDesktop ? 292 : 200;
  const maxVisible = isDesktop ? 2 : 1;

  return (
    <div
      className="mt-14 md:mt-20"
      role="group"
      aria-roledescription="carousel"
      aria-label="Inside the practice"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* `overflow-hidden`: the fanned side cards are `position: absolute`
          with an `x` offset, so they escape this row's own edges entirely —
          nothing else up the tree clips them, which on mobile turned into
          real page-level horizontal scroll rather than a contained peek. */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: cardHeight + lift * 2 + 16 }}
      >
        {SLIDES.map((slide, i) => {
          const offset = ringOffset(i, active, SLIDES.length);
          const distance = Math.abs(offset);
          const hidden = distance > maxVisible;

          return (
            <motion.button
              key={slide.caption}
              type="button"
              aria-label={`Show: ${slide.caption}`}
              aria-hidden={hidden}
              tabIndex={hidden || offset === 0 ? -1 : 0}
              onClick={() => setActive(i)}
              className="absolute rounded-[1.6rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(20,14,8,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--clay)]"
              style={{
                width: cardWidth,
                height: cardHeight,
                cursor: offset === 0 ? "default" : "pointer",
                pointerEvents: hidden ? "none" : "auto",
              }}
              animate={{
                x: offset * spread,
                y: distance * lift,
                rotate: offset * 8,
                scale: 1 - distance * 0.13,
                opacity: hidden ? 0 : distance === 0 ? 1 : distance === 1 ? 0.9 : 0.45,
                zIndex: 30 - distance * 10,
                filter: distance >= 2 ? "blur(2.5px)" : "blur(0px)",
              }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 220, damping: 30 }
              }
            >
              <span
                className="block h-full w-full"
                style={{
                  backgroundImage: `url('${slide.photo}'), ${slide.tint}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm font-semibold text-heading tabular-nums">
          0.0{active + 1}
        </p>
        <p
          className="mt-2 text-lg md:text-xl text-ink/70 max-w-[26ch] mx-auto leading-snug"
          aria-live="polite"
        >
          {SLIDES[active].caption}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.caption}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-5 bg-clay" : "w-2 bg-ink/20 hover:bg-ink/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
