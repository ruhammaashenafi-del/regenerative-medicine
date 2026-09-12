"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ServiceCard({
  accent,
  title,
  teaser,
  fullCopy,
}: {
  accent: "sage" | "clay";
  title: string;
  teaser: string;
  fullCopy: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const tint = accent === "sage" ? "bg-sage-tint" : "bg-clay-tint";
  const dot = accent === "sage" ? "bg-sage" : "bg-clay";

  return (
    <div className="rounded-2xl bg-white border border-line overflow-hidden flex flex-col">
      <div className={`h-40 ${tint} flex items-center justify-center`}>
        <span className={`h-14 w-14 rounded-full ${dot}`} aria-hidden />
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-deep-teal">{title}</h3>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">{teaser}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">{fullCopy}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-5 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-[#ab5a41] transition-colors"
        >
          {expanded ? "Show Less" : "Learn More"}
          <span aria-hidden className={`transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}>
            &darr;
          </span>
        </button>
      </div>
    </div>
  );
}
