import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "../lib/site";
import FooterOrbit from "./FooterOrbit";
import BackToTop from "./BackToTop";

const SITE_MAP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#our-approach", label: "Our Approach" },
  { href: "/#what-we-offer", label: "What We Offer" },
  { href: "/#physicians", label: "Meet Our Physicians" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/contact", label: "Contact Us" },
];

const THERAPY_LINKS = [
  { href: "/#what-we-offer", label: "Exosome Therapy" },
  { href: "/#what-we-offer", label: "Placental Matrix Therapy" },
  { href: "/contact", label: "Request a Consultation" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

/* TODO: point these at real `tel:` / `mailto:` / maps destinations once the
   practice phone, inbox, and address are confirmed. */
const CONTACT_BUTTONS = [
  {
    href: "/contact",
    label: "Call the practice",
    icon: <path d="M6.5 4h3l1.5 3.5-2 1.5a10 10 0 0 0 5 5l1.5-2L19 13.5v3a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4z" />,
  },
  {
    href: "/contact",
    label: "Email the practice",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
      </>
    ),
  },
  {
    href: "/contact",
    label: "Get directions",
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-canvas pt-10">
      {/* CTA card — constrained and inset, same as the rest of the page.
          `z-20` plus a negative-margin overlap on the band below (not just a
          higher z-index) is what actually reads as "on top": stacking order
          alone made the shadow paint over the band, but at that subtlety it
          wasn't legible as depth — the card needs to visibly cover part of
          the band, not just out-rank it in an invisible paint order. */}
      <div className="px-3 md:px-6">
        <div className="relative z-20 mx-auto max-w-[1440px]">
          <div className="bg-card rounded-t-[1.75rem] md:rounded-t-[2.25rem] border border-line border-b-0 shadow-[0_35px_60px_-25px_rgba(20,14,8,0.45)] p-7 md:p-10 grid gap-8 md:grid-cols-[1fr_auto] items-center overflow-hidden">
            <div>
              <p className="eyebrow mb-3">Get Started</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-heading tracking-[-0.01em] max-w-sm">
                Let&apos;s talk about your options.
              </h2>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-sm">
                No pressure, no obligation — just an honest conversation about
                whether it&apos;s right for you.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Request a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="justify-self-center md:justify-self-end">
              <FooterOrbit />
            </div>
          </div>
        </div>
      </div>

      {/* Deep-teal band — full viewport width (not clipped to the page's
          usual max-width). Pulled up under the CTA card with a negative
          margin (rather than just sitting flush against it) so the card
          visibly covers part of the band instead of merely out-ranking it in
          z-index — that's what actually reads as "on top". The content
          wrapper's extra top padding below makes up for the overlap so
          nothing sits hidden under the card. Always dark regardless of site
          theme, matching the brief's "Deep Teal — primary, headers, nav,
          footer". Square corners throughout: rounding a full-bleed band
          reads as a mistake, not a card. */}
      <div className="footer-lines relative z-0 bg-deep-teal -mt-6 md:-mt-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-7 md:px-10 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12 lg:pb-14 grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.8fr]">
          <div>
            <Image
              src="/osi-logo-light.png"
              alt={SITE_NAME}
              width={180}
              height={69}
              className="h-11 md:h-12 w-auto"
            />
            <p className="mt-5 text-sm text-ivory/65 leading-relaxed max-w-[32ch]">
              Empowering patients we already know with an honest,
              evidence-aware approach to regenerative medicine.
            </p>

            <div className="mt-6 flex gap-2.5">
              {CONTACT_BUTTONS.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  aria-label={button.label}
                  className="h-10 w-10 rounded-lg border border-ivory/15 hover:border-ivory/35 hover:bg-ivory/[0.06] transition-colors inline-flex items-center justify-center"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ivory)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {button.icon}
                  </svg>
                </Link>
              ))}
            </div>

            {/* TODO: insert confirmed practice address, phone number, hours */}
            <p className="mt-6 text-sm text-ivory/50 leading-relaxed">
              [Practice address]
              <br />
              [Phone number] · [Hours]
            </p>
          </div>

          <div>
            <h3 className="caption-serif text-[0.95rem] text-sage">Site Map</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/70">
              {SITE_MAP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-ivory transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="caption-serif text-[0.95rem] text-sage">Therapies</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/70">
              {THERAPY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-ivory transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="caption-serif text-[0.95rem] text-sage">Legal</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/70">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-ivory transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <BackToTop />
            </div>
          </div>
        </div>

        {/* Bottom accent strip */}
        <div className="relative bg-clay px-4 sm:px-7 md:px-10 lg:px-12 py-2.5 flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between text-[0.7rem] text-ivory/90">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved.
          </p>
          <p className="sm:text-right max-w-md">
            Regenerative medicine outcomes vary by patient. This site does
            not offer a diagnosis and is not a substitute for a consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
