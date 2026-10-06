import { site, whatsappGreeting } from "@/data/site";

/** Digits only, as wa.me expects (country code, no "+", spaces or dashes). */
export function whatsappDigits(): string {
  return site.contact.whatsapp.replace(/\D/g, "");
}

export function hasWhatsApp(): boolean {
  return whatsappDigits().length >= 8;
}

/** wa.me deep link with a prefilled message, or null when no number is configured. */
export function whatsappLink(message: string = whatsappGreeting): string | null {
  if (!hasWhatsApp()) return null;
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject?: string): string | null {
  if (!site.contact.email) return null;
  return `mailto:${site.contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

export function phoneLink(): string | null {
  if (!site.contact.phone) return null;
  return `tel:${site.contact.phone.replace(/[^\d+]/g, "")}`;
}
