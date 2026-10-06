import type { FAQ } from "./services";

export const pricingFaqs: FAQ[] = [
  {
    q: "How does RadixGlide pricing work?",
    a: "Every project is different, so we price based on scope. After understanding your requirements, we recommend a solution and send a transparent, itemised quotation before any work begins.",
  },
  {
    q: "Can I request a custom package?",
    a: "Yes. The packages are starting points — we can combine development, marketing and support services into a package that fits your goals and budget.",
  },
  {
    q: "Do you provide monthly digital marketing plans?",
    a: "Yes. SEO, social media, paid advertising and content can be delivered as ongoing monthly engagements.",
  },
  {
    q: "Do you provide maintenance after development?",
    a: "Yes. We offer maintenance and support plans covering updates, monitoring, backups, bug fixes and improvements.",
  },
  {
    q: "Can software be upgraded later?",
    a: "Yes. We build with scalable architecture so new features, integrations and users can be added as your business grows.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope. A business website may take a few weeks, while custom software is often delivered in phases over several months. We agree a timeline before starting.",
  },
];

export type FAQCategory = { id: string; title: string; faqs: FAQ[] };

export const faqCategories: FAQCategory[] = [
  {
    id: "software-development",
    title: "Software Development",
    faqs: [
      {
        q: "Do you develop custom software?",
        a: "Yes. We build custom web applications, portals, dashboards, ERP/CRM modules, internal tools and SaaS platforms tailored to your workflows.",
      },
      {
        q: "Can you integrate third-party APIs?",
        a: "Yes. We integrate payment gateways, accounting tools, messaging platforms, CRMs and other third-party services through their APIs.",
      },
      {
        q: "Will I own the source code?",
        a: "Ownership terms are agreed in your contract. Our standard approach is that you own the custom code we build for you once the project is paid in full.",
      },
      {
        q: "Can you take over an existing software project?",
        a: "Often, yes. We start with a technical review of the existing codebase and then recommend the best way forward.",
      },
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    faqs: [
      {
        q: "How much does a custom website cost?",
        a: "Cost depends on the number of pages, design complexity, features and integrations. Tell us what you need and we'll send a transparent quotation.",
      },
      {
        q: "How long does a website project take?",
        a: "A typical business website takes a few weeks from approved scope to launch. Larger or more complex sites take longer — we agree the timeline upfront.",
      },
      {
        q: "Can I upgrade my existing website?",
        a: "Yes. We can improve, redesign or completely rebuild your existing website while preserving important content and SEO where possible.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. Where needed, we set up a content management system so your team can update pages, posts and media.",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    faqs: [
      {
        q: "Do you offer monthly marketing packages?",
        a: "Yes. We offer monthly engagements covering SEO, social media, paid advertising, content and reporting, tailored to your goals.",
      },
      {
        q: "Do you provide SEO?",
        a: "Yes — technical SEO, on-page optimisation, content strategy and local SEO, with regular reporting.",
      },
      {
        q: "Do you run Google and Meta ads?",
        a: "Yes. We plan, set up, track and optimise Google Ads and Meta (Facebook & Instagram) campaigns.",
      },
      {
        q: "Is ad spend included in your fees?",
        a: "No. Ad spend is paid directly to the advertising platforms and is separate from our management fee.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    faqs: pricingFaqs.slice(0, 3),
  },
  {
    id: "maintenance",
    title: "Maintenance",
    faqs: [
      {
        q: "Do you provide website maintenance?",
        a: "Yes. Maintenance plans include updates, security patches, monitoring, backups, bug fixes and small improvements.",
      },
      {
        q: "Do you maintain websites or software you didn't build?",
        a: "In many cases, yes — after a technical review to understand the existing setup.",
      },
      {
        q: "What happens if something breaks?",
        a: "Issues are handled according to the response times agreed in your support plan.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    faqs: [
      {
        q: "Can you build an online store for my business?",
        a: "Yes. We design and develop custom e-commerce experiences with product management, checkout, payments and order management.",
      },
      {
        q: "Which payment gateways do you support?",
        a: "We integrate the payment providers available in your market and suited to your business — we confirm options during scoping.",
      },
      {
        q: "Can you migrate my existing store?",
        a: "Yes. We can plan a migration of your products, customers and order history.",
      },
    ],
  },
  {
    id: "general",
    title: "Working With Us",
    faqs: [
      {
        q: "Do you work with international clients?",
        a: "Yes. We work with clients in different countries and collaborate remotely through calls, messaging and shared project tools.",
      },
      {
        q: "How do I start a project?",
        a: "Send us an enquiry through the contact page or WhatsApp. We'll schedule a conversation to understand your needs and then send a proposal.",
      },
      {
        q: "Do you offer a free consultation?",
        a: "Yes. The first conversation to understand your requirements is free.",
      },
    ],
  },
];
