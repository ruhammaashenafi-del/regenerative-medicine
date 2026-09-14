# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may
all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation
notices.

# Regenerative Medicine Website — OSI

Next.js (App Router) site for the Orthopedic Spine Institute's regenerative
medicine program. Built from a Visual Direction deck and a Content &
Development Brief supplied by the client (Meron Dereje). Sibling project
`../../ECA/elite-concierge-aesthetics` uses the same stack (Next 16, Tailwind
v4, framer-motion, Resend) — mirror its patterns for consistency.

## Audience & tone

Existing patients, not new-market acquisition. Understated, evidence-aware,
warm without overselling. Credible AND welcoming — not sterile/clinical like
competitors, not boutique-spa like ECA either.

## Content guardrails (apply to every page, not just medical ones)

- No outcome claims beyond what current literature supports.
- Real patient stories only — never fabricated or stock testimonials. The
  Patient Stories page stays empty (framing copy only) until real stories
  are collected post-launch.
- Language framed as an offering, not a promise ("we offer," never
  "guaranteed results").
- No specific supplier or manufacturer names published on the site.
- Physician bios go live only after credentials are directly confirmed with
  each physician — do not add medical school/residency/board cert details
  that aren't confirmed.
- No PHI/health information collected through the contact form — it's a
  scheduling request, not an intake form.
- No booking of actual procedures online — consultation requests only.

## Imagery direction (when adding real photography)

Avoid: glowing-skin macro close-ups, "gold standard"/"cutting-edge
transformation" claims, sterile white corridors, cold blue overlays,
stock lab-coat headshots, urgency banners/countdowns.

Prefer: a physician's hand mid-conversation, natural light and real
texture, faces that look relieved and heard rather than posed.

## Theming

The site ships light and dark modes, toggled from the nav and stored in
`localStorage` under `theme`; an inline script in `layout.tsx` applies it
before first paint. Dark mode is driven by `data-theme="dark"` on `<html>`,
wired to Tailwind's `dark:` variant via `@custom-variant` in `globals.css`.

**Always build with the semantic tokens, never the raw palette, for anything
that must survive a theme flip:** `bg-canvas` (page), `bg-card` (panels),
`bg-muted` (subtle fills), `text-ink` (body), `text-heading` (headings),
`border-line`. The raw brand colors (`deep-teal`, `sage`, `clay`, `ivory`)
stay fixed across themes and are for accents and always-dark panels — on
those, use `text-ivory` and `.btn-on-dark` rather than the themed tokens.

Note: `--canvas` (the page background in light mode) is `#F6F2EF`, a near
match for the deck's Soft Ivory `#F8F1E4` — close enough that this no longer
reads as a departure from the approved palette, unlike the brief white-body
period this project went through earlier. Still worth a final confirm with
Meron since it's not the exact hex, but functionally it's back in line.

## Brand tokens (`app/globals.css`)

- Deep Teal `#1F3D36` — primary (nav/footer)
- Regenerative Sage `#6B8F73` — secondary (accents/icons)
- Warm Clay `#C1694F` — accent, CTAs/highlights only
- Soft Ivory `#F8F1E4` — background
- Ink `#241F1A` — body text
- Headlines: Lora. Body/UI: Inter.

## Outstanding TODOs before launch

- [ ] Confirm practice address, phone number, hours (Footer.tsx, contact page)
- [ ] Confirm contact-form recipient inbox and set `TO_EMAIL` in
      `app/contact/actions.ts` (currently a placeholder)
- [ ] Confirm physician credentials directly, then expand bios on
      `app/physicians/page.tsx`
- [ ] Confirm whether exosome therapy is offered by IV in addition to
      injection before adding that claim
- [ ] Set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `RESEND_FROM` in
      `.env.local` (see `.env.example`)
- [ ] Swap placeholder service-card image blocks for real photography per
      the Imagery direction above
- [x] Our Approach band photo — `public/our-approach-bg.jpg` (source kept at
      `design-assets/our-approach-source.jpg`)
- [ ] Have a physician sign off the FAQ copy in `app/lib/faqs.ts` — it's
      patient-facing medical copy, same review bar as the bios
- [x] Five carousel photos at `public/gallery/01.jpg` … `05.jpg` (sourced
      from properly-licensed Unsplash photography as a placeholder set;
      sources kept at `design-assets/gallery/`). Swap for real practice
      photography per the Imagery direction when available
- [ ] Add Dr. Zaidi's portrait at `public/providers/dr-zaidi.jpg` and set
      `photo` on his entry in `app/lib/content.ts` (falls back to initials)
- [ ] Point the footer's Get In Touch buttons at real `tel:` / `mailto:` /
      maps destinations (they all fall back to /contact today)
- [ ] `/privacy` and `/terms` are placeholder pages (linked from the
      footer's Legal column) — replace with the practice's counsel-reviewed
      copy before launch; do not let the placeholder text ship

## Visual language (added after the client reference review)

The nav, footer, and homepage hero follow two references the client shared:
a floating pill nav with a glowing orbit hero, and a footer built as a light
rounded card wrapping a dark brand panel. Three motifs carry across the site
and should be reused rather than reinvented:

- `bg-grid` — the faint ruled grid texture. A small `--grid-cut` square masks
  every intersection so the rules read as cut segments rather than continuous
  lines. That square's fill is baked into a data URI and must be kept in sync
  by hand with `--canvas` in both themes.
- `<Aurora />` — soft light entering a section, for `relative overflow-hidden`
  sections
- `caption-serif` — italic Lora, used for footer column headers and small
  captions

Deliberately NOT copied from the references: fabricated stat counters, social
profiles we don't have, and a newsletter signup with nowhere to send mail.
The footer's pill is a real link to /contact, not a dead input.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
