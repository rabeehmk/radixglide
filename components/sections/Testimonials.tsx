"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (step: number) => setState(([i]) => [(i + step + count) % count, step]),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const t = testimonials[index];
  const initials = t.name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="testimonials" className="section-y relative overflow-hidden bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            text="Founders and teams who trusted RadixGlide to build and grow their business."
          />
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center rounded-full border border-midnight/10 text-midnight transition-all hover:border-electric hover:bg-navy hover:text-azure active:scale-95"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center rounded-full bg-midnight text-white transition-all hover:bg-navy hover:text-azure active:scale-95"
              >
                <ArrowRight className="size-5" />
              </button>
              <span className="ml-3 font-mono text-sm text-midnight/40">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-8">
          <div
            className="relative overflow-hidden rounded-[32px] bg-snow p-7 sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <Quote aria-hidden className="absolute right-8 top-8 hidden size-32 text-electric/[0.07] sm:block" />
            <div className="relative min-h-[270px] sm:min-h-[280px]" aria-live="polite">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.figure
                  key={index}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 40, filter: "blur(6px)" }),
                    center: { opacity: 1, x: 0, filter: "blur(0px)" },
                    exit: (d: number) => ({ opacity: 0, x: d * -40, filter: "blur(6px)" }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`} role="img">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={cn("size-5", i < t.rating ? "fill-electric text-electric" : "text-midnight/15")}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-7 text-pretty text-xl font-medium leading-snug tracking-[-0.02em] text-midnight sm:text-2xl lg:text-[1.75rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-full bg-navy text-base font-bold text-azure">
                      {initials}
                    </span>
                    <span>
                      <span className="block font-bold text-midnight">{t.name}</span>
                      <span className="block text-sm text-midnight/50">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="relative mt-8 flex gap-2">
              {testimonials.map((x, i) => (
                <button
                  key={x.name}
                  type="button"
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-midnight/10"
                >
                  {i === index && (
                    <motion.span
                      key={`${index}-${paused}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-navy"
                      initial={{ width: paused ? "100%" : "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                    />
                  )}
                  {i < index && <span className="absolute inset-0 rounded-full bg-electric/15" />}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
