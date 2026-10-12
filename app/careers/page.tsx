import Link from "next/link";
import { ArrowUpRight, BookOpen, Briefcase, Layers, Rocket, Send, Sparkles, Users } from "lucide-react";
import { openings } from "@/data/careers";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = pageMetadata({
  title: "Careers — Build the Future With RadixGlide",
  description:
    "Join RadixGlide and work across software development, design and digital marketing. See current openings or send us your CV.",
  path: "/careers",
});

const reasons = [
  { icon: Layers, title: "Varied, meaningful work", text: "Work across software, design and marketing projects for different industries." },
  { icon: BookOpen, title: "Keep learning", text: "Modern tools, new technologies and room to grow your skills." },
  { icon: Users, title: "Collaborative team", text: "Engineers, designers and marketers solving problems together." },
  { icon: Rocket, title: "Real impact", text: "Your work ships — and helps real businesses grow." },
];

const culture = [
  "Curiosity over ego",
  "Ownership and accountability",
  "Clear, honest communication",
  "Quality in the details",
  "Learning out loud",
  "Client success first",
];

const cvHref = site.contact.careersEmail
  ? `mailto:${site.contact.careersEmail}?subject=${encodeURIComponent("CV — RadixGlide careers")}`
  : "/contact?service=Other";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        crumbs={[{ label: "Careers" }]}
        title={
          <>
            Build the Future <span className="text-gradient">With RadixGlide.</span>
          </>
        }
        text="We're a team of builders, designers and marketers who love turning ideas into products that make a difference."
      >
        <Button href="#openings" size="lg" arrow>
          View Open Positions
        </Button>
      </PageHero>

      <section className="section-y bg-snow">
        <div className="container-x">
          <SectionHeading eyebrow="Why work with us" title="A place to do your best work" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.06}>
                <div className="h-full rounded-[24px] border border-midnight/[0.07] bg-white p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-navy text-azure">
                    <Icon className="size-[22px]" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-midnight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-midnight text-white">
        <div aria-hidden className="grid-dark mask-radial absolute inset-0" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            tone="dark"
            eyebrow="Our culture"
            title="How we work together"
            text="The principles that shape our team, our projects and how we treat our clients."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {culture.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.04] p-4">
                  <Sparkles className="size-4 shrink-0 text-azure" />
                  <span className="font-medium">{c}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="openings" className="section-y scroll-mt-20 bg-snow">
        <div className="container-x">
          <SectionHeading eyebrow="Open positions" title="Current openings" />
          <Reveal className="mt-10">
            {openings.length ? (
              <ul className="space-y-3">
                {openings.map((o) => (
                  <li key={o.title}>
                    <Link
                      href={o.href}
                      className="group flex flex-col gap-4 rounded-[22px] border border-midnight/[0.07] bg-white p-6 transition-all hover:border-electric/30 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-midnight">{o.title}</h3>
                        <p className="mt-1 text-sm text-slate">
                          {o.type} · {o.location}
                        </p>
                        <p className="mt-2 text-slate">{o.summary}</p>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-electric transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center rounded-[28px] border border-dashed border-midnight/15 bg-white px-6 py-16 text-center">
                <span className="grid size-14 place-items-center rounded-2xl bg-snow text-midnight/40">
                  <Briefcase className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-midnight">No current openings</h3>
                <p className="mt-3 max-w-md text-slate">
                  We don&apos;t have open roles right now, but we&apos;re always happy to hear from talented people.
                  Send us your CV and we&apos;ll keep it on file for future opportunities.
                </p>
                <Link
                  href={cvHref}
                  className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-all hover:shadow-[0_10px_40px_-8px_rgba(168,131,79,0.7)] hover:brightness-110"
                >
                  <Send className="size-4" /> Send Your CV
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
