export type ProjectFilter = "Software" | "Websites" | "E-commerce" | "Digital Solutions";

export const projectFilters: ("All" | ProjectFilter)[] = ["All", "Websites", "E-commerce", "Digital Solutions"];

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
  preview: "interior" | "photography" | "cafe" | "store";
};

/*
 * DRAFT COPY — the overview, challenge, solution and feature text below is written from
 * the project names provided. Review each case study with the actual project scope and
 * client approval before publishing.
 */
export const projects: Project[] = [
  {
    slug: "artecs-prime-decore",
    name: "Artecs Prime Decore",
    client: "Artecs Prime Decore",
    title: "Interior Design & Décor Website",
    category: "Interiors · Brand & Web",
    industry: "Interior Design & Décor",
    filters: ["Websites", "Digital Solutions"],
    description:
      "An elegant, portfolio-led website for an interior design and décor studio, built to turn visitors into consultation requests.",
    overview:
      "Artecs Prime Decore is an interior design and décor company. The project focused on a premium online presence that showcases their work, explains their services and makes it effortless for homeowners and businesses to book a consultation.",
    challenge:
      "Interior design is a visual, trust-driven decision. The studio needed a website that does justice to the quality of its finished spaces, presents a wide range of services clearly and captures serious enquiries rather than casual browsing.",
    solution:
      "RadixGlide designed and developed a refined, image-first website with a categorised project gallery, clear service pages and well-placed consultation calls to action, supported by WhatsApp and call shortcuts for quick enquiries.",
    features: [
      "Categorised project gallery",
      "Service pages for residential and commercial interiors",
      "Consultation booking and enquiry forms",
      "WhatsApp and click-to-call actions",
      "SEO-ready page structure",
      "Fast, mobile-first layout",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "interior",
  },
  {
    slug: "photography-portfolio",
    name: "Photography Portfolio",
    client: "Professional Photographer",
    title: "Photography Portfolio & Booking Website",
    category: "Portfolio · Web Design",
    industry: "Photography & Creative",
    filters: ["Websites"],
    description:
      "A cinematic portfolio website that puts the photographs first and makes booking a shoot simple.",
    overview:
      "A professional photographer needed a portfolio website to showcase their best work across weddings, portraits and events, and to convert admirers into paying clients.",
    challenge:
      "Photography websites live or die by image quality and speed. The site had to display large, high-resolution galleries beautifully without slowing down, while keeping the path to booking short and obvious.",
    solution:
      "RadixGlide built a minimal, gallery-focused website with optimised image delivery, curated collections by category, and a clear packages and booking flow so prospective clients can enquire in a few taps.",
    features: [
      "Full-screen curated galleries",
      "Collections by category (weddings, portraits, events)",
      "Optimised, fast-loading images",
      "Packages and booking enquiry form",
      "Instagram and WhatsApp integration",
      "Responsive design for every screen",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "photography",
  },
  {
    slug: "cafe-website",
    name: "Café Website",
    client: "Café & Coffee House",
    title: "Café Website & Digital Menu",
    category: "Hospitality · Web",
    industry: "Food & Beverage",
    filters: ["Websites", "Digital Solutions"],
    description:
      "A warm, inviting café website with a digital menu, location details and easy table reservations.",
    overview:
      "A café wanted a website that captures the feel of the space, shows its menu clearly and helps nearby customers find them, call them or reserve a table.",
    challenge:
      "Customers searching for a café on their phone want the menu, opening hours and directions within seconds. The site needed to be fast on mobile, simple to keep up to date, and reflect the café's atmosphere.",
    solution:
      "RadixGlide designed and developed a mobile-first website with a digital menu, an ambience gallery, a reservation enquiry flow and integrated maps, with local SEO foundations to help the café appear in nearby searches.",
    features: [
      "Digital menu with categories",
      "Table reservation enquiries",
      "Ambience and food gallery",
      "Google Maps location and opening hours",
      "Click-to-call and WhatsApp ordering",
      "Local SEO setup",
    ],
    technologies: [],
    outcomes: [],
    screenshots: [],
    preview: "cafe",
  },
  {
    slug: "latefite",
    name: "Latefite",
    client: "Latefite",
    title: "Accessories E-commerce Store",
    category: "E-commerce · Retail",
    industry: "Fashion & Accessories",
    filters: ["E-commerce", "Websites"],
    description:
      "A stylish online store for an accessories brand, with a smooth shopping journey from browsing to checkout.",
    overview:
      "Latefite is an accessories shop that wanted to sell online. The project focused on a modern e-commerce store that showcases its collections and makes ordering quick and secure.",
    challenge:
      "Accessories are impulse and style-led purchases. The store had to present products attractively, make filtering through collections effortless and keep checkout short so shoppers complete their orders.",
    solution:
      "RadixGlide designed and developed a brand-led e-commerce store with organised collections, rich product pages, a streamlined cart and checkout, and an admin panel for managing products and orders.",
    features: [
      "Collections and category filtering",
      "Product pages with image galleries",
      "Cart, wishlist and secure checkout",
      "Online payment integration",
      "Order and inventory management",
      "Mobile-first shopping experience",
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
