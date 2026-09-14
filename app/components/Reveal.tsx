"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* Fade-and-rise on scroll into view. Uses `whileInView` directly — framer
 * motion's own built-in mechanism for exactly this — rather than a
 * hand-wired `useInView` + `useEffect`. An earlier component on this page
 * (TextReveal) built that manual version and it broke in a way that took a
 * long time to track down: React re-runs effects extra times in
 * development (Strict Mode), and a homemade "has this run before" guard
 * doesn't survive that reliably. `whileInView` has no such guard to get
 * wrong — the library owns the viewport check.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  scale = 1,
  blur = 8,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  /* Starting scale before the reveal settles at 1 — a little "pop" for
     cards/tiles; leave at the default 1 (no scale motion) for plain text
     blocks, where it reads as unwanted jitter rather than emphasis. */
  scale?: number;
  /* Starting blur (px) before it settles in focus — the bit that makes the
     reveal feel expensive rather than just a fade. Set to 0 for anything
     containing small text, where a blurred-in transition briefly renders
     illegibly and reads as a glitch rather than polish. */
  blur?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
