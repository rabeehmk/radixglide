/** Shared enquiry types and validation — used by the contact form and /api/contact. */

export type Enquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  projectType: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website?: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export const emptyEnquiry: Enquiry = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  projectType: "",
  message: "",
  consent: false,
  website: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;

export function validateEnquiry(e: Partial<Enquiry>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!e.name || e.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!e.email || !EMAIL.test(e.email.trim())) errors.email = "Please enter a valid email address.";
  if (e.phone && !PHONE.test(e.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (!e.service) errors.service = "Please select the service you need.";
  if (!e.message || e.message.trim().length < 10)
    errors.message = "Please tell us a little about your project (at least 10 characters).";
  if (!e.consent) errors.consent = "Please agree so we can contact you about your enquiry.";
  if ((e.name?.length ?? 0) > 120 || (e.company?.length ?? 0) > 160 || (e.message?.length ?? 0) > 5000)
    errors.message = errors.message ?? "Some fields are too long.";
  return errors;
}

/** Plain-text summary, used for emails and the WhatsApp fallback. */
export function enquirySummary(e: Enquiry): string {
  const details = [
    `New project enquiry — ${e.service}`,
    `Name: ${e.name}`,
    e.company && `Company: ${e.company}`,
    `Email: ${e.email}`,
    e.phone && `Phone / WhatsApp: ${e.phone}`,
    e.budget && `Budget: ${e.budget}`,
    e.projectType && `Project type: ${e.projectType}`,
  ].filter(Boolean);
  return `${details.join("\n")}\n\n${e.message}`;
}
