import Link from "next/link";
import { Compass, Eye, Gem, HeartHandshake, Lightbulb, Repeat, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { site } from "@/data/site";
import { reasons } from "@/data/home";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "About RadixGlide — Technology With Purpose",
  description:
    "RadixGlide is a technology and digital growth company helping businesses turn ideas into practical digital solutions through software, design and digital marketing.",
  path: "/about",
});

const values = [
  { icon: Lightbulb, title: "Innovation", text: "We look for better, smarter ways to solve problems — not just familiar ones." },
  { icon: Eye, title: "Transparency", text: "Clear scope, honest advice and open communication at every stage." },
  { icon: Gem, title: "Quality", text: "Well-crafted design and clean, maintainable code that lasts." },
  { icon: Users, title: "Customer Focus", text: "Your goals and your customers shape every decision we make." },
  { icon: HeartHandshake, title: "Long-Term Partnership", text: "We stay invested in your success long after launch." },
  { icon: Repeat, title: "Continuous Improvement", text: "We measure, learn and keep making things better." },
];

const pillars = [
  { label: "Technology", text: "Custom software, web and mobile applications, cloud and automation." },
  { label: "Creativity", text: "Brand identity, UI/UX design and content that people remember." },
  { label: "Digital Marketing", text: "SEO, social media and performance campaigns focused on growth." },
];

/** The journey every client relationship follows — not a company history. */
const journey = [
  { stage: "Idea", text: "It starts with a goal, a problem or an opportunity you want to act on." },
  { stage: "Clarity", text: "Together we define the right solution, scope and success measures." },
  { stage: "Build", text: "We design and engineer the product with regular feedback and demos." },
  { stage: "Launch", text: "Tested, optimised and deployed — ready for real customers." },
  { stage: "Grow", text: "Marketing, data and continuous improvement drive lasting results." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RadixGlide"
        crumbs={[{ label: "About" }]}
        title={
          <>
            Technology With Purpose. <span className="text-gradient">Growth With Direction.</span>
          </>
        }
        text={site.positioning}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" arrow>
            Get a Free Consultation
          </Button>
          <Button href="/projects" size="lg" variant="outline-dark">
            See Our Work
          </Button>
        </div>
      </PageHero>

      {/* Who we are */}
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title="One team for technology, creativity and growth" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-midnight/70 lg:col-span-7">
            <Reveal>
              <p>
                RadixGlide is a full-service IT and digital solutions company. We bring software engineering,
                design and digital marketing together so businesses don&apos;t have to coordinate separate
                agencies to build and grow online.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Our approach is simple: understand the business first, then build technology and marketing
                around it — practical, measurable and designed to last.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-snow pb-16 lg:pb-24">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">What we do</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.label} delay={i * 0.08}>
                <div className="relative h-full overflow-hidden rounded-[26px] bg-navy p-8 text-white">
                  <div aria-hidden className="absolute -right-12 -top-12 size-40 rounded-full bg-electric/25 blur-3xl" />
                  <span className="relative font-mono text-sm text-azure">0{i + 1}</span>
                  <h3 className="relative mt-8 text-2xl font-bold tracking-[-0.03em]">{p.label}</h3>
                  <p className="relative mt-3 text-steel">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <p className="text-center text-sm text-midnight/50">
              {services.length} services across software, design and marketing —{" "}
              <Link href="/services" className="font-semibold text-electric hover:underline">
                explore them all
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-y relative overflow-hidden bg-midnight text-white">
        <div aria-hidden className="grid-dark mask-radial absolute inset-0" />
        <div className="container-x relative grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Our Mission",
              text: "To help businesses turn ideas into practical digital solutions — combining technology, creativity and marketing to create measurable growth.",
            },
            {
              icon: Compass,
              label: "Our Vision",
              text: "To be the trusted technology and digital growth partner for ambitious businesses, wherever they are on their journey.",
            },
          ].map(({ icon: Icon, label, text }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="glass h-full rounded-[28px] p-8 sm:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-electric text-white">
                  <Icon className="size-6" />
                </span>
                <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-azure">{label}</h2>
                <p className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach — journey timeline */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our approach"
            title="From first idea to lasting growth"
            text="Every partnership follows the same journey — focused on understanding, building the right thing and improving it over time."
          />
          <div className="relative mt-16">
            <div aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-electric via-azure to-electric/0 md:hidden" />
            <div aria-hidden className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-electric/0 via-electric to-electric/0 md:block" />
            <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
              {journey.map((j, i) => (
                <Reveal as="li" key={j.stage} delay={i * 0.12}>
                  <div className="flex gap-5 md:flex-col md:items-center md:text-center">
                    <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-electric text-sm font-bold text-white shadow-[0_0_0_6px_rgba(59,130,246,0.12)]">
                      {i + 1}
                    </span>
                    <div className="md:mt-6">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-midnight">{j.stage}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-midnight/55">{j.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-snow">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="What guides our work" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-[24px] border border-midnight/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric/25 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-snow text-electric transition-colors duration-500 group-hover:bg-navy group-hover:text-azure">
                    <Icon className="size-[22px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-midnight">{title}</h3>
                  <p className="mt-2 leading-relaxed text-midnight/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why RadixGlide */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why RadixGlide"
              title="Technology built around your business"
              text="Not the other way around."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 2) * 0.06}>
                <div className="flex h-full gap-4 rounded-[20px] bg-snow p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-electric/10 text-electric">
                    {i % 3 === 0 ? <Sparkles className="size-4" /> : i % 3 === 1 ? <ShieldCheck className="size-4" /> : <Target className="size-4" />}
                  </span>
                  <div>
                    <h3 className="font-bold text-midnight">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-midnight/55">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Let&apos;s build what&apos;s <span className="text-gradient">next — together.</span>
          </>
        }
        text="Tell us about your business and goals. We'll show you how technology and marketing can work together for you."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", whatsapp: true }}
      />
    </>
  );
}
