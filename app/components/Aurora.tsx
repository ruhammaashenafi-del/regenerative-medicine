/* Soft light entering the section from above — the glow behind the hero
   orbit and the recurring "light from the side" texture on inner pages.
   Decorative only; pair with a `relative overflow-hidden` section. */
export default function Aurora({
  tone = "dark",
  position = "top",
}: {
  tone?: "dark" | "light";
  position?: "top" | "left" | "right";
}) {
  const sage = tone === "dark" ? "rgba(107,143,115,0.55)" : "rgba(107,143,115,0.16)";
  const clay = tone === "dark" ? "rgba(193,105,79,0.35)" : "rgba(193,105,79,0.10)";

  const anchor =
    position === "top"
      ? { top: "-38%", left: "50%", transform: "translateX(-50%)" }
      : position === "left"
        ? { top: "-30%", left: "-18%" }
        : { top: "-30%", right: "-18%" };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Broad wash of light */}
      <div
        className="absolute h-[620px] w-[900px] rounded-full"
        style={{
          ...anchor,
          background: `radial-gradient(ellipse at center, ${sage} 0%, ${clay} 38%, transparent 68%)`,
          filter: "blur(90px)",
          opacity: tone === "dark" ? 0.55 : 0.7,
        }}
      />
      {/* Two angled beams cutting across, like light through a window */}
      <div
        className="absolute -left-[10%] top-[6%] h-[340px] w-[130%] origin-left"
        style={{
          transform: "rotate(-14deg)",
          background: `linear-gradient(90deg, transparent 0%, ${sage} 30%, transparent 72%)`,
          filter: "blur(70px)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute -left-[5%] top-[34%] h-[180px] w-[120%] origin-left"
        style={{
          transform: "rotate(-9deg)",
          background: `linear-gradient(90deg, transparent 5%, ${clay} 42%, transparent 78%)`,
          filter: "blur(60px)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
