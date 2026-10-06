export type ProjectFilter = "Software" | "Websites" | "E-commerce" | "Digital Solutions";

export const projectFilters: ("All" | ProjectFilter)[] = [
  "All",
  "Software",
  "Websites",
  "E-commerce",
  "Digital Solutions",
];

export type Project = {
  slug: string;
  /** Short brand name used in cards. */
  name: string;
  /** Full client / brand name. */
  client: string;
  title: string;
  category: string;
  industry: string;
  filters: ProjectFilter[];
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  /** Confirmed technologies only. Leave empty until verified — the page shows a placeholder. */
  technologies: string[];
  /** Verified outcomes only. Leave empty until confirmed with the client. */
  outcomes: string[];
  /** Optional real images in /public (e.g. "/projects/otomation-1.webp"). Mockups render when empty. */
  cover?: string;
  screenshots: string[];
  preview: "invoice" | "lms" | "security" | "store";
};

/*
 * DRAFT COPY — the overview, challenge, solution and feature text below is written from
 * the project titles provided. Review each case study with the actual project scope and
 * client approval before publishing.
 */
export const projects: Project[] = [
  {
    slug: "otomation",
    name: "Otomation",
    client: "Otomation",
    title: "UAE E-Invoicing Platform",
    category: "SaaS · FinTech",
    industry: "Finance & Compliance",
    filters: ["Software", "Digital Solutions"],
    description:
      "An e-invoicing platform designed to help UAE businesses create, manage and track invoices digitally.",
    overview:
      "Otomation is an e-invoicing platform for businesses in the UAE. The goal was a clear, reliable system for creating, managing and tracking invoices as businesses move towards digital invoicing.",
    challenge:
      "Invoicing workflows often involve manual data entry, scattered records and limited visibility into invoice status. The platform needed to make e-invoicing approachable for businesses while staying structured, secure and ready for evolving requirements.",
    solution:
      "RadixGlide designed and developed a web-based platform with a clean dashboard, structured invoice management and a scalable architecture that can be extended as requirements evolve.",
    features: [
      "Invoice creation and management",
      "Customer and business records",
      "Invoice status tracking",
      "Dashboard overview",
      "Role-based access",
      "Scalable, extensible architecture",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "invoice",
  },
  {
    slug: "edufix",
    name: "Edufix",
    client: "Edufix Learning Academy",
    title: "Learning Management Platform",
    category: "EdTech · Web App",
    industry: "Education",
    filters: ["Software", "Websites"],
    description:
      "A learning management platform bringing courses, classes and student progress into one place.",
    overview:
      "Edufix Learning Academy needed a digital learning platform that makes it easy for students to access courses and for the academy to manage content and track progress.",
    challenge:
      "Course content, student communication and progress tracking were spread across different tools, making the learning experience inconsistent and administration time-consuming.",
    solution:
      "RadixGlide built a learning management platform with organised course content, a student-friendly interface and admin tools for managing learners and materials.",
    features: [
      "Course and lesson management",
      "Student accounts and dashboards",
      "Video lesson delivery",
      "Progress tracking",
      "Admin panel",
      "Responsive, mobile-friendly design",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "lms",
  },
  {
    slug: "eyetrack-solutions",
    name: "Eyetrack Solutions",
    client: "Eyetrack Solutions",
    title: "Smart Security & CCTV",
    category: "Security · Brand & Web",
    industry: "Security & Surveillance",
    filters: ["Websites", "Digital Solutions"],
    description:
      "A professional digital presence for a smart security and CCTV solutions provider.",
    overview:
      "Eyetrack Solutions provides smart security and CCTV solutions. The project focused on a professional digital presence that communicates trust and makes it easy for prospects to enquire.",
    challenge:
      "Security is a trust-driven purchase. The business needed to present its services clearly, look credible to residential and commercial customers, and capture enquiries effectively.",
    solution:
      "RadixGlide created a clear, modern website structure showcasing services and solutions, supported by strong calls to action and lead capture.",
    features: [
      "Service and solution showcase",
      "Trust-focused visual design",
      "Enquiry and lead capture",
      "WhatsApp and call actions",
      "SEO-ready structure",
      "Mobile-first layout",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "security",
  },
  {
    slug: "petalbox",
    name: "PetalBox",
    client: "PetalBox",
    title: "Premium E-commerce Platform",
    category: "E-commerce · Growth",
    industry: "Retail & Gifting",
    filters: ["E-commerce", "Websites"],
    description:
      "A premium online store with a refined shopping experience and a smooth checkout.",
    overview:
      "PetalBox is a premium gifting brand. The project focused on an elegant online store that reflects the brand and makes ordering simple.",
    challenge:
      "Premium products need a premium experience. The store had to showcase products beautifully, keep the buying journey simple and support marketing activity.",
    solution:
      "RadixGlide designed and developed a brand-led e-commerce experience with clear product presentation, a streamlined checkout and marketing-ready integrations.",
    features: [
      "Brand-led storefront design",
      "Product catalogue management",
      "Streamlined cart and checkout",
      "Order management",
      "Marketing and analytics integrations",
      "Responsive shopping experience",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "store",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
