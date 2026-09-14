"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/* Classic parallax: the background image drifts a little slower than the
 * page scrolls, so the band feels like it has depth instead of being a flat
 * sticker behind the text. `useScroll` tracks this section's own position
 * (not the whole page), so the drift always starts/ends exactly at the
 * section's edges regardless of where it sits on the page. The image is
 * oversized (120% height, centered) so the drift never exposes an edge.
 */
export default function ParallaxImage({
  src,
  fallbackGradient,
}: {
  src: string;
  fallbackGradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: "-10%",
          height: "120%",
          backgroundImage: `url('${src}'), ${fallbackGradient}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: reduced ? 0 : y,
        }}
      />
    </div>
  );
}
