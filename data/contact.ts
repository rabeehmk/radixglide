/** Options for the contact / enquiry form. */

export const enquiryServices = [
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "E-commerce Development",
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Branding & Design",
  "UI/UX Design",
  "IT Consulting",
  "Other",
];

/** EDIT the bracketed ranges with RadixGlide's real budget bands (include currency). */
export const budgetRanges = [
  "Not sure yet",
  "Under [ADD AMOUNT]",
  "[ADD RANGE 1]",
  "[ADD RANGE 2]",
  "Enterprise / Custom",
];

export const projectTypes = [
  "New website or software",
  "Redesign or upgrade",
  "Ongoing digital marketing",
  "Maintenance & support",
  "Consultation / not sure yet",
];

/** Maps ?plan= query values (from the pricing page) to a starting message. */
export const planMessages: Record<string, string> = {
  launch: "I'm interested in the Launch package.",
  growth: "I'm interested in the Growth package.",
  business: "I'm interested in the Business package.",
  enterprise: "I'd like to request an Enterprise consultation.",
  custom: "I'd like a custom quote.",
};
