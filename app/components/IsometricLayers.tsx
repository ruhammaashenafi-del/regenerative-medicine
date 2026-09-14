/* Three stacked isometric tiles — pure CSS 3D (see `.iso-*` in
 * globals.css), not React state or framer-motion: nothing here needs
 * scroll-triggering or interactivity, and animating `transform` via CSS
 * keyframes sidesteps the SSR/hydration issues a JS-driven version hit
 * elsewhere on this page. Purely decorative (aria-hidden).
 *
 * Scaled via a plain 2D `scale()` wrapper — the tiles' depth spacing is real
 * pixels (`translateZ`), which doesn't shrink or grow with a
 * percentage-based container, so the geometry is built once at a fixed
 * 440px and scaled down as a flat unit instead of recomputing it.
 *
 * `transform: scale()` only affects *rendering*, not the element's layout
 * box — the inner 440px box was still reserving a full 440px of width in
 * the grid regardless of how small it visually rendered, which on mobile
 * pushed the hero wider than the viewport (grid items don't shrink below
 * their content's natural size unless something overrides `min-width`).
 * The outer wrapper below carries the *real*, responsive layout size
 * (matching each breakpoint's scale factor exactly: 440 × 0.55 ≈ 242,
 * 440 × 0.75 = 330), with `origin-top-left` so the scaled-down content's
 * corner lines up with that box's corner. No `overflow-hidden` here: the
 * rotated/masked geometry's visible pixels reach slightly above and past
 * the nominal 440×440 box (that's inherent to the rotateX/rotateZ
 * projection), and clipping to the box cut the top tile's peak clean off.
 * The box-width fix above is what actually stopped the mobile page-scroll
 * bug — clipping was only ever a "just in case" that turned out to cost
 * more than it protected against.
 */
export default function IsometricLayers() {
  return (
    <div
      aria-hidden
      className="mx-auto mt-6 lg:mt-32 w-[242px] h-[242px] sm:w-[330px] sm:h-[330px] lg:w-[440px] lg:h-[440px]"
    >
      <div
        className="scale-[0.55] sm:scale-[0.75] lg:scale-100 origin-top-left"
        style={{ width: 440, height: 440 }}
      >
        <div className="iso-scene relative" style={{ width: 440, height: 440 }}>
          <div className="iso-layer iso-layer-bottom" />
          <div className="iso-layer iso-layer-middle" />
          <div className="iso-layer iso-layer-top">
            <span
              className="iso-particle"
              style={{ width: 35, height: 30, top: 130, left: -10, transform: "translateZ(260px) rotateZ(15deg)" }}
            />
            <span
              className="iso-particle"
              style={{ width: 25, height: 22, top: 30, left: 160, transform: "translateZ(250px) rotateZ(-20deg)" }}
            />
            <span
              className="iso-particle"
              style={{ width: 45, height: 40, bottom: -10, right: 90, transform: "translateZ(255px) rotateZ(45deg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
