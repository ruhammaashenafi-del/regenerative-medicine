export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://osi-regen-placeholder.com"
).replace(/\/$/, "");

export const SITE_NAME = "Orthopedic Spine Institute";
export const SITE_SHORT = "OSI";

export const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/our-approach", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/what-we-offer", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/physicians", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/patient-stories", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
];
