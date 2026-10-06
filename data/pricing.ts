export type PricingPlan = {
  no: string;
  name: string;
  audience: string;
  /** "Custom Quote", or e.g. "Starting from AED X" once confirmed. */
  price: string;
  priceNote: string;
  includes: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

/** No prices are published yet — update `price` when RadixGlide confirms starting prices. */
export const pricingPlans: PricingPlan[] = [
  {
    no: "01",
    name: "Launch",
    audience: "For startups and small businesses beginning their digital journey.",
    price: "Custom Quote",
    priceNote: "Scoped to your pages and features",
    includes: [
      "Business Website",
      "Responsive UI",
      "Basic SEO Setup",
      "Contact / Lead Form",
      "Analytics Setup",
      "Basic Maintenance",
    ],
    cta: { label: "Start Your Project", href: "/contact?plan=launch" },
  },
  {
    no: "02",
    name: "Growth",
    audience: "For businesses looking to improve their digital presence and generate more leads.",
    price: "Custom Quote",
    priceNote: "Website + monthly growth options",
    includes: [
      "Advanced Website",
      "SEO",
      "Social Media Setup",
      "Google / Meta Ads Setup",
      "Conversion Optimization",
      "Analytics & Reporting",
      "Ongoing Support",
    ],
    cta: { label: "Choose Growth", href: "/contact?plan=growth" },
    highlighted: true,
  },
  {
    no: "03",
    name: "Business",
    audience: "For companies requiring customized software and integrated digital solutions.",
    price: "Let's Discuss Your Requirements",
    priceNote: "Quoted after a discovery session",
    includes: [
      "Custom Software",
      "Web Application",
      "API Integration",
      "Dashboard / Admin Panel",
      "Automation",
      "Advanced SEO",
      "Performance Marketing",
      "Technical Support",
    ],
    cta: { label: "Talk to an Expert", href: "/contact?plan=business" },
  },
  {
    no: "04",
    name: "Enterprise",
    audience: "For larger organizations requiring scalable technology solutions.",
    price: "Custom Quote",
    priceNote: "Tailored architecture and engagement",
    includes: [
      "Enterprise Software",
      "Custom Architecture",
      "Cloud Solutions",
      "Third-Party Integrations",
      "Security & Performance",
      "Dedicated Support",
      "Digital Growth Strategy",
    ],
    cta: { label: "Request a Consultation", href: "/contact?plan=enterprise" },
  },
];

export const pricingSteps = [
  { title: "Tell us what you need", text: "Share your goals, challenges and any requirements you already have." },
  { title: "We understand your requirements", text: "A discovery conversation to clarify scope, priorities and constraints." },
  { title: "We prepare the solution", text: "We recommend the right approach, features and timeline." },
  { title: "We provide a transparent quotation", text: "A clear, itemised quote — no hidden costs." },
  { title: "We build, launch and support", text: "Delivery with regular updates, followed by ongoing support." },
];
