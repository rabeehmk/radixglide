import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingPlans, pricingSteps } from "@/data/pricing";
import { pricingFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Pricing — Flexible Packages for Software & Digital Growth",
  description:
    "Explore RadixGlide's Launch, Growth, Business and Enterprise packages for websites, custom software, e-commerce and digital marketing. Transparent, custom quotations.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        crumbs={[{ label: "Pricing" }]}
        title={
          <>
            Flexible Solutions. <span className="text-gradient">Built Around Your Business.</span>
          </>
        }
        text="Whether you need a website, custom software, e-commerce platform, or a complete digital marketing strategy, RadixGlide offers solutions designed around your goals, requirements and growth stage."
      />

      {/* Plans — stacked editorial rows rather than a SaaS table */}
      <section className="section-y bg-snow" aria-labelledby="plans-heading">
        <div className="container-x">
          <h2 id="plans-heading" className="sr-only">
            Packages
          </h2>
          <ol className="space-y-5">
            {pricingPlans.map((plan, i) => {
              const dark = plan.highlighted;
              return (
                <Reveal as="li" key={plan.name} delay={i * 0.05}>
                  <article
                    className={cn(
                      "group relative grid gap-8 overflow-hidden rounded-[28px] border p-6 transition-all duration-500 sm:p-10 lg:grid-cols-12 lg:gap-10",
                      dark
                        ? "border-transparent bg-navy text-white shadow-[0_40px_90px_-40px_rgba(11,37,69,0.8)]"
                        : "border-midnight/[0.07] bg-white hover:border-electric/25 hover:shadow-[0_30px_70px_-35px_rgba(11,37,69,0.35)]",
                    )}
                  >
                    {dark && (
                      <>
                        <div aria-hidden className="grid-dark absolute inset-0 opacity-60" />
                        <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-electric/30 blur-[100px]" />
                      </>
                    )}

                    <div className="relative lg:col-span-4">
                      <div className="flex items-center gap-3">
                        <span className={cn("font-mono text-sm", dark ? "text-azure" : "text-electric")}>{plan.no}</span>
                        <span className={cn("h-px w-8", dark ? "bg-azure/40" : "bg-electric/30")} />
                        {dark && (
                          <span className="rounded-full bg-electric px-3 py-1 text-xs font-semibold text-midnight">Most popular</span>
                        )}
                      </div>
                      <h3 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">{plan.name}</h3>
                      <p className={cn("mt-4 max-w-sm leading-relaxed", dark ? "text-steel" : "text-slate")}>{plan.audience}</p>
                    </div>

                    <div className="relative lg:col-span-5">
                      <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", dark ? "text-white/40" : "text-midnight/40")}>
                        What&apos;s included
                      </p>
                      <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {plan.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px]">
                            <span
                              className={cn(
                                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                                dark ? "bg-electric text-midnight" : "bg-electric/10 text-electric",
                              )}
                            >
                              <Check className="size-3" strokeWidth={3} />
                            </span>
                            <span className={dark ? "text-white/90" : "text-midnight/80"}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={cn(
                        "relative flex flex-col justify-between gap-6 border-t pt-6 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0",
                        dark ? "border-white/10" : "border-midnight/[0.07]",
                      )}
                    >
                      <div>
                        <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", dark ? "text-white/40" : "text-midnight/40")}>
                          Investment
                        </p>
                        <p className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em]">{plan.price}</p>
                        <p className={cn("mt-2 text-sm", dark ? "text-steel" : "text-midnight/50")}>{plan.priceNote}</p>
                      </div>
                      <Link
                        href={plan.cta.href}
                        className={cn(
                          "group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 active:scale-[0.97]",
                          dark
                            ? "border border-azure/40 bg-navy text-white hover:border-azure hover:shadow-[0_10px_40px_-8px_rgba(168,131,79,0.55)]"
                            : "bg-midnight text-white hover:bg-navy",
                        )}
                      >
                        {plan.cta.label}
                        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
          <p className="mt-8 text-center text-sm text-midnight/50">
            Packages are flexible starting points — services can be combined, added or removed to suit your project.
          </p>
        </div>
      </section>

      {/* How pricing works */}
      <section className="section-y relative overflow-hidden bg-midnight text-white">
        <div aria-hidden className="grid-dark mask-radial absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="How pricing works"
            title="Transparent from the first conversation"
            text="No surprises. You'll know exactly what's included and what it costs before any work begins."
          />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pricingSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-electric/40">
                  <span className="grid size-10 place-items-center rounded-full bg-electric text-sm font-bold text-midnight">{i + 1}</span>
                  <h3 className="mt-6 text-lg font-bold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Pricing questions"
              text="Can't find what you're looking for? Our team is happy to help."
            />
            <Reveal delay={0.2}>
              <Link href="/faq" className="mt-8 inline-flex items-center gap-2 font-semibold text-electric hover:underline">
                View all FAQs <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8">
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </section>

      <CTABanner
        className="bg-snow"
        eyebrow="Get a custom quote"
        title={
          <>
            Not Sure Which Package <span className="text-gradient">Fits?</span>
          </>
        }
        text="Tell us about your business and we'll recommend the right solution."
        primary={{ label: "Get a Custom Quote", href: "/contact?plan=custom" }}
        secondary={{ label: "Chat on WhatsApp", whatsapp: true, message: "Hi RadixGlide! I'd like help choosing the right package." }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
