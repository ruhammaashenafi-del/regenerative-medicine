import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Physicians",
  description:
    "Meet the physicians leading our regenerative medicine, pain management, and orthopedic programs.",
};

/* Credentials (med school, residency, board certs, years in practice) are
   intentionally omitted — brief flags this as liability-sensitive and
   requires direct confirmation with each physician before publishing them. */
const PHYSICIANS = [
  {
    name: "Dr. Ersno Eromo",
    role: "CEO & Chief Medical Officer",
    bio: "Dr. Eromo leads clinical and organizational direction across Concierge Healthcare Partners and the Orthopedic Spine Institute, with a practice built on physician autonomy and patient-first care.",
  },
  {
    name: "Dr. Zaidi",
    role: "Regenerative Medicine & Pain Management Lead",
    bio: "Dr. Zaidi leads the pain management and regenerative medicine programs, with a practice focused on helping patients age well without unnecessary intervention.",
  },
];

export default function PhysiciansPage() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-16 md:py-24">
        <p className="eyebrow mb-4">Meet Our Physicians</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-deep-teal max-w-2xl">
          The team behind the program.
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-3xl">
          {PHYSICIANS.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border border-line p-7">
              <div className="h-16 w-16 rounded-full bg-sage-tint" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-semibold text-deep-teal">{p.name}</h2>
              <p className="mt-1 eyebrow !text-sage">{p.role}</p>
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
