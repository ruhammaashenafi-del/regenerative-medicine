"use server";

import { Resend } from "resend";

export type ConsultationResult = { ok: true } | { ok: false; error: string };

/* TODO: replace with the confirmed practice inbox before launch (brief:
   "Contact form routes to [confirm recipient email/inbox]"). */
const TO_EMAIL = "info@osi-regen-placeholder.com";

const CONTACT_METHOD_LABEL: Record<string, string> = {
  phone: "Phone",
  email: "Email",
  either: "Either",
};

export async function sendConsultation(formData: FormData): Promise<ConsultationResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const reason = String(formData.get("reason") ?? "").trim();
  const contactMethod = String(formData.get("contactMethod") ?? "either").trim();

  if (!name || !email || !reason) {
    return { ok: false, error: "Please fill out your name, email, and reason for interest." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set, email NOT sent. Payload:", {
      name,
      email,
      phone,
      reason,
      contactMethod,
    });
    return {
      ok: false,
      error: "Email service is not configured yet. Add RESEND_API_KEY to .env.local to enable delivery.",
    };
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM || "OSI Regenerative Medicine <onboarding@resend.dev>";
  const contactMethodLabel = CONTACT_METHOD_LABEL[contactMethod] ?? "Either";
  const subject = `New consultation request, ${name}`;

  const text = [
    `New consultation request from the regenerative medicine site.`,
    ``,
    `Name:            ${name}`,
    `Email:           ${email}`,
    `Phone:           ${phone || "-"}`,
    `Preferred contact: ${contactMethodLabel}`,
    ``,
    `Reason for interest:`,
    reason,
  ].join("\n");

  try {
    const notify = await resend.emails.send({
      from,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
    });
    if (notify.error) {
      console.error("[contact] resend notify error:", notify.error);
      return { ok: false, error: "Could not send right now. Please try again." };
    }

    await resend.emails.send({
      from,
      to: email,
      replyTo: TO_EMAIL,
      subject: "We received your request",
      text: `Hi ${name.split(" ")[0] || name},\n\nThank you for reaching out. Someone from our team will get back to you to set up a conversation — no pressure, no obligation.\n\nWarmly,\nOrthopedic Spine Institute`,
    });

    return { ok: true };
  } catch (err) {
    console.error("[contact] resend threw:", err);
    return { ok: false, error: "Could not send right now. Please try again." };
  }
}
