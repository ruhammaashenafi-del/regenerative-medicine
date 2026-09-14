"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.018 } },
};

const item = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* Word-by-word reveal: each word is masked inside an overflow-hidden span
 * and slides up from underneath it, like a curtain lifting, once when it
 * scrolls into view.
 *
 * Uses Framer Motion's documented container/item `variants` +
 * `staggerChildren` orchestration, not ad-hoc per-word `animate` objects —
 * two earlier versions (toggling `animate` to `undefined`, then to a
 * concrete-but-matching-`initial` object) both silently lost the hidden
 * state on hydration: confirmed by inspecting the rendered DOM, where the
 * inline `transform` style was simply absent from the very first frame,
 * before the element was ever anywhere near the viewport. The
 * variants-based form is the pattern Framer Motion's own docs use for this
 * exact case and doesn't have that failure mode.
 */
export default function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        // A real space as its own text-node sibling, not inside the masked
        // span: adjacent inline-blocks with nothing but markup between them
        // don't get a line-break opportunity, so the sentence wouldn't wrap.
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]">
            <motion.span className="inline-block" variants={item}>
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.p>
  );
}
