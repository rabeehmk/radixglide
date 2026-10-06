"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section id="process" className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              From Idea to <span className="text-electric">Impact</span>
            </>
          }
          text="A clear, collaborative six-step process that keeps every project focused, transparent and on schedule."
        />

        <div className="relative mt-16 lg:mt-24">
          {/* desktop horizontal track */}
          <div aria-hidden className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-px bg-midnight/10 lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-electric via-azure to-azure"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.2, ease }}
            />
          </div>
          {/* mobile vertical track */}
          <div aria-hidden className="absolute bottom-8 left-7 top-7 w-px bg-midnight/10 lg:hidden">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-electric to-azure"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.2, ease }}
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((s, i) => (
              <motion.li
                key={s.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.25, ease }}
                className="group flex gap-6 lg:flex-col lg:items-center lg:text-center"
              >
                <span
                  className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border text-sm font-bold transition-all duration-500 group-hover:scale-110 ${
                    i === processSteps.length - 1
                      ? "border-transparent bg-electric text-white shadow-[0_0_30px_-4px_rgba(59,130,246,0.8)]"
                      : "border-midnight/10 bg-white text-electric shadow-[0_10px_30px_-12px_rgba(15,23,42,0.35)] group-hover:border-electric group-hover:bg-navy group-hover:text-azure"
                  }`}
                >
                  {s.no}
                </span>
                <div className="pt-2 lg:pt-6">
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-midnight">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-midnight/55 lg:mx-auto">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
