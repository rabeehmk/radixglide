import { faqCategories } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "FAQ — Software, Websites, Marketing & Pricing Questions",
  description:
    "Answers to common questions about RadixGlide's software development, website development, digital marketing, pricing, maintenance and e-commerce services.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: "FAQ" }]}
        title={
          <>
            Questions? <span className="text-gradient">We&apos;ve got answers.</span>
          </>
        }
        text="Everything you need to know about working with RadixGlide. Can't find your question? Just ask our team."
      />

      <section className="section-y bg-snow">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="FAQ categories" className="min-w-0 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/40">Categories</p>
              <ul className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-1 lg:px-0">
                {faqCategories.map((c) => (
                  <li key={c.id} className="shrink-0">
                    <a
                      href={`#${c.id}`}
                      className="block rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm font-medium text-slate transition-colors hover:border-electric/40 hover:text-electric lg:rounded-xl lg:border-transparent lg:bg-transparent lg:px-3"
                    >
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-16 lg:col-span-9">
            {faqCategories.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-28">
                <Reveal>
                  <h2 id={`${c.id}-title`} className="text-2xl font-bold tracking-[-0.03em] text-midnight sm:text-3xl">
                    {c.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.06} className="mt-6">
                  <Accordion items={c.faqs} defaultOpen={null} />
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        className="bg-snow"
        title={
          <>
            Still have <span className="text-gradient">questions?</span>
          </>
        }
        text="Our team is happy to talk through your project and answer anything you need."
        primary={{ label: "Get a Free Consultation", href: "/contact" }}
        secondary={{ label: "Chat on WhatsApp", whatsapp: true }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((c) =>
            c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          ),
        }}
      />
    </>
  );
}
