"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";
import { Stats } from "./Stats";

/* Deterministic particle field (no Math.random → no hydration mismatch). */
const particles = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37.7) % 100,
  top: (i * 61.3) % 100,
  size: 1 + (i % 3),
  delay: (i % 7) * 0.6,
}));

const ease = [0.22, 1, 0.36, 1] as const;

/** Set to a YouTube/Vimeo embed URL to enable the story video. */
const STORY_VIDEO_URL = "";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setVideoOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-midnight pt-28 text-white sm:pt-32 lg:pt-36">
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-dark mask-radial absolute inset-0" />
        <div className="absolute -left-40 top-0 size-[620px] rounded-full bg-electric/25 blur-[140px]" />
        <div className="absolute -right-20 top-40 size-[520px] rounded-full bg-navy blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-midnight" />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-electric/60 animate-pulse-slow"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/[0.07] py-1.5 pl-1.5 pr-4 text-xs font-medium text-azure sm:text-sm"
            >
              <span className="grid size-6 place-items-center rounded-full bg-electric text-white">
                <Sparkles className="size-3.5" />
              </span>
              Your IT &amp; Digital Growth Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-7 text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]"
            >
              Technology Solutions That Drive{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Real Growth</span>
                <motion.svg
                  aria-hidden
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                >
                  <motion.path
                    d="M2 12 C 80 2, 200 2, 298 10"
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-steel sm:text-lg"
            >
              RadixGlide delivers customized software development, digital marketing, and complete IT
              solutions that help businesses build, scale, and succeed in the digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/contact" size="lg" arrow>
                Get Started
              </Button>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full px-3 pr-6 text-[15px] font-semibold text-white transition-colors hover:text-azure"
              >
                <span className="relative grid size-10 place-items-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
                  <span aria-hidden className="absolute inset-0 animate-ping rounded-full border border-electric/40 [animation-duration:2.5s]" />
                  <Play className="ml-0.5 size-4 fill-current" />
                </span>
                Watch Our Story
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-6 xl:col-span-6">
            <HeroVisual />
          </div>
        </div>

        <Stats />
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Our story video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-midnight/80 p-4 backdrop-blur-md"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-navy"
            >
              {STORY_VIDEO_URL ? (
                <iframe
                  src={STORY_VIDEO_URL}
                  title="RadixGlide story"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              ) : (
                <div className="grid-dark grid size-full place-items-center text-center">
                  <div>
                    <span className="mx-auto grid size-16 place-items-center rounded-full bg-electric text-white">
                      <Play className="ml-1 size-6 fill-current" />
                    </span>
                    <p className="mt-5 text-xl font-bold">Our story video is coming soon</p>
                    <p className="mt-2 text-sm text-steel">Ideas. Build. Grow.</p>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                autoFocus
                className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-midnight/60 text-white backdrop-blur transition-colors hover:bg-electric hover:text-white"
              >
                <X className="size-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
