import Link from "next/link";
import { SITE_NAME } from "../lib/site";

const QUICK_LINKS = [
  { href: "/our-approach", label: "Our Approach" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/physicians", label: "Meet Our Physicians" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-teal text-ivory">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold">{SITE_NAME}</p>
            <p className="mt-3 text-sm text-ivory/70 max-w-xs">
              An honest, evidence-aware approach to regenerative medicine — for
              patients we already know.
            </p>
          </div>

          <div>
            <p className="eyebrow text-sage mb-3">Explore</p>
            <ul className="flex flex-col gap-2 text-sm text-ivory/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sage transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sage mb-3">Visit</p>
            {/* TODO: insert confirmed practice address, phone number, and hours */}
            <p className="text-sm text-ivory/70 leading-relaxed">
              [Practice address]
              <br />
              [Phone number]
              <br />
              [Hours]
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="max-w-md">
            Regenerative medicine outcomes vary by patient. This site does not
            offer a diagnosis and is not a substitute for a consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
