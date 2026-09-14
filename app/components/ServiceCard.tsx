"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ServiceCard({
  accent,
  title,
  category,
  facts,
  paragraphs,
  photo,
}: {
  accent: "sage" | "clay";
  title: string;
  category: string;
  facts: string[];
  paragraphs: string[];
  photo?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const wash =
    accent === "sage"
      ? "linear-gradient(160deg, #2a4a41 0%, #1f3d36 55%, #16302a 100%)"
      : "linear-gradient(160deg, #b06248 0%, #c1694f 55%, #a3573f 100%)";
  /* Real source photos land at all sorts of color temperatures — this
     re-hues whichever one we drop in toward the card's own accent (kept
     as a flat color, not the gradient above: a gradient blended this way
     goes muddy) via mix-blend-mode "color", so every card reads as one
     consistent, on-brand palette instead of whatever the photo happened
     to be shot in. */
  const duotone = accent === "sage" ? "#6B8F73" : "#C1694F";

  /* Everything reads up front — facts plus every paragraph but the last.
     Only that last paragraph collapses behind the toggle, so "Learn More"
     reveals one more beat of detail rather than hiding the bulk of the copy. */
  const leadParagraphs = paragraphs.slice(0, -1);
  const lastParagraph = paragraphs[paragraphs.length - 1];

  return (
    <div className="group rounded-[1.75rem] bg-card border border-line overflow-hidden shadow-[0_25px_60px_-35px_rgba(36,31,26,0.55)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-30px_rgba(36,31,26,0.6)]">
      <div className="relative h-72 md:h-80 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          style={{
            backgroundImage: photo ? `url('${photo}'), ${wash}` : wash,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {photo && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: duotone, mixBlendMode: "color", opacity: 0.9 }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(20,14,8,0.75) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-white leading-tight">
              {title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5">{category}</p>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="shrink-0 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:bg-black/50 transition-colors"
          >
            {expanded ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex gap-2.5 flex-nowrap overflow-x-auto">
          {facts.map((fact) => (
            <span
              key={fact}
              className="shrink-0 rounded-lg bg-muted px-3 py-2 text-xs font-medium text-ink/70"
            >
              {fact}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3.5">
          {leadParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm text-ink/75 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {expanded && lastParagraph && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-sm text-ink/75 leading-relaxed mt-3.5">
                {lastParagraph}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating chevron below the card, same affordance as the reference —
          decorative and clickable, mirrors the pill button above. */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-hidden
        tabIndex={-1}
        className="w-full flex justify-center py-2 text-ink/35 hover:text-ink/60 transition-colors"
      >
        <Chevron expanded={expanded} />
      </button>
    </div>
  );
}
