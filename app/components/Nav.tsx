"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_SHORT } from "../lib/site";

const LINKS = [
  { href: "/our-approach", label: "Our Approach" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/physicians", label: "Meet Our Physicians" },
  { href: "/patient-stories", label: "Patient Stories" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep-teal text-ivory">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {SITE_SHORT} <span className="text-sage font-sans text-xs font-medium uppercase tracking-[0.14em] align-middle ml-1">Regenerative Medicine</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-sans text-sm">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-sage ${
                pathname === link.href ? "text-sage" : "text-ivory/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-[0.85rem]">
            Request a Consultation
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ivory transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ivory/10 px-5 pb-5 pt-2 flex flex-col gap-4 font-sans text-sm">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-ivory/90" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
            Request a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
