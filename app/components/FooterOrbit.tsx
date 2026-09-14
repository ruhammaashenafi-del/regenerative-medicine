/* Decorative orbit graphic for the footer CTA card — dashed rings with
   service touchpoints scattered around them. Purely decorative
   (aria-hidden); nodes aren't links here since the card's own button is the
   call to action. */

const NODES = [
  {
    top: "2%",
    left: "58%",
    icon: (
      <path d="M20 12.5a7 7 0 0 1-7 7H7l-3 2.5V12.5a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7z" />
    ),
  },
  {
    top: "20%",
    left: "8%",
    icon: (
      <>
        <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
        <path d="M9 3.5h6v3H9zM8.5 13l2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    top: "38%",
    left: "88%",
    icon: (
      <>
        <path d="M12 3.5 6 7v7l6 3.5L18 14V7z" />
        <path d="M12 10.5 6 7M12 10.5 18 7M12 10.5v7" />
      </>
    ),
  },
  {
    top: "68%",
    left: "14%",
    icon: (
      <path d="M12 20s-6.5-4.2-6.5-9A3.5 3.5 0 0 1 12 9.2 3.5 3.5 0 0 1 18.5 11c0 4.8-6.5 9-6.5 9z" />
    ),
  },
  {
    top: "88%",
    left: "62%",
    icon: (
      <>
        <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
        <path d="M20.5 4v5h-5" />
      </>
    ),
  },
];

export default function FooterOrbit() {
  return (
    <div
      aria-hidden
      className="relative w-[220px] h-[220px] md:w-[248px] md:h-[248px] shrink-0"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-line" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-line" />

      {/* Centre mark — the spine glyph from the wordmark, so the graphic ties
          back to the actual brand rather than an arbitrary icon. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-xl bg-card border border-line shadow-[0_10px_24px_-12px_rgba(36,31,26,0.35)] flex items-center justify-center">
        <div className="flex flex-col gap-[3px]" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rotate-45 bg-clay"
              style={{ marginLeft: i === 1 ? "6px" : 0 }}
            />
          ))}
        </div>
      </div>

      {NODES.map((node, i) => (
        <div
          key={i}
          className="absolute h-10 w-10 md:h-11 md:w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card border border-line shadow-[0_10px_24px_-12px_rgba(36,31,26,0.35)] flex items-center justify-center"
          style={{ top: node.top, left: node.left }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 md:h-[18px] md:w-[18px]"
          >
            {node.icon}
          </svg>
        </div>
      ))}
    </div>
  );
}
