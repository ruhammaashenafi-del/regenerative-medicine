export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://osi-regen-placeholder.com"
).replace(/\/$/, "");

export const SITE_NAME = "The Orthopedic & Spine Institute";
export const SITE_SHORT = "OSI";

/* Our Approach, What We Offer, and Meet Our Physicians are sections on the
   homepage (#our-approach, #what-we-offer, #physicians), not standalone
   routes — omitted here since this list drives the generated sitemap. */
export const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/patient-stories", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];
