"use client";

import { useEffect } from "react";

/* Next's built-in cross-route hash scroll fires as soon as the target route
 * mounts — before images below the fold (physician portraits, the gallery
 * carousel) have loaded and pushed the rest of the page down. The scroll
 * lands short, or on a long page like this one, wildly overshoots once
 * everything settles. Re-running scrollIntoView after paint corrects it.
 *
 * Scoped to mount only: same-page hash clicks (already on "/") don't remount
 * this component, but the page is already laid out by then so Next's default
 * behavior is fine there.
 */
export default function HashScrollFix() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const first = setTimeout(scrollToHash, 80);
    // Corrective pass once below-the-fold images have had time to load and
    // any layout shift they cause has resolved.
    const settled = setTimeout(scrollToHash, 700);

    return () => {
      clearTimeout(first);
      clearTimeout(settled);
    };
  }, []);

  return null;
}
