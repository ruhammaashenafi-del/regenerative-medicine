import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME } from "./lib/site";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_DESCRIPTION =
  "An honest look at regenerative medicine from a practice patients already trust — exosome and placental matrix therapy, explained plainly.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Regenerative Medicine | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `Regenerative Medicine | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Regenerative Medicine | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint, so the page never
            flashes the wrong background. Always defaults to light on a
            first visit — deliberately ignoring `prefers-color-scheme` — so
            the brand's actual palette is what new visitors see regardless
            of their OS setting; dark mode is opt-in via the nav toggle. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='dark')?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`,
          }}
        />
        {/* Chrome (and others) restore the last scroll offset on reload by
            default — on a page this long that lands you mid-FAQ instead of
            at the hero. `manual` hands scroll position back to us: a plain
            reload starts at the top, and HashScrollFix still drives the
            #our-approach / #physicians cases explicitly. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual'}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
