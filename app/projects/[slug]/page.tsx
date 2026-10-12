import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ImageIcon } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectVisual } from "@/components/ui/ProjectCard";
import { TechIcon } from "@/components/ui/TechIcon";
import { CTABanner } from "@/components/sections/CTA";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.client} — ${p.title} Case Study`,
    description: p.description,
    path: `/projects/${p.slug}`,
  });
}

export default async function ProjectPage({ params }: Params) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client / Brand", value: p.client },
    { label: "Industry", value: p.industry },
    { label: "Category", value: p.category },
    { label: "Project", value: p.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="Case study"
        crumbs={[{ label: "Projects", href: "/projects" }, { label: p.name }]}
        title={
          <>
            {p.name} <span className="block text-white/40">{p.title}</span>
          </>
        }
        text={p.description}
      />

      {/* Visual + facts */}
      <section className="bg-midnight pb-16 text-white lg:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-midnight bg-gradient-to-br from-electric/25 via-navy to-midnight p-6 sm:p-12 lg:p-16">
              <div aria-hidden className="grid-dark absolute inset-0 opacity-60" />
              <div aria-hidden className="absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[100px]" />
              <div className="relative mx-auto max-w-3xl">
                <ProjectVisual project={p} priority />
              </div>
            </div>
          </Reveal>
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-midnight p-5 sm:p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{f.label}</dt>
                <dd className="mt-2 font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview / challenge / solution */}
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Overview" title="Project overview" />
          </div>
          <div className="space-y-10 lg:col-span-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-slate sm:text-xl">{p.overview}</p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-[24px] border border-midnight/[0.07] bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">The challenge</p>
                  <p className="mt-4 leading-relaxed text-slate">{p.challenge}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-[24px] bg-navy p-7 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">Our solution</p>
                  <p className="mt-4 leading-relaxed text-white/80">{p.solution}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features + technologies */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Features" title="Key features" />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <Reveal as="li" key={f} delay={i * 0.05}>
                  <div className="flex h-full items-start gap-3 rounded-[18px] bg-snow p-4">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-electric text-midnight">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-midnight/80">{f}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Technology" title="Technologies used" />
            <Reveal className="mt-10">
              {p.technologies.length ? (
                <ul className="flex flex-wrap gap-3">
                  {p.technologies.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 rounded-2xl border border-midnight/[0.08] px-4 py-2.5 text-sm font-medium text-midnight/80">
                      <TechIcon name={t} className="size-5" />
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-[20px] border border-dashed border-midnight/15 p-6 text-sm text-midnight/50">
                  The technology stack for this project can be added here once confirmed.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-y bg-snow">
        <div className="container-x">
          <SectionHeading eyebrow="Screenshots" title="Inside the project" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {(p.screenshots.length ? p.screenshots : [null, null, null]).map((src, i) => (
              <Reveal as="li" key={src ?? i} delay={i * 0.06}>
                {src ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-midnight/[0.07]">
                    <Image src={src} alt={`${p.client} screenshot ${i + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[22px] border border-dashed border-midnight/15 bg-white text-midnight/35">
                    <ImageIcon className="size-7" aria-hidden />
                    <span className="text-sm">Screenshot placeholder</span>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-snow pb-16 lg:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-8 rounded-[28px] bg-midnight p-8 text-white sm:p-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">Outcome</p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em]">Results</h2>
              </div>
              <div className="lg:col-span-8">
                {p.outcomes.length ? (
                  <ul className="space-y-3">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-white/85">
                        <Check className="mt-1 size-4 shrink-0 text-azure" /> {o}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rounded-[20px] border border-dashed border-white/15 p-6 text-steel">
                    Project outcomes can be added here once verified.
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-electric">
              <ArrowLeft className="size-4" /> All projects
            </Link>
            <Link href={`/projects/${next.slug}`} className="group inline-flex items-center gap-2 text-sm font-semibold text-midnight hover:text-electric">
              Next: {next.name} — {next.title}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Have a similar <span className="text-gradient">project in mind?</span>
          </>
        }
        text="Let's talk about what you want to build and how we can help you get there."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", whatsapp: true }}
      />
    </>
  );
}
