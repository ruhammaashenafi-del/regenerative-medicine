/* Single source for copy that appears in more than one place, so the landing
   teasers can never drift from the detail pages. Physician bios in
   particular are liability-sensitive — edit them here only. */

export const THERAPIES = [
  {
    accent: "sage" as const,
    title: "Exosome Therapy",
    category: "Regenerative Therapy",
    /* Placeholder photography (properly-licensed stock), source kept at
       design-assets/gallery/ — swap for real practice photography per the
       Imagery direction when available. */
    photo: "/service-exosome.jpg",
    teaser: "Tiny particles your cells already use to communicate and heal.",
    /* Short, honest facts — not the fabricated stats (distance, elevation)
       a generic card template shows. Every one of these is already stated
       plainly in the copy below; this is just the scannable version. */
    facts: ["Injection", "Physician-led", "Consultation first"],
    paragraphs: [
      "Exosomes are tiny particles that cells naturally release to communicate with each other and support the body's own repair process. We offer exosome therapy by injection.",
      "In your consultation, we'll walk you through what the research actually shows right now — including where it's still catching up to the interest around it.",
    ],
  },
  {
    accent: "clay" as const,
    title: "Placental Matrix Therapy",
    category: "Regenerative Therapy",
    photo: "/service-placental.jpg",
    teaser: "Tissue-derived material rich in natural growth factors.",
    facts: ["Tissue-derived", "Physician-led", "Consultation first"],
    paragraphs: [
      "Placental matrix therapy uses tissue-derived material rich in the same kinds of natural growth factors your body already relies on to heal.",
      "It's offered alongside exosome therapy, under the same physician oversight, and the same straightforward conversation about what to expect.",
    ],
  },
];

/* Credentials (med school, residency, board certs, years in practice) are
   intentionally omitted — the brief requires direct confirmation with each
   physician before any of that is published. */
export const PHYSICIANS: {
  name: string;
  role: string;
  bio: string;
  /* Portraits live in /public/providers. Without one, the avatar falls back
     to initials rather than an empty circle. */
  photo?: string;
}[] = [
  {
    name: "Dr. Ersno Eromo",
    role: "CEO & Chief Medical Officer",
    bio: "Dr. Eromo leads clinical and organizational direction across Concierge Healthcare Partners and the Orthopedic Spine Institute, with a practice built on physician autonomy and patient-first care.",
    photo: "/providers/dr-eromo.jpg",
  },
  {
    name: "Dr. Zaidi",
    role: "Regenerative Medicine & Pain Management Lead",
    bio: "Dr. Zaidi leads the pain management and regenerative medicine programs, with a practice focused on helping patients age well without unnecessary intervention.",
  },
];
