export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

/**
 * PLACEHOLDERS — replace with real, approved client testimonials before launch.
 * Names, roles and companies are intentionally left as markers so nothing is
 * attributed to a real person or brand without their permission.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Add an approved client quote here — ideally about the problem RadixGlide solved and what changed for the business afterwards.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    rating: 5,
  },
  {
    quote:
      "Add a second testimonial here. Quotes that mention the working relationship — communication, timelines, support — build the most trust.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    rating: 5,
  },
  {
    quote:
      "Add a testimonial from a digital marketing client here, focused on how the campaigns or brand presence improved.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    rating: 5,
  },
];
