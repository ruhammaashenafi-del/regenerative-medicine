"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-ivory/80 hover:text-ivory hover:border-ivory/50 transition-colors"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 15l-6-6-6 6M18 20l-6-6-6 6" />
      </svg>
      Back to top
    </button>
  );
}
