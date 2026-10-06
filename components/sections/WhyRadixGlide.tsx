"use client";

import { motion } from "framer-motion";
import { reasons } from "@/data/home";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function AnimatedCheck({ delay }: { delay: number }) {
  return (
    <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-electric/25 bg-electric/10 transition-colors duration-500 group-hover:bg-electric">
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
        <motion.path
          d="M5 12.5l4.5 4.5L19 7.5"
          fill="none"
          className="stroke-azure transition-colors duration-500 group-hover:stroke-white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: delay + 0.2, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
}

export function WhyRadixGlide() {
  return (
    <section
      id="about"
      className="section-y relative isolate overflow-hidden bg-midnight bg-gradient-to-br from-electric/25 via-navy to-midnight text-white"
    >
      <div aria-hidden className="grid-dark absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden className="absolute -left-40 bottom-0 -z-10 size-[520px] rounded-full bg-electric/10 blur-[140px]" />

      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow tone="dark">Why Businesses Choose RadixGlide</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.75rem]">
                Technology built around <span className="text-gradient">your business</span>
                <span className="text-white/35"> — not the other way around.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-steel sm:text-lg">
                We blend engineering, creativity and marketing into one accountable team — so every line
                of code and every campaign moves your numbers.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {["SW", "MK", "UX", "IT"].map((t) => (
                    <span
                      key={t}
                      className="grid size-11 place-items-center rounded-full border-2 border-midnight bg-navy text-[11px] font-bold text-azure"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-steel">
                  One team. <span className="font-semibold text-white">Every discipline.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} direction="right" delay={i * 0.06}>
              <div className="group flex h-full items-start gap-5 rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:border-electric/30 hover:bg-white/[0.06] sm:p-6">
                <AnimatedCheck delay={i * 0.08} />
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.02em]">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
