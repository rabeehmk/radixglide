/**
 * Blog content.
 *
 * Articles are stored as structured blocks so they can later be replaced by a CMS or MDX
 * without changing the page components. The articles below are original demo content —
 * review, edit and set real publish dates before launch.
 */

export const blogCategories = [
  "Software Development",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "Business Growth",
  "AI & Automation",
  "E-commerce",
  "Branding",
  "Technology",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  featured?: boolean;
  /** Optional real cover image in /public. A generated cover is used when empty. */
  cover?: string;
  content: Block[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-custom-software-can-transform-business-operations",
    title: "How Custom Software Can Transform Business Operations",
    excerpt:
      "Off-the-shelf tools get you started — but as you grow, software built around your processes can remove bottlenecks, reduce errors and give you a single source of truth.",
    category: "Software Development",
    author: "RadixGlide Team",
    date: "2026-09-22",
    featured: true,
    content: [
      {
        type: "p",
        text: "Most businesses start with a collection of tools: a spreadsheet for orders, a messaging app for the team, an accounting package, maybe a basic CRM. It works — until it doesn't. As volume grows, the gaps between those tools become the place where time, money and data get lost.",
      },
      {
        type: "p",
        text: "Custom software closes those gaps. Instead of bending your processes to fit a generic product, you get a system designed around how your business actually works.",
      },
      { type: "h2", text: "The hidden cost of “good enough” tools" },
      {
        type: "p",
        text: "The real cost of generic tools rarely shows up on an invoice. It shows up as hours spent copying data between systems, mistakes in manual calculations and decisions made on out-of-date information.",
      },
      {
        type: "ul",
        items: [
          "Data re-entered across several tools, introducing errors",
          "No single, reliable view of customers, orders or performance",
          "Workarounds that only one person on the team understands",
          "Subscription costs for features that don't quite fit",
        ],
      },
      { type: "h2", text: "What custom software actually changes" },
      { type: "h3", text: "One source of truth" },
      {
        type: "p",
        text: "When your operations run on one connected system, everyone works from the same data. Sales, operations and finance stop reconciling spreadsheets and start acting on accurate information.",
      },
      { type: "h3", text: "Automation of repetitive work" },
      {
        type: "p",
        text: "Invoices, reminders, approvals, status updates and reports can be generated automatically. Your team spends less time on administration and more time on customers.",
      },
      { type: "h3", text: "Software that grows with you" },
      {
        type: "p",
        text: "A well-architected system can add new modules, users, branches and integrations as you grow — without starting again from scratch.",
      },
      {
        type: "callout",
        title: "A practical starting point",
        text: "You don't have to replace everything at once. Many successful projects begin by digitising one painful process, proving the value, then expanding.",
      },
      { type: "h2", text: "When is custom software the right choice?" },
      {
        type: "ul",
        items: [
          "Your processes are a competitive advantage that generic tools can't support",
          "Your team relies heavily on spreadsheets and manual steps",
          "You need several systems to talk to each other",
          "You're planning to scale and want technology that won't hold you back",
        ],
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "The best custom software projects start with understanding, not code. Map your current process, identify where time and accuracy are lost, and prioritise the changes with the biggest impact. From there, a phased build keeps risk low and delivers value early.",
      },
    ],
  },
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application: What Does Your Business Need?",
    excerpt:
      "They both live in the browser, but they solve very different problems. Here's how to decide which one your business needs — or whether you need both.",
    category: "Web Development",
    author: "RadixGlide Team",
    date: "2026-09-15",
    content: [
      {
        type: "p",
        text: "“We need a new website” can mean very different things. Sometimes it means a professional online presence. Sometimes it means a customer portal, a booking system or a dashboard. Understanding the difference helps you plan the right budget, timeline and team.",
      },
      { type: "h2", text: "What is a website?" },
      {
        type: "p",
        text: "A website primarily presents information. Its job is to explain who you are, what you offer and why someone should choose you — and then turn that interest into an enquiry or sale.",
      },
      {
        type: "ul",
        items: [
          "Company and service information",
          "Blog and resources",
          "Contact forms and lead capture",
          "Content managed by your team",
        ],
      },
      { type: "h2", text: "What is a web application?" },
      {
        type: "p",
        text: "A web application lets users do things. People log in, enter data, manage records, make bookings or view personalised dashboards. It behaves more like software than a brochure.",
      },
      {
        type: "ul",
        items: [
          "User accounts and permissions",
          "Data entry, processing and storage",
          "Dashboards and reports",
          "Integrations with other systems",
        ],
      },
      { type: "h2", text: "How to decide" },
      {
        type: "p",
        text: "Ask a simple question: do visitors mainly need to read, or do they need to act? If they mainly read and then contact you, you need a website. If they need to log in and complete tasks, you need a web application.",
      },
      {
        type: "callout",
        title: "Many businesses need both",
        text: "A common setup is a marketing website that attracts customers, connected to a web application where those customers manage orders, bookings or accounts.",
      },
      { type: "h2", text: "Planning the budget and timeline" },
      {
        type: "p",
        text: "Websites are usually quicker to deliver because the scope is focused on content and design. Web applications involve more logic, data and testing, so they're often built in phases. Starting with a clear list of must-have features keeps both on track.",
      },
    ],
  },
  {
    slug: "digital-marketing-is-more-than-social-media",
    title: "Why Digital Marketing Is More Than Social Media",
    excerpt:
      "Posting on Instagram is not a marketing strategy. Real digital growth connects search, content, advertising, your website and data into one system.",
    category: "Digital Marketing",
    author: "RadixGlide Team",
    date: "2026-09-08",
    content: [
      {
        type: "p",
        text: "For many businesses, “digital marketing” has become shorthand for posting on social media. Social is valuable — but on its own it's only one piece of a much bigger picture.",
      },
      { type: "h2", text: "The channels that work together" },
      {
        type: "ul",
        items: [
          "Search (SEO): being found when people actively look for what you offer",
          "Paid advertising: reaching the right audience quickly with Google and Meta ads",
          "Content: answering questions and building trust over time",
          "Social media: staying visible and building community",
          "Email and WhatsApp: nurturing leads and bringing customers back",
          "Your website: where interest becomes an enquiry or sale",
        ],
      },
      { type: "h2", text: "Why social media alone falls short" },
      {
        type: "p",
        text: "Social platforms are great for awareness and engagement, but organic reach is limited and you don't control the algorithm. Without search visibility, a strong website and a way to follow up with leads, much of that attention never turns into business.",
      },
      { type: "h2", text: "Start with strategy, not channels" },
      {
        type: "p",
        text: "Good marketing starts by understanding your audience: who they are, what problems they have and where they look for solutions. Channels are chosen to match that journey — not the other way around.",
      },
      {
        type: "quote",
        text: "The goal isn't to be everywhere. It's to be in the right places, with the right message, at the right time.",
      },
      { type: "h2", text: "Measure what matters" },
      {
        type: "p",
        text: "Likes and followers are easy to count but hard to bank. Focus on metrics connected to business outcomes: enquiries, sales, cost per lead and customer lifetime value. Proper tracking makes it clear where to invest more — and where to stop.",
      },
    ],
  },
  {
    slug: "seo-strategies-for-growing-businesses",
    title: "SEO Strategies Every Growing Business Should Know",
    excerpt:
      "SEO isn't magic — it's a set of practical habits. These fundamentals help growing businesses build visibility that compounds over time.",
    category: "SEO",
    author: "RadixGlide Team",
    date: "2026-08-30",
    content: [
      {
        type: "p",
        text: "Search engine optimisation can feel mysterious, but most results come from doing the fundamentals consistently. Here are the strategies that matter most for growing businesses.",
      },
      { type: "h2", text: "1. Fix the technical foundations" },
      {
        type: "p",
        text: "If search engines can't crawl and understand your website, nothing else matters. Fast loading, mobile-friendly layouts, clean URLs, an XML sitemap and correct indexing settings are the starting point.",
      },
      { type: "h2", text: "2. Target the right keywords" },
      {
        type: "p",
        text: "Focus on the phrases your customers actually use — especially specific, high-intent searches. “Custom ERP for logistics companies” brings more qualified visitors than a broad term like “software”.",
      },
      { type: "h2", text: "3. Create one strong page per topic" },
      {
        type: "p",
        text: "Each important service deserves its own page that fully answers the questions a prospect would have. Clear headings, helpful detail and a strong call to action serve both people and search engines.",
      },
      { type: "h2", text: "4. Publish genuinely helpful content" },
      {
        type: "p",
        text: "Articles, guides and FAQs that answer real questions build authority and attract visitors earlier in their journey. Quality matters far more than quantity.",
      },
      { type: "h2", text: "5. Don't ignore local SEO" },
      {
        type: "ul",
        items: [
          "Complete and verify your Google Business Profile",
          "Keep your name, address and phone consistent online",
          "Encourage genuine customer reviews",
          "Create location-relevant content where it makes sense",
        ],
      },
      {
        type: "callout",
        title: "Be patient — and consistent",
        text: "SEO compounds. Results usually build over months, not days, but the traffic you earn keeps working long after the effort.",
      },
    ],
  },
  {
    slug: "how-ai-and-automation-reduce-manual-work",
    title: "How AI and Automation Can Reduce Manual Work",
    excerpt:
      "From data entry to reporting, a surprising amount of everyday work can be automated. Here's where AI and automation deliver real value — and where to be careful.",
    category: "AI & Automation",
    author: "RadixGlide Team",
    date: "2026-08-21",
    content: [
      {
        type: "p",
        text: "Every business has tasks that are repetitive, predictable and time-consuming. These are exactly the tasks that automation — and increasingly AI — can handle, freeing your team to focus on work that needs human judgement.",
      },
      { type: "h2", text: "Start with rules-based automation" },
      {
        type: "p",
        text: "Before reaching for AI, look for simple automations. If a task follows clear rules — when X happens, do Y — it can usually be automated reliably.",
      },
      {
        type: "ul",
        items: [
          "Sending confirmations, reminders and follow-ups",
          "Syncing data between forms, CRM and accounting tools",
          "Generating invoices and scheduled reports",
          "Routing enquiries to the right person",
        ],
      },
      { type: "h2", text: "Where AI adds value" },
      {
        type: "p",
        text: "AI is useful where tasks involve language or judgement that's hard to write as fixed rules: summarising long documents, categorising incoming messages, extracting information from files or drafting first responses for a human to review.",
      },
      { type: "h2", text: "Keep humans in the loop" },
      {
        type: "p",
        text: "AI should support decisions, not make important ones unchecked. Design workflows so people review outputs that affect customers, money or compliance — and be thoughtful about what data is shared with AI services.",
      },
      {
        type: "callout",
        title: "Measure the time saved",
        text: "Before automating, note how long a task takes today. It makes the value of the automation clear and helps prioritise what to tackle next.",
      },
      { type: "h2", text: "A simple roadmap" },
      {
        type: "ul",
        items: [
          "List repetitive tasks and estimate the time each one takes",
          "Automate the simplest, highest-volume tasks first",
          "Introduce AI where rules can't capture the logic",
          "Monitor, refine and expand",
        ],
      },
    ],
  },
  {
    slug: "building-a-high-converting-business-website",
    title: "Building a High-Converting Business Website",
    excerpt:
      "A beautiful website isn't enough — it has to turn visitors into enquiries. These principles make the difference between a digital brochure and a growth engine.",
    category: "Business Growth",
    author: "RadixGlide Team",
    date: "2026-08-12",
    content: [
      {
        type: "p",
        text: "Your website is often the first serious interaction a potential customer has with your business. Whether they enquire or leave depends on a handful of decisions about clarity, trust and ease of action.",
      },
      { type: "h2", text: "Lead with a clear message" },
      {
        type: "p",
        text: "Within a few seconds, visitors should understand what you do, who it's for and why it matters. Specific, benefit-led headlines outperform vague slogans.",
      },
      { type: "h2", text: "Make the next step obvious" },
      {
        type: "p",
        text: "Every page should have a clear primary action — request a quote, book a call, chat on WhatsApp. Use consistent wording and place it where people naturally look.",
      },
      { type: "h2", text: "Build trust at every step" },
      {
        type: "ul",
        items: [
          "Real project examples and case studies",
          "Genuine testimonials from real clients",
          "Clear contact details and response expectations",
          "Professional, consistent design",
        ],
      },
      { type: "h2", text: "Speed and mobile experience are non-negotiable" },
      {
        type: "p",
        text: "Slow pages and awkward mobile layouts lose visitors before they read a word. Optimised images, clean code and a mobile-first design protect every other investment you make in marketing.",
      },
      { type: "h2", text: "Reduce friction in forms" },
      {
        type: "p",
        text: "Ask only for what you need. Shorter forms, helpful validation and alternative contact options like WhatsApp make it easier for people to reach out.",
      },
      {
        type: "callout",
        title: "Measure, then improve",
        text: "Set up analytics to track enquiries, not just visits. Then test improvements to headlines, calls to action and page layouts over time.",
      },
    ],
  },
  {
    slug: "why-mobile-first-design-matters",
    title: "Why Mobile-First Design Matters",
    excerpt:
      "For many businesses, most visitors arrive on a phone. Designing for mobile first leads to faster, clearer and more effective experiences on every screen.",
    category: "Web Development",
    author: "RadixGlide Team",
    date: "2026-08-04",
    content: [
      {
        type: "p",
        text: "Mobile-first design means planning the experience for the smallest screen first, then enhancing it for larger ones. It's not just a technical approach — it changes how you think about content and priorities.",
      },
      { type: "h2", text: "Your customers are on their phones" },
      {
        type: "p",
        text: "People browse, compare and contact businesses from their phones throughout the day. If the mobile experience is frustrating, they won't wait until they're at a desk — they'll simply go elsewhere.",
      },
      { type: "h2", text: "Constraints create clarity" },
      {
        type: "p",
        text: "A small screen forces you to decide what really matters. The result is clearer messaging and simpler journeys — which usually improves the desktop experience too.",
      },
      { type: "h2", text: "Performance matters more on mobile" },
      {
        type: "p",
        text: "Mobile connections can be slower and less reliable. Mobile-first design encourages lighter pages, optimised images and only essential scripts.",
      },
      { type: "h2", text: "Mobile-first checklist" },
      {
        type: "ul",
        items: [
          "Readable text without zooming",
          "Buttons large enough to tap comfortably",
          "Navigation that's easy to open and close",
          "Forms that use the right mobile keyboards",
          "Tap-to-call and WhatsApp actions",
          "No horizontal scrolling",
        ],
      },
      {
        type: "callout",
        title: "Search engines care too",
        text: "Search engines primarily evaluate the mobile version of your website, so a strong mobile experience supports your SEO.",
      },
    ],
  },
  {
    slug: "how-businesses-can-build-a-strong-digital-brand",
    title: "How Businesses Can Build a Strong Digital Brand",
    excerpt:
      "A strong digital brand is more than a logo. It's a consistent experience across your website, social media, content and every customer touchpoint.",
    category: "Branding",
    author: "RadixGlide Team",
    date: "2026-07-27",
    content: [
      {
        type: "p",
        text: "Your brand is what people remember about you — and online, they encounter it across many touchpoints. Consistency across all of them is what turns a business into a recognisable brand.",
      },
      { type: "h2", text: "Start with positioning" },
      {
        type: "p",
        text: "Before designing anything, be clear on who you serve, what you do better than anyone else and how you want people to feel. That clarity guides every visual and written decision.",
      },
      { type: "h2", text: "Create a consistent visual identity" },
      {
        type: "ul",
        items: [
          "A versatile logo that works at every size",
          "A defined colour palette and typography",
          "A recognisable style for photos and graphics",
          "Templates that keep content consistent",
        ],
      },
      { type: "h2", text: "Find your voice" },
      {
        type: "p",
        text: "How you write matters as much as how you look. A consistent tone — whether confident, friendly or expert — makes your communication instantly recognisable.",
      },
      { type: "h2", text: "Make your website the brand's home" },
      {
        type: "p",
        text: "Social platforms change, but your website is the space you fully control. It should be the clearest, most complete expression of your brand.",
      },
      {
        type: "quote",
        text: "Consistency builds recognition. Recognition builds trust. Trust builds business.",
      },
      { type: "h2", text: "Document it" },
      {
        type: "p",
        text: "Brand guidelines help everyone — your team, freelancers and partners — apply the brand correctly. They're one of the simplest ways to protect consistency as you grow.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function readingTime(post: BlogPost): number {
  const words = post.content
    .map((b) => ("text" in b ? b.text : "") + ("items" in b ? b.items.join(" ") : "") + ("title" in b ? b.title : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Posts sorted newest first. */
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
