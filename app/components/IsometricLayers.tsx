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
 * (matching each breakpoint's scale factor exactly). That fixed the *grid
 * track* sizing, but not a second, subtler version of the same bug:
 * `scale()` only affects paint, so the un-scaled 440×440 box still counted
 * toward the page's actual scrollable area whenever nothing clipped it —
 * at narrow widths that alone pushed the whole document ~448px wide no
 * matter how small the visible graphic was. Fixed by clipping at the outer
 * wrapper (`relative overflow-hidden`), with the scaled content made
 * `absolute` inside it.
 *
 * The clip box is *taller* than the visible graphic (width still matches
 * the visual size exactly, for the grid-track reasoning above; only height
 * grows), with the content kept centered inside it: the three floating
 * `.iso-particle` spans sit well above `.iso-layer-top`'s own plane (they
 * carry their own `translateZ` on top of its 240px, projected through the
 * scene's rotateX/rotateZ), so a box sized to the diamond alone clips them
 * clean off — measured (empirically, via getBoundingClientRect — the 3D
 * projection isn't worth doing by hand) at up to ~65px of bleed above the
 * diamond at the largest (xl) size. The extra height is well past that
 * measurement on purpose: it costs nothing (this row has vertical room to
 * spare) and a generous margin is one less thing to re-measure if the
 * geometry above ever changes. Horizontally nothing bleeds past the
 * diamond's own footprint, so the width needs no equivalent margin.
 *
 * The jump to the largest size waits for `xl` (1280px) rather than `lg`
 * (1024px): the hero's own column gap is quite wide at desktop sizes, and
 * at the narrow end of the `lg` range (1024–1279px) there isn't enough
 * room left in this column for the full-size graphic — it was overflowing
 * its grid column and getting cut off against the right edge. Holding at
 * the `sm` size through `lg` and only growing at `xl` keeps it inside its
 * column at every width in between.
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
