import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Stories",
  description: "Real experiences from patients in our regenerative medicine program.",
};

export default function PatientStoriesPage() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-16 md:py-24">
        <p className="eyebrow mb-4">Patient Stories</p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-deep-teal max-w-2xl">
          Real experiences from patients in our regenerative medicine program.
        </h1>

        <div className="mt-12 rounded-2xl bg-white border border-line p-8 md:p-10 max-w-2xl">
          <p className="text-lg text-ink/80 leading-relaxed">
            Numbers and studies only tell part of the story. The rest comes
            from people who&apos;ve actually been through it. As more patients
            complete treatment, we&apos;ll share their experiences here — in
            their own words, with their permission.
          </p>
        </div>
      </div>
    </section>
  );
}
