import type { Metadata } from "next";
import Aurora from "../components/Aurora";
import ContactForm from "./ContactForm";
import FaqSection from "../components/FaqSection";
import { FAQS } from "../lib/faqs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a consultation to learn more about our regenerative medicine program.",
};

/* Drawn from the approved tone, not invented service commitments — no
   response-time promises, nothing the practice hasn't agreed to. */
const ASSURANCES = [
  "No pressure and no obligation",
  "We'll tell you what the research supports — and what it doesn't",
  "A straight answer about whether it's a fit for you",
];

function Check() {
  return (
    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-sage flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page sits on the muted tone so the white card reads as a panel. */}
      <section className="relative overflow-hidden bg-muted">
        <div aria-hidden className="absolute inset-0 bg-grid" />
        <Aurora tone="light" position="right" />

        <div className="container-wide relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="card-glow glow-panel relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] border border-line shadow-[0_50px_110px_-55px_rgba(31,61,54,0.45)]">
            <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 p-7 sm:p-10 md:p-12 lg:p-14">
              <div className="flex flex-col">
                <h1 className="font-display text-3xl md:text-[2.6rem] font-semibold text-heading tracking-[-0.02em] leading-[1.1] max-w-[14ch]">
                  Tell us what you&apos;re hoping for.
                </h1>

                <ul className="mt-8 flex flex-col gap-3.5">
                  {ASSURANCES.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink/75 leading-relaxed">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 lg:mt-auto lg:pt-16">
                  {/* TODO: swap in the confirmed inbox, phone number, and hours */}
                  <a
                    href="/contact"
                    className="text-sm font-medium text-heading underline underline-offset-4 decoration-clay/50 hover:decoration-clay transition-colors"
                  >
                    [practice email]
                  </a>
                  <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-[32ch]">
                    Would rather talk it through than type? Call the practice
                    during opening hours.
                  </p>
                  <p className="mt-3 text-sm text-ink/55">
                    [Phone number] · [Hours]
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS.contact} />
    </>
  );
}
