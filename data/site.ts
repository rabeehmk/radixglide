/**
 * RadixGlide business details — the single place to edit contact information.
 *
 * Every empty string below is an unconfirmed detail. While empty, the site shows a clearly
 * marked "[ADD OFFICIAL …]" placeholder (or hides the feature, e.g. the floating WhatsApp
 * button). Fill these in with official details before launch.
 */

export const site = {
  name: "RadixGlide",
  tagline: "Ideas. Build. Grow.",
  /** Production domain, used for canonical URLs, sitemap and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.radixglide.com",
  description:
    "RadixGlide delivers customized software development, digital marketing, and complete IT solutions that help businesses build, scale, and succeed in the digital world.",
  positioning:
    "A technology and digital growth company helping businesses turn ideas into practical digital solutions.",

  contact: {
    /** e.g. "hello@yourdomain.com" */
    email: "radixgildetech@gmail.com",
    /** Display format, e.g. "+971 50 123 4567" */
    phone: "+91 75105 12105",
    /**
     * WhatsApp number in international format, e.g. "+971501234567".
     * Can also be set with the NEXT_PUBLIC_WHATSAPP_NUMBER environment variable.
     */
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+917510512105",
    /** e.g. "Dubai, United Arab Emirates" */
    location: "Calicut, Kerala, India",
    /** e.g. "Sunday – Thursday, 9:00 AM – 6:00 PM (GST)" */
    hours: "9:00 AM – 6:00 PM (IST)",
    /** Where CVs should be sent. Falls back to the contact page when empty. */
    careersEmail: "",
  },

  /** Full profile URLs. Empty links render as inactive icons. */
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
};

export const placeholders = {
  email: "[ADD OFFICIAL RADIXGLIDE EMAIL]",
  phone: "[ADD OFFICIAL RADIXGLIDE PHONE]",
  whatsapp: "[ADD OFFICIAL WHATSAPP NUMBER]",
  location: "[ADD OFFICIAL RADIXGLIDE LOCATION]",
  hours: "[ADD OFFICIAL WORKING HOURS]",
};

/** Default prefilled WhatsApp message. */
export const whatsappGreeting = "Hi RadixGlide! I'd like to discuss a project.";
