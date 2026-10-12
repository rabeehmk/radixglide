import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
import { getService, services, serviceProcess } from "@/data/services";
import { enquiryServices } from "@/data/contact";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TechIcon } from "@/components/ui/TechIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsApp";
import { CTABanner } from "@/components/sections/CTA";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({
    title: `${s.title} Services`,
    description: `${s.hero.text} ${s.summary}`.slice(0, 160),
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const Icon = s.icon;
  const contactHref = enquiryServices.includes(s.title)
    ? `/contact?service=${encodeURIComponent(s.title)}`
    : "/contact";
  const related = services.filter((x) => x.group === s.group && x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={s.title}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
        title={s.hero.heading}
        text={s.hero.text}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={contactHref} size="lg" arrow>
            {s.cta}
          </Button>
          <WhatsAppButton size="lg" label="Chat on WhatsApp" message={`Hi RadixGlide! I'd like to discuss ${s.title}.`} hideIfUnconfigured />
        </div>
      </PageHero>

      {/* Problem */}
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="grid size-14 place-items-center rounded-2xl bg-navy text-azure">
                <Icon className="size-6" />
              </span>
            </Reveal>
            <SectionHeading className="mt-8" eyebrow="The challenge" title={s.problem.heading} text={s.problem.text} />
          </div>
          <ul className="space-y-3 lg:col-span-7 lg:pt-24">
            {s.problem.points.map((p, i) => (
              <Reveal as="li" key={p} direction="right" delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-[20px] border border-midnight/[0.07] bg-white p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                    <X className="size-4" />
                  </span>
                  <span className="font-medium text-midnight/80">{p}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution + features */}
      <section className="section-y relative overflow-hidden bg-midnight bg-gradient-to-br from-electric/20 via-navy to-midnight text-white">
        <div aria-hidden className="grid-dark absolute inset-0 opacity-60" />
        <div className="container-x relative">
          <SectionHeading tone="dark" eyebrow="Our solution" title={s.solution.heading} text={s.solution.text} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-electric/40">
                  <span className="font-mono text-xs text-azure">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-bold tracking-[-0.02em]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Benefits" title="What it means for your business" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-[20px] bg-snow p-5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-electric text-midnight">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-midnight">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-snow">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Process" title="How we'll work together" />
          <div className="relative mt-14">
          <div aria-hidden className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-electric/0 via-electric/40 to-electric/0 md:block" />
          <ol className="relative grid gap-4 md:grid-cols-5">
            {serviceProcess.map((p, i) => (
              <Reveal as="li" key={p.no} delay={i * 0.08} className="relative">
                <div className="flex gap-4 md:flex-col md:items-center md:text-center">
                  <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-midnight/10 bg-white text-sm font-bold text-electric shadow-[0_10px_30px_-12px_rgba(11,37,69,0.3)]">
                    {p.no}
                  </span>
                  <div className="md:mt-5">
                    <h3 className="font-bold text-midnight">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-navy py-16 text-white lg:py-20">
        <div className="container-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Technology & tools</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Built with proven tools</h2>
          </div>
          <ul className="flex flex-wrap gap-3 lg:max-w-2xl lg:justify-end">
            {s.technologies.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-electric/40 hover:text-azure"
              >
                <TechIcon name={t} className="size-5" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title={`${s.title} questions`} />
          </div>
          <Reveal className="lg:col-span-8">
            <Accordion items={s.faqs} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-snow pb-16 lg:pb-24" aria-labelledby="related-services">
          <div className="container-x">
            <h2 id="related-services" className="text-2xl font-bold tracking-[-0.03em] text-midnight sm:text-3xl">
              Related services
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <ServiceCard service={r} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABanner
        className="bg-snow"
        eyebrow={s.title}
        title={
          <>
            Ready to get <span className="text-gradient">started?</span>
          </>
        }
        text={`Tell us about your goals and we'll recommend the right ${s.title.toLowerCase()} approach for your business.`}
        primary={{ label: s.cta, href: contactHref }}
        secondary={{ label: "Get a Custom Quote", href: "/pricing" }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.summary,
          provider: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
