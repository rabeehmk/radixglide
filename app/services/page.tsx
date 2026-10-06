import { services, serviceProcess, type ServiceGroup } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Services — Software, Web, Marketing & IT Solutions",
  description:
    "Explore RadixGlide's 15 services: custom software, websites, mobile apps, e-commerce, UI/UX, digital marketing, SEO, social media, branding, automation, cloud and IT consulting.",
  path: "/services",
});

const groups: { id: ServiceGroup; title: string; text: string }[] = [
  { id: "Build", title: "Build", text: "Software, websites, apps and experiences engineered around your business." },
  { id: "Grow", title: "Grow", text: "Marketing, brand and content that turn visibility into customers." },
  { id: "Support", title: "Support & Scale", text: "Automation, infrastructure and expert guidance that keep you moving." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumbs={[{ label: "Services" }]}
        title={
          <>
            Everything you need to <span className="text-gradient">build and grow</span>
          </>
        }
        text="From powerful software solutions to result-driven digital marketing, RadixGlide combines technology, creativity and marketing under one roof."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" arrow>
            Get a Free Consultation
          </Button>
          <Button href="/pricing" size="lg" variant="outline-dark">
            View Pricing
          </Button>
        </div>
      </PageHero>

      <div className="bg-snow">
        {groups.map((g, gi) => {
          const list = services.filter((s) => s.group === g.id);
          return (
            <section key={g.id} aria-labelledby={`group-${g.id}`} className={gi === 0 ? "pt-16 lg:pt-24" : "pt-16 lg:pt-20"}>
              <div className="container-x">
                <Reveal className="flex flex-col gap-3 border-b border-midnight/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-electric">0{gi + 1}</span>
                    <h2 id={`group-${g.id}`} className="text-3xl font-bold tracking-[-0.035em] text-midnight sm:text-4xl">
                      {g.title}
                    </h2>
                  </div>
                  <p className="max-w-md text-midnight/55">{g.text}</p>
                </Reveal>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {list.map((s, i) => (
                    <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06}>
                      <ServiceCard service={s} index={services.indexOf(s)} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section-y relative overflow-hidden bg-snow">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[32px] bg-midnight px-6 py-14 text-white sm:px-12 lg:py-20">
            <div aria-hidden className="grid-dark mask-radial absolute inset-0" />
            <div className="relative">
              <SectionHeading
                tone="dark"
                eyebrow="How we deliver"
                title="One clear process for every service"
                text="Whether it's a website, a software platform or a marketing campaign, you'll always know what's happening next."
              />
              <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {serviceProcess.map((s, i) => (
                  <Reveal as="li" key={s.no} delay={i * 0.07}>
                    <div className="h-full rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-5">
                      <span className="font-mono text-sm text-azure">{s.no}</span>
                      <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        className="bg-snow"
        title={
          <>
            Not sure where <span className="text-gradient">to start?</span>
          </>
        }
        text="Tell us about your goals and we'll recommend the right mix of technology and marketing."
        primary={{ label: "Talk to an Expert", href: "/contact" }}
        secondary={{ label: "Chat on WhatsApp", whatsapp: true }}
      />
    </>
  );
}
