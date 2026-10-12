import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, homeServices } from "@/data/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const featuredPoints = ["Web & SaaS platforms", "ERP, CRM & internal tools", "APIs & business automation"];

export function Services() {
  return (
    <section id="services" className="section-y relative bg-snow">
      <div aria-hidden className="grid-light mask-radial pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Complete IT &amp; Digital Solutions for{" "}
                <span className="text-electric">Your Business</span>
              </>
            }
          />
          <Reveal delay={0.2} className="lg:max-w-sm">
            <p className="text-pretty text-base leading-relaxed text-slate sm:text-lg">
              From powerful software solutions to result-driven digital marketing, we provide
              end-to-end services designed to take your business to the next level.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {homeServices.map((s, i) => {
            const Icon = getService(s.slug)!.icon;
            if (s.featured) {
              return (
                <Reveal as="li" key={s.title} className="md:col-span-2 lg:row-span-2">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] bg-navy p-7 text-white shadow-[0_30px_80px_-30px_rgba(11,37,69,0.6)] transition-transform duration-500 hover:-translate-y-1.5 sm:p-10"
                  >
                    <div aria-hidden className="grid-dark absolute inset-0 opacity-70" />
                    <div
                      aria-hidden
                      className="absolute -right-24 -top-24 size-80 rounded-full bg-electric/25 blur-[90px] transition-opacity duration-500 group-hover:opacity-80"
                    />
                    <div aria-hidden className="absolute bottom-0 right-0 size-72 translate-x-1/4 translate-y-1/4 rounded-full border border-electric/15" />
                    <div aria-hidden className="absolute bottom-0 right-0 size-[26rem] translate-x-1/3 translate-y-1/3 rounded-full border border-electric/10" />

                    <div className="relative flex items-start justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl bg-electric text-midnight shadow-[0_0_40px_-5px_rgba(168,131,79,0.6)]">
                        <Icon className="size-6" />
                      </span>
                      <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold text-azure">
                        Core expertise
                      </span>
                    </div>

                    <div className="relative mt-auto pt-16">
                      <h3 className="max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-4 max-w-md text-steel">{s.summary}</p>
                      <ul className="mt-6 space-y-2.5">
                        {featuredPoints.map((p) => (
                          <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                            <Check className="size-4 text-azure" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-azure">
                        Start a software project
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            }
            const last = i === homeServices.length - 1;
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={(i % 4) * 0.06}
                className={cn(last && "md:col-span-2")}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-midnight/[0.07] bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/20 hover:shadow-[0_30px_60px_-25px_rgba(11,37,69,0.35)] sm:p-7"
                >
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 size-40 rounded-full bg-azure/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-midnight/[0.07] bg-snow text-electric transition-all duration-500 group-hover:border-transparent group-hover:bg-navy group-hover:text-azure">
                      <Icon className="size-[22px]" strokeWidth={1.75} />
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-midnight/10 text-midnight/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                      <ArrowUpRight className="size-4 -rotate-45" />
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-lg sm:mt-10 font-bold tracking-[-0.02em] text-midnight sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-slate">{s.summary}</p>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/services" variant="outline-light" arrow>
            Explore all 15 services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
