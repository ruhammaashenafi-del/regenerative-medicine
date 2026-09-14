"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

/* "Our Approach" and "Physicians" are sections on the homepage rather than
   their own routes, so they link to hash anchors. A hash href never equals
   `pathname`, so these two never show the active-state dot — acceptable,
   since determining which section is currently in view would need a scroll
   spy this nav doesn't otherwise have a reason to carry. */
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#our-approach", label: "Our Approach" },
  { href: "/#what-we-offer", label: "What We Offer" },
  { href: "/#physicians", label: "Physicians" },
  { href: "/patient-stories", label: "Patient Stories" },
];

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Next.js only resets scroll on an actual route change — clicking a link
     to the page you're already on is a no-op navigation, so without this a
     scrolled-down visitor who clicks "Home" (or the logo) just stays put. */
  function handleHomeClick(e: React.MouseEvent) {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-3 md:top-5 z-50 px-3 md:px-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="rounded-full bg-card/85 backdrop-blur-xl border border-line shadow-[0_16px_44px_-26px_rgba(36,31,26,0.5)] flex items-center gap-3 py-2 pl-4 pr-2">
          <Link href="/" className="flex items-center shrink-0" onClick={handleHomeClick}>
            <Image
              src="/osi-logo.png"
              alt="The Orthopedic & Spine Institute"
              width={168}
              height={63}
              className="h-7 w-auto md:h-8 dark:hidden"
              priority
            />
            <Image
              src="/osi-logo-light.png"
              alt=""
              aria-hidden
              width={180}
              height={69}
              className="h-7 w-auto md:h-8 hidden dark:block"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center font-sans text-[0.84rem]">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                  className={
                    active
                      ? "inline-flex items-center gap-1.5 rounded-full bg-muted px-3.5 py-2 font-medium text-ink"
                      : "inline-flex items-center rounded-full px-3.5 py-2 text-ink/60 hover:text-ink transition-colors"
                  }
                >
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Wrapper carries the responsive visibility: `.btn-primary` sets its
              own `display`, which would otherwise beat Tailwind's `hidden`. */}
          <div className="ml-auto lg:ml-0 flex items-center gap-1 shrink-0">
            <ThemeToggle />

            <div className="hidden md:block">
              <Link href="/contact" className="btn-primary py-2.5! px-5! text-[0.82rem]!">
                Request a Consultation
                <ArrowRight />
              </Link>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden flex flex-col gap-1.5 p-2.5"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden mt-2 rounded-3xl bg-card border border-line shadow-[0_16px_44px_-26px_rgba(36,31,26,0.5)] p-5 flex flex-col gap-1 font-sans text-sm">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? handleHomeClick : () => setOpen(false)}
                className={
                  pathname === link.href
                    ? "inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2.5 font-medium text-ink"
                    : "inline-flex items-center rounded-full px-4 py-2.5 text-ink/70"
                }
              >
                {pathname === link.href && <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />}
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary justify-center mt-2" onClick={() => setOpen(false)}>
              Request a Consultation
              <ArrowRight />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
