import {
  Code2,
  Globe,
  Smartphone,
  ShoppingBag,
  LayoutTemplate,
  TrendingUp,
  Search,
  Share2,
  Target,
  Palette,
  Workflow,
  Lightbulb,
  Cloud,
  Wrench,
  Camera,
  type LucideIcon,
} from "lucide-react";

export type ServiceGroup = "Build" | "Grow" | "Support";

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  group: ServiceGroup;
  /** One-line description for cards. */
  summary: string;
  hero: { heading: string; text: string };
  problem: { heading: string; text: string; points: string[] };
  solution: { heading: string; text: string };
  features: { title: string; text: string }[];
  benefits: string[];
  technologies: string[];
  faqs: FAQ[];
  cta: string;
};

/** Delivery process shared by every service page. */
export const serviceProcess = [
  { no: "01", title: "Discovery", text: "We learn your business, users and goals, and agree what success looks like." },
  { no: "02", title: "Plan & Scope", text: "A clear scope, timeline and transparent quotation — before any work begins." },
  { no: "03", title: "Design & Build", text: "Iterative design and development with regular check-ins and demos." },
  { no: "04", title: "Launch", text: "Testing, deployment and handover, with everything documented." },
  { no: "05", title: "Support & Grow", text: "Ongoing maintenance, improvements and growth support." },
];

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: Code2,
    group: "Build",
    summary: "Scalable and tailored software solutions built around your business needs.",
    hero: {
      heading: "Custom Software Built Around Your Business",
      text: "Replace spreadsheets, disconnected tools and manual workarounds with software designed for exactly how your business operates.",
    },
    problem: {
      heading: "Off-the-shelf tools rarely fit the way you work",
      text: "As businesses grow, generic software starts to slow them down. Teams end up adapting their processes to the tool instead of the other way around.",
      points: [
        "Critical data scattered across spreadsheets and apps",
        "Repetitive manual work that eats into team time",
        "Licences for features you never use — and gaps you still need to fill",
        "Systems that can't scale with new branches, users or services",
      ],
    },
    solution: {
      heading: "Software shaped around your workflows",
      text: "We design and build web-based systems — portals, dashboards, ERP and CRM modules, internal tools and SaaS platforms — that match your processes, connect with your existing tools and grow with you.",
    },
    features: [
      { title: "Web applications & portals", text: "Secure, browser-based systems for teams, customers and partners." },
      { title: "Dashboards & admin panels", text: "Real-time visibility of the numbers that matter to your business." },
      { title: "ERP & CRM modules", text: "Custom modules for operations, sales, inventory, billing and more." },
      { title: "API integrations", text: "Connect payment gateways, accounting tools, messaging and third-party services." },
      { title: "Role-based access", text: "The right permissions for every user, with audit-friendly activity logs." },
      { title: "Scalable architecture", text: "Clean, documented code designed to evolve as your requirements grow." },
    ],
    benefits: [
      "Less manual work and fewer errors",
      "One source of truth for your data",
      "Software you own and can extend",
      "Built to scale with your business",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "REST APIs", "AWS"],
    faqs: [
      {
        q: "How long does a custom software project take?",
        a: "It depends on scope. A focused internal tool can take a few weeks, while larger platforms are delivered in phases over several months. We agree a timeline during scoping.",
      },
      {
        q: "Will I own the source code?",
        a: "Ownership terms are agreed in the project contract. Our standard approach is that you own the custom code we build for you once the project is paid in full.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Yes. We regularly integrate with existing databases, accounting software, payment gateways and third-party APIs.",
      },
    ],
    cta: "Discuss Your Project",
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: Globe,
    group: "Build",
    summary: "Fast, modern and responsive websites designed to turn visitors into customers.",
    hero: {
      heading: "Websites That Work as Hard as You Do",
      text: "A fast, modern and search-friendly website that presents your business with confidence and turns visitors into enquiries.",
    },
    problem: {
      heading: "An outdated website quietly costs you customers",
      text: "Visitors judge a business within seconds. Slow pages, unclear messaging and poor mobile experiences send potential customers to competitors.",
      points: [
        "Slow loading, especially on mobile",
        "No clear call to action or enquiry path",
        "Hard to update without a developer",
        "Invisible in search results",
      ],
    },
    solution: {
      heading: "Conversion-focused websites, built properly",
      text: "We plan, design and develop websites around your customers' journey — with clear messaging, strong visuals, technical SEO foundations and a content setup your team can manage.",
    },
    features: [
      { title: "Responsive design", text: "A polished experience on phones, tablets, laptops and large screens." },
      { title: "Performance-first build", text: "Optimised images, clean code and fast hosting for quick load times." },
      { title: "SEO foundations", text: "Semantic structure, metadata, sitemaps and schema from day one." },
      { title: "Lead capture", text: "Enquiry forms, WhatsApp and call-to-action flows that convert." },
      { title: "Easy content updates", text: "Manage pages, posts and media without touching code." },
      { title: "Analytics setup", text: "Track visits, enquiries and campaign performance." },
    ],
    benefits: [
      "A stronger first impression",
      "More enquiries from the same traffic",
      "Better visibility in search engines",
      "A site your team can update",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare", "AWS"],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Cost depends on the number of pages, features and integrations. Share your requirements and we'll provide a transparent quotation.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We can redesign and rebuild an existing site while preserving important content and search rankings where possible.",
      },
      {
        q: "Will my website work on mobile?",
        a: "Every website we build is designed mobile-first and tested across screen sizes.",
      },
    ],
    cta: "Start Your Website",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    group: "Build",
    summary: "Mobile applications with intuitive experiences your customers will actually use.",
    hero: {
      heading: "Mobile Apps People Enjoy Using",
      text: "From customer-facing apps to field-team tools, we design and build mobile experiences that are simple, reliable and built for real use.",
    },
    problem: {
      heading: "Your customers live on their phones",
      text: "If booking, ordering or managing an account is difficult on mobile, people give up. Teams in the field also need tools that work on the go.",
      points: [
        "Mobile experiences that feel clunky or slow",
        "No direct channel to engage repeat customers",
        "Field teams relying on calls and paper",
        "Data that doesn't sync with core systems",
      ],
    },
    solution: {
      heading: "Purpose-built apps connected to your business",
      text: "We plan the user journeys, design the interface and build apps that connect securely to your backend systems — with notifications, offline support and analytics where they add value.",
    },
    features: [
      { title: "Cross-platform apps", text: "One codebase for iOS and Android where it suits the project." },
      { title: "Progressive web apps", text: "App-like experiences that install straight from the browser." },
      { title: "Push notifications", text: "Timely updates that bring users back." },
      { title: "Secure authentication", text: "Login, roles and data protection done properly." },
      { title: "Backend & API", text: "Reliable APIs and admin panels to manage your app's content and users." },
      { title: "Store submission", text: "Guidance through App Store and Google Play publishing." },
    ],
    benefits: [
      "A direct channel to your customers",
      "Faster workflows for mobile teams",
      "Data connected to your systems",
      "Experiences built for small screens",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "REST APIs", "AWS"],
    faqs: [
      {
        q: "Do you build for both iOS and Android?",
        a: "Yes. Depending on your requirements we recommend a cross-platform approach or a progressive web app.",
      },
      {
        q: "Can the app connect to our website or software?",
        a: "Yes. We build or extend APIs so your app shares data with your existing systems.",
      },
      {
        q: "Do you help publish the app?",
        a: "We guide you through App Store and Google Play submission and requirements.",
      },
    ],
    cta: "Discuss Your App",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    icon: ShoppingBag,
    group: "Build",
    summary: "High-performing online stores designed to convert visitors into customers.",
    hero: {
      heading: "Online Stores Built to Sell",
      text: "Beautiful, fast e-commerce experiences with a frictionless checkout — and the integrations you need to run the business behind it.",
    },
    problem: {
      heading: "Every extra click costs you a sale",
      text: "Slow product pages, confusing navigation and complicated checkouts lead to abandoned carts. Behind the scenes, manual order handling slows growth.",
      points: [
        "High cart abandonment",
        "Product catalogues that are hard to manage",
        "Disconnected payments, shipping and inventory",
        "Limited insight into what customers buy and why",
      ],
    },
    solution: {
      heading: "Commerce built around your products and customers",
      text: "We design storefronts that showcase your products, streamline checkout and connect payments, delivery and inventory — then help you drive traffic with performance marketing.",
    },
    features: [
      { title: "Custom storefronts", text: "A shopping experience that reflects your brand, not a template." },
      { title: "Streamlined checkout", text: "Fewer steps, trusted payment options and guest checkout." },
      { title: "Payment gateways", text: "Integration with the payment providers available in your market." },
      { title: "Inventory & orders", text: "Admin tools to manage products, stock, orders and customers." },
      { title: "Marketing integrations", text: "Analytics, pixels and product feeds for advertising." },
      { title: "SEO-ready catalogue", text: "Structured product data that search engines understand." },
    ],
    benefits: [
      "Higher conversion potential",
      "Less manual order handling",
      "A brand-led shopping experience",
      "Ready for advertising and growth",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "MySQL", "REST APIs", "Cloudflare"],
    faqs: [
      {
        q: "Which payment gateways can you integrate?",
        a: "We integrate the gateways available in your region and suited to your business. We'll confirm options during scoping.",
      },
      {
        q: "Can you migrate my existing store?",
        a: "Yes. We can plan a migration of products, customers and orders from your current platform.",
      },
      {
        q: "Do you help with marketing after launch?",
        a: "Yes. Our digital marketing team can run SEO, social and paid campaigns for your store.",
      },
    ],
    cta: "Build Your Store",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: LayoutTemplate,
    group: "Build",
    summary: "Simple, intuitive and visually engaging digital experiences.",
    hero: {
      heading: "Design That Makes Complex Things Simple",
      text: "Research-led UX and polished interfaces that help people understand, trust and use your product.",
    },
    problem: {
      heading: "Confusing products lose users",
      text: "When people can't find what they need, they leave — or they call your support team. Poor UX quietly increases costs and lowers conversions.",
      points: [
        "Users dropping off at key steps",
        "Inconsistent interfaces across screens",
        "Features that exist but nobody finds",
        "Design decisions made without user input",
      ],
    },
    solution: {
      heading: "Experiences designed around real users",
      text: "We map user journeys, wireframe flows and craft interface systems that are consistent, accessible and ready for development.",
    },
    features: [
      { title: "User research", text: "Understand your users' goals, frustrations and context." },
      { title: "Wireframes & flows", text: "Plan the structure before visual design begins." },
      { title: "Interactive prototypes", text: "Click-through prototypes to test ideas early." },
      { title: "Visual UI design", text: "Modern, on-brand interfaces with attention to detail." },
      { title: "Design systems", text: "Reusable components that keep products consistent." },
      { title: "Accessibility", text: "Inclusive design that works for more people." },
    ],
    benefits: [
      "Easier-to-use products",
      "Fewer support requests",
      "Faster, smoother development",
      "A consistent brand experience",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Tailwind CSS", "React"],
    faqs: [
      {
        q: "Can you design for an existing product?",
        a: "Yes. We can audit your current product's UX and redesign the parts that matter most.",
      },
      {
        q: "Do you hand designs over to our developers?",
        a: "Yes. We provide organised design files and specifications, or our team can build it for you.",
      },
      {
        q: "Do you design mobile and desktop?",
        a: "Yes. We design responsive experiences across all screen sizes.",
      },
    ],
    cta: "Discuss Your Design",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    group: "Grow",
    summary: "SEO, social media, PPC and performance marketing focused on measurable growth.",
    hero: {
      heading: "Digital Marketing Focused on Real Growth",
      text: "Strategy, content and campaigns across search, social and paid media — measured against the outcomes your business cares about.",
    },
    problem: {
      heading: "Activity isn't the same as growth",
      text: "Many businesses post, boost and advertise without a clear strategy — then struggle to tell what's working.",
      points: [
        "No clear marketing strategy or funnel",
        "Ad spend without tracking or attribution",
        "Inconsistent content and branding",
        "Leads that don't turn into customers",
      ],
    },
    solution: {
      heading: "Integrated marketing, measured properly",
      text: "We build a strategy around your audience and goals, then execute across the right channels — with tracking in place so every decision is based on data.",
    },
    features: [
      { title: "Marketing strategy", text: "Audience, positioning, channels and goals in one clear plan." },
      { title: "SEO", text: "Sustainable organic visibility for the searches that matter." },
      { title: "Social media", text: "Consistent, on-brand content and community management." },
      { title: "Paid advertising", text: "Google and Meta campaigns built around conversions." },
      { title: "Lead generation", text: "Landing pages and funnels that capture qualified enquiries." },
      { title: "Analytics & reporting", text: "Clear reports on what's working and what's next." },
    ],
    benefits: [
      "A clear strategy instead of guesswork",
      "Better use of marketing budget",
      "Consistent brand presence",
      "Decisions based on data",
    ],
    technologies: ["Google Analytics", "Google Search Console", "Google Ads", "Meta Ads Manager", "Tag Manager"],
    faqs: [
      {
        q: "Do you offer monthly marketing plans?",
        a: "Yes. We offer ongoing monthly engagements tailored to your goals and channels.",
      },
      {
        q: "How soon will I see results?",
        a: "Paid campaigns can generate traffic quickly, while SEO and brand building compound over months. We set realistic expectations upfront.",
      },
      {
        q: "Will I get reports?",
        a: "Yes. You'll receive regular reports covering performance, insights and next steps.",
      },
    ],
    cta: "Grow Your Business",
  },
  {
    slug: "seo",
    title: "SEO",
    icon: Search,
    group: "Grow",
    summary: "Search engine optimisation that builds sustainable organic visibility.",
    hero: {
      heading: "Be Found When Customers Are Searching",
      text: "Technical, on-page and content SEO that improves your visibility for the searches that bring real customers.",
    },
    problem: {
      heading: "If they can't find you, they'll find a competitor",
      text: "Most buying journeys start with a search. Without SEO, your website may be invisible to the people actively looking for what you offer.",
      points: [
        "Low rankings for important keywords",
        "Technical issues holding the site back",
        "Thin content that doesn't answer questions",
        "No local search presence",
      ],
    },
    solution: {
      heading: "SEO built on strong foundations",
      text: "We fix technical issues, optimise your pages, create helpful content and strengthen local search — then track progress month by month.",
    },
    features: [
      { title: "SEO audit", text: "A clear picture of technical, content and competitor gaps." },
      { title: "Keyword research", text: "Target the terms your customers actually use." },
      { title: "On-page optimisation", text: "Titles, structure, content and internal links." },
      { title: "Technical SEO", text: "Speed, indexing, schema and site health." },
      { title: "Local SEO", text: "Google Business Profile and local visibility." },
      { title: "Content strategy", text: "Helpful content that earns rankings and trust." },
    ],
    benefits: [
      "Sustainable, compounding traffic",
      "Less reliance on paid ads",
      "Higher-intent visitors",
      "Stronger credibility",
    ],
    technologies: ["Google Search Console", "Google Analytics", "Schema.org", "Next.js"],
    faqs: [
      {
        q: "How long does SEO take?",
        a: "SEO is a long-term investment. Improvements typically build over several months depending on competition and starting point.",
      },
      {
        q: "Can you guarantee first-page rankings?",
        a: "No honest agency can guarantee rankings. We focus on proven practices and transparent reporting.",
      },
      {
        q: "Do you do local SEO?",
        a: "Yes, including Google Business Profile optimisation and local content.",
      },
    ],
    cta: "Improve Your Visibility",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Share2,
    group: "Grow",
    summary: "Consistent, creative social media that builds your brand and community.",
    hero: {
      heading: "Social Media That Builds Real Connections",
      text: "Strategy, content creation and community management that keep your brand visible, consistent and engaging.",
    },
    problem: {
      heading: "Posting without a plan rarely works",
      text: "Inconsistent posting, off-brand visuals and no clear purpose make it hard for social media to contribute to business growth.",
      points: [
        "Irregular posting schedule",
        "Content that doesn't reflect the brand",
        "Low engagement and reach",
        "No connection between social and sales",
      ],
    },
    solution: {
      heading: "A consistent, strategic social presence",
      text: "We define your content pillars, create on-brand posts and videos, manage your calendar and connect social activity with your wider marketing goals.",
    },
    features: [
      { title: "Social strategy", text: "Platforms, audience, tone and content pillars." },
      { title: "Content creation", text: "Graphics, short-form video and copywriting." },
      { title: "Content calendar", text: "Planned, consistent publishing." },
      { title: "Community management", text: "Timely, on-brand responses to your audience." },
      { title: "Paid social", text: "Targeted campaigns to extend reach." },
      { title: "Monthly insights", text: "What performed, and what to do next." },
    ],
    benefits: [
      "Consistent brand visibility",
      "Stronger audience relationships",
      "Content that reflects your brand",
      "Social activity tied to goals",
    ],
    technologies: ["Meta Business Suite", "Instagram", "LinkedIn", "Meta Ads Manager"],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "We recommend platforms based on where your audience is — commonly Instagram, Facebook, LinkedIn and YouTube.",
      },
      {
        q: "Do you create the content?",
        a: "Yes. Our creative team produces graphics, video and captions aligned with your brand.",
      },
      {
        q: "Do I approve posts before publishing?",
        a: "Yes. We share the content calendar for review before anything goes live.",
      },
    ],
    cta: "Grow Your Audience",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    icon: Target,
    group: "Grow",
    summary: "Google Ads, Meta Ads and PPC campaigns optimised for conversions.",
    hero: {
      heading: "Paid Campaigns Built Around Results",
      text: "Google Ads, Meta Ads and PPC campaigns planned, tracked and optimised for leads and sales — not vanity metrics.",
    },
    problem: {
      heading: "Ad spend without tracking is guesswork",
      text: "Without proper tracking and optimisation, it's impossible to know which campaigns drive real enquiries and sales.",
      points: [
        "Missing or broken conversion tracking",
        "Broad targeting that wastes budget",
        "Landing pages that don't convert",
        "No regular testing or optimisation",
      ],
    },
    solution: {
      heading: "Data-driven paid media",
      text: "We set up accurate tracking, build focused campaigns, test creatives and landing pages, and optimise continuously based on performance data.",
    },
    features: [
      { title: "Google Ads", text: "Search, Performance Max, Display and YouTube campaigns." },
      { title: "Meta Ads", text: "Facebook and Instagram campaigns with precise targeting." },
      { title: "Conversion tracking", text: "Accurate measurement of leads, calls and sales." },
      { title: "Landing pages", text: "Focused pages designed to convert campaign traffic." },
      { title: "Creative testing", text: "Test messages and visuals to improve results." },
      { title: "Transparent reporting", text: "Clear reporting on spend and outcomes." },
    ],
    benefits: [
      "Measurable return on ad spend",
      "Less wasted budget",
      "Faster lead generation",
      "Continuous improvement",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics", "Tag Manager"],
    faqs: [
      {
        q: "Is ad spend included in your fee?",
        a: "Ad spend is paid directly to the platforms and is separate from our management fee.",
      },
      {
        q: "What budget do I need?",
        a: "It depends on your market and goals. We'll recommend a starting budget during planning.",
      },
      {
        q: "Will I have access to my ad accounts?",
        a: "Yes. Ad accounts should be owned by your business, with access granted to our team.",
      },
    ],
    cta: "Launch Your Campaigns",
  },
  {
    slug: "branding-creative-design",
    title: "Branding & Creative Design",
    icon: Palette,
    group: "Grow",
    summary: "Build a memorable brand identity through strategy, design and creative content.",
    hero: {
      heading: "Brands People Remember",
      text: "Brand strategy, visual identity and creative design that make your business recognisable, credible and consistent everywhere.",
    },
    problem: {
      heading: "Inconsistent branding weakens trust",
      text: "When your logo, colours, tone and visuals change from one touchpoint to the next, customers find it harder to remember and trust you.",
      points: [
        "A brand that no longer reflects the business",
        "Inconsistent visuals across channels",
        "No clear guidelines for the team",
        "Marketing materials that look generic",
      ],
    },
    solution: {
      heading: "A complete, consistent brand system",
      text: "We clarify your positioning, design your visual identity and create guidelines and assets so your brand looks and sounds right everywhere.",
    },
    features: [
      { title: "Brand strategy", text: "Positioning, personality and messaging." },
      { title: "Logo & identity", text: "Logo, colour palette, typography and visual language." },
      { title: "Brand guidelines", text: "Clear rules your team and partners can follow." },
      { title: "Marketing collateral", text: "Brochures, presentations and print materials." },
      { title: "Social templates", text: "On-brand templates for consistent content." },
      { title: "Packaging & signage", text: "Brand applications in the physical world." },
    ],
    benefits: [
      "Instant recognition",
      "Greater credibility",
      "Consistency across channels",
      "Faster content production",
    ],
    technologies: ["Brand Strategy", "Visual Identity", "Figma", "Adobe Creative Suite"],
    faqs: [
      {
        q: "Can you refresh an existing brand?",
        a: "Yes. We can evolve your current identity rather than starting from scratch.",
      },
      {
        q: "What files do I receive?",
        a: "You receive logo files in the formats you need plus brand guidelines and agreed assets.",
      },
      {
        q: "Do you design marketing materials too?",
        a: "Yes, from social templates to brochures and presentations.",
      },
    ],
    cta: "Build Your Brand",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: Workflow,
    group: "Support",
    summary: "Automate repetitive work and connect your tools to save time and reduce errors.",
    hero: {
      heading: "Automate the Work That Slows You Down",
      text: "Connect your tools and automate repetitive tasks so your team can focus on the work that actually grows the business.",
    },
    problem: {
      heading: "Manual processes don't scale",
      text: "Copying data between systems, sending routine emails and compiling reports by hand takes time and introduces mistakes.",
      points: [
        "Data re-entered across multiple tools",
        "Routine follow-ups that get missed",
        "Reports compiled manually every week",
        "Approvals stuck in email threads",
      ],
    },
    solution: {
      heading: "Workflows that run themselves",
      text: "We map your processes, identify what can be automated and build reliable workflows and integrations — including AI-assisted steps where they genuinely help.",
    },
    features: [
      { title: "Process mapping", text: "Identify bottlenecks and automation opportunities." },
      { title: "Tool integrations", text: "Connect CRM, accounting, forms, email and messaging." },
      { title: "Automated notifications", text: "Alerts, reminders and follow-ups that never slip." },
      { title: "Automated reporting", text: "Scheduled reports and live dashboards." },
      { title: "AI-assisted workflows", text: "Classification, summarisation and drafting where useful." },
      { title: "Monitoring", text: "Error handling and alerts so workflows stay reliable." },
    ],
    benefits: [
      "Hours saved every week",
      "Fewer manual errors",
      "Faster response times",
      "Processes that scale",
    ],
    technologies: ["Python", "Node.js", "REST APIs", "Webhooks", "PostgreSQL", "AWS"],
    faqs: [
      {
        q: "What can be automated?",
        a: "Most repetitive, rules-based tasks — data entry, notifications, reports, approvals and syncing data between tools.",
      },
      {
        q: "Do I need custom software for automation?",
        a: "Not always. Sometimes connecting existing tools is enough; we'll recommend the simplest effective approach.",
      },
      {
        q: "Is AI safe to use with business data?",
        a: "We design AI steps carefully, considering data privacy and keeping humans in the loop for important decisions.",
      },
    ],
    cta: "Automate Your Workflow",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: Lightbulb,
    group: "Support",
    summary: "Strategic technology guidance to help you make confident decisions.",
    hero: {
      heading: "Technology Decisions, Made With Confidence",
      text: "Independent, practical guidance on the systems, tools and roadmap your business needs — before you invest.",
    },
    problem: {
      heading: "The wrong technology choice is expensive",
      text: "Choosing platforms, vendors and architecture without the right expertise can lead to costly rebuilds, security gaps and wasted licences.",
      points: [
        "Unclear technology roadmap",
        "Uncertainty about build vs buy",
        "Legacy systems holding the business back",
        "Security and scalability concerns",
      ],
    },
    solution: {
      heading: "Clear, practical technology strategy",
      text: "We assess your current setup, understand your goals and recommend a realistic roadmap — from quick wins to long-term architecture.",
    },
    features: [
      { title: "Technology audit", text: "Review of your systems, tools and infrastructure." },
      { title: "Digital roadmap", text: "Prioritised plan aligned with business goals." },
      { title: "Build vs buy advice", text: "Objective recommendations on platforms and vendors." },
      { title: "Architecture planning", text: "Scalable, secure system design." },
      { title: "Security review", text: "Identify and prioritise security improvements." },
      { title: "Project oversight", text: "Technical guidance throughout implementation." },
    ],
    benefits: [
      "Confident technology investments",
      "Reduced risk",
      "A clear, prioritised roadmap",
      "Systems aligned with strategy",
    ],
    technologies: ["Cloud Architecture", "AWS", "Cloudflare", "Security Best Practices"],
    faqs: [
      {
        q: "Is consulting only for large companies?",
        a: "No. Growing businesses often benefit most, because early decisions shape everything that follows.",
      },
      {
        q: "Can consulting lead to implementation?",
        a: "Yes. We can implement the recommendations, or support your internal team or vendors.",
      },
      {
        q: "How is consulting delivered?",
        a: "Through workshops, audits and written recommendations, either as a one-off engagement or ongoing advisory.",
      },
    ],
    cta: "Talk to an Expert",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    group: "Support",
    summary: "Secure, scalable cloud hosting, deployment and infrastructure.",
    hero: {
      heading: "Cloud Infrastructure That Scales With You",
      text: "Secure hosting, deployment pipelines and infrastructure that keep your applications fast, available and ready to grow.",
    },
    problem: {
      heading: "Unreliable hosting puts your business at risk",
      text: "Downtime, slow performance and manual deployments create risk — and outdated infrastructure becomes harder to secure over time.",
      points: [
        "Downtime and slow response times",
        "Manual, error-prone deployments",
        "No backups or recovery plan",
        "Unpredictable infrastructure costs",
      ],
    },
    solution: {
      heading: "Modern, managed cloud infrastructure",
      text: "We design, migrate and manage cloud environments with automated deployments, backups, monitoring and security built in.",
    },
    features: [
      { title: "Cloud migration", text: "Move applications and data to the cloud safely." },
      { title: "CI/CD pipelines", text: "Automated, repeatable deployments." },
      { title: "Backups & recovery", text: "Regular backups and a tested recovery plan." },
      { title: "Monitoring", text: "Uptime and performance monitoring with alerts." },
      { title: "CDN & security", text: "Global performance and protection at the edge." },
      { title: "Cost optimisation", text: "Right-sized infrastructure without waste." },
    ],
    benefits: [
      "Higher availability",
      "Faster, safer deployments",
      "Better security posture",
      "Predictable costs",
    ],
    technologies: ["AWS", "Cloudflare", "Docker", "PostgreSQL", "Linux"],
    faqs: [
      {
        q: "Can you migrate our existing application?",
        a: "Yes. We plan migrations carefully to minimise downtime and risk.",
      },
      {
        q: "Who owns the cloud account?",
        a: "We recommend your business owns the cloud account, with access granted to our team.",
      },
      {
        q: "Do you provide ongoing management?",
        a: "Yes, through our maintenance and support plans.",
      },
    ],
    cta: "Discuss Your Infrastructure",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    icon: Wrench,
    group: "Support",
    summary: "Reliable ongoing maintenance, updates and technical support.",
    hero: {
      heading: "Reliable Support After Launch",
      text: "Updates, security, monitoring and improvements that keep your website and software running smoothly — long after launch.",
    },
    problem: {
      heading: "Unmaintained software becomes a liability",
      text: "Outdated dependencies, security vulnerabilities and small bugs accumulate over time, eventually causing outages or costly rebuilds.",
      points: [
        "Security updates left unapplied",
        "Bugs with no one to fix them",
        "No monitoring or backups",
        "Small improvements that never happen",
      ],
    },
    solution: {
      heading: "Proactive, ongoing care",
      text: "Our maintenance plans cover updates, monitoring, backups, bug fixes and a set amount of improvement time each month.",
    },
    features: [
      { title: "Security updates", text: "Regular dependency and platform updates." },
      { title: "Uptime monitoring", text: "We know about issues quickly." },
      { title: "Backups", text: "Scheduled backups with restore testing." },
      { title: "Bug fixes", text: "Fast resolution of issues." },
      { title: "Content & feature updates", text: "Improvements as your business evolves." },
      { title: "Performance checks", text: "Keep things fast as content and traffic grow." },
    ],
    benefits: [
      "Peace of mind",
      "Fewer emergencies",
      "Longer software lifespan",
      "A team that knows your system",
    ],
    technologies: ["Monitoring", "Automated Backups", "Cloudflare", "AWS"],
    faqs: [
      {
        q: "Do you maintain websites you didn't build?",
        a: "Often, yes — after a technical review of the existing codebase.",
      },
      {
        q: "What's included in a maintenance plan?",
        a: "Plans are tailored, but typically include updates, monitoring, backups, bug fixes and improvement hours.",
      },
      {
        q: "How do I request support?",
        a: "Support channels and response times are agreed in your maintenance plan.",
      },
    ],
    cta: "Get Ongoing Support",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: Camera,
    group: "Grow",
    summary: "Engaging photos, videos, graphics and content designed for your brand.",
    hero: {
      heading: "Content That Tells Your Story",
      text: "Photography, video, graphics and copy that bring your brand to life across your website, social media and campaigns.",
    },
    problem: {
      heading: "Generic content gets ignored",
      text: "Stock photos and inconsistent visuals make it hard to stand out. Great content needs a plan, a consistent style and regular production.",
      points: [
        "Reliance on generic stock imagery",
        "No consistent visual style",
        "Too little content to stay active",
        "Copy that doesn't connect",
      ],
    },
    solution: {
      heading: "On-brand content, produced consistently",
      text: "We plan, shoot, design and write content tailored to your brand and channels — ready for your website, social media and ads.",
    },
    features: [
      { title: "Photography", text: "Product, team and brand photography." },
      { title: "Video production", text: "Short-form social video, reels and brand films." },
      { title: "Graphic design", text: "Social posts, ad creatives and campaign visuals." },
      { title: "Copywriting", text: "Website, social and campaign copy." },
      { title: "Content planning", text: "Monthly content plans aligned with goals." },
      { title: "Editing & motion", text: "Polished edits, subtitles and motion graphics." },
    ],
    benefits: [
      "Authentic, original content",
      "A consistent brand style",
      "Content ready for every channel",
      "More engagement",
    ],
    technologies: ["Adobe Creative Suite", "Video Production", "Photography", "Copywriting"],
    faqs: [
      {
        q: "Do you shoot on location?",
        a: "Location shoots can be arranged depending on where you are. We'll confirm during planning.",
      },
      {
        q: "Can content be produced monthly?",
        a: "Yes. Many clients combine content creation with social media management.",
      },
      {
        q: "Who owns the content?",
        a: "Usage rights are defined in your agreement; typically you can use the delivered content across your channels.",
      },
    ],
    cta: "Create Your Content",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** The eight services featured on the homepage, in display order. */
export const homeServices: { slug: string; title: string; summary: string; featured?: boolean }[] = [
  { slug: "custom-software-development", title: "Custom Software Development", summary: services[0].summary, featured: true },
  {
    slug: "website-development",
    title: "Web & Mobile Development",
    summary: "Modern, responsive websites and mobile applications with exceptional user experiences.",
  },
  { slug: "digital-marketing", title: "Digital Marketing", summary: getService("digital-marketing")!.summary },
  { slug: "branding-creative-design", title: "Branding & Creative Design", summary: getService("branding-creative-design")!.summary },
  { slug: "ecommerce-development", title: "E-commerce Solutions", summary: getService("ecommerce-development")!.summary },
  { slug: "ui-ux-design", title: "UI/UX Design", summary: getService("ui-ux-design")!.summary },
  {
    slug: "it-consulting",
    title: "IT Consulting & Support",
    summary: "Strategic technology guidance and reliable ongoing technical support.",
  },
  { slug: "content-creation", title: "Content Creation", summary: getService("content-creation")!.summary },
];
