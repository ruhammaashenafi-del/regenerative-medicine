import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a consultation to learn more about our regenerative medicine program.",
};

export default function ContactPage() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-16 md:py-24 grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-deep-teal max-w-lg">
            Curious whether regenerative medicine might help you?
          </h1>
          <p className="mt-5 text-lg text-ink/75 max-w-md leading-relaxed">
            Reach out and someone from our team will get back to you to set
            up a conversation — no pressure, no obligation.
          </p>

          {/* TODO: insert confirmed practice address, phone number, and hours */}
          <div className="mt-10 text-sm text-ink/70 leading-relaxed">
            <p className="eyebrow !text-sage mb-2">Visit</p>
            <p>[Practice address]</p>
            <p>[Phone number]</p>
            <p>[Hours]</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
