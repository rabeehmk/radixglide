"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, PenTool, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const floatingCards = [
  { label: "Custom Software Development", icon: Code2, pos: "left-0 top-0 sm:top-[6%]", delay: 0 },
  { label: "Digital Marketing", icon: Megaphone, pos: "right-0 top-[7%] sm:top-[18%]", delay: 1.2 },
  { label: "Branding & Design", icon: PenTool, pos: "left-0 bottom-[6%] sm:left-[2%] sm:bottom-[14%]", delay: 0.6 },
  { label: "IT Consulting", icon: Lightbulb, pos: "right-0 bottom-0 sm:right-[2%] sm:bottom-[4%]", delay: 1.8 },
];

/* Connector paths in a 100x100 viewBox, from each card toward the dashboard core. */
const connectors = [
  "M14 14 C 26 14, 30 30, 40 36",
  "M88 26 C 78 26, 72 34, 62 40",
  "M14 80 C 24 80, 30 70, 40 64",
  "M86 92 C 78 86, 72 74, 62 66",
];

const bars = [38, 52, 44, 66, 58, 78, 92];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1.3] w-full max-w-[580px] sm:aspect-[1/1.02]">
      {/* glow behind the core */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[90px]"
      />

      {/* connectors */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="hv-line" x1="0" x2="1">
            <stop offset="0" stopColor="#D6BE96" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D6BE96" stopOpacity="0.9" />
            <stop offset="1" stopColor="#D6BE96" stopOpacity="0" />
          </linearGradient>
        </defs>
        {connectors.map((d, i) => (
          <g key={d}>
            <path d={d} fill="none" stroke="rgba(168,131,79,0.18)" strokeWidth="0.25" strokeDasharray="0.8 0.8" vectorEffect="non-scaling-stroke" />
            <motion.path
              d={d}
              fill="none"
              stroke="#D6BE96"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: "drop-shadow(0 0 4px #D6BE96)" }}
              initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 0.88], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1 + i * 0.7, ease: "easeInOut", repeatDelay: 1.2 }}
            />
          </g>
        ))}
      </svg>

      {/* core dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 sm:w-[64%]"
      >
        <div className="glass relative overflow-hidden rounded-[22px] p-4 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:rounded-[26px] sm:p-5">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-electric/80" />
            </div>
          </div>

          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[11px]">
            Growth overview
          </p>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-4xl">+248%</span>
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-electric/15 px-1.5 py-0.5 text-[10px] font-semibold text-azure">
              <TrendingUp className="size-3" /> 32%
            </span>
          </div>

          {/* area chart */}
          <svg viewBox="0 0 200 70" className="mt-3 w-full" aria-hidden>
            <defs>
              <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#D6BE96" stopOpacity="0.35" />
                <stop offset="1" stopColor="#D6BE96" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[17, 35, 53].map((y) => (
              <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
            ))}
            <motion.path
              d="M0 60 C 20 56, 30 50, 45 52 S 75 38, 95 40 S 125 26, 145 28 S 180 10, 200 6 V70 H0Z"
              fill="url(#hv-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            />
            <motion.path
              d="M0 60 C 20 56, 30 50, 45 52 S 75 38, 95 40 S 125 26, 145 28 S 180 10, 200 6"
              fill="none"
              stroke="#D6BE96"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9, duration: 1.8, ease: "easeInOut" }}
            />
            <motion.circle
              cx="200" cy="6" r="3.5" fill="#D6BE96"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.6 }}
            />
          </svg>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5 sm:p-3">
              <p className="text-[9px] uppercase tracking-wider text-white/40 sm:text-[10px]">Sessions</p>
              <div className="mt-2 flex h-8 items-end gap-[3px] sm:h-10">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className={cn("flex-1 rounded-sm", i === bars.length - 1 ? "bg-electric" : "bg-white/20")}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.2 + i * 0.07, duration: 0.6, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5 font-mono text-[8.5px] leading-[1.7] text-steel sm:p-3 sm:text-[10px]">
              <p><span className="text-azure">const</span> build = idea</p>
              <p className="pl-2">.design()</p>
              <p className="pl-2">.ship()</p>
              <p className="pl-2">.<span className="text-azure">grow</span>();</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating service cards */}
      {floatingCards.map(({ label, icon: Icon, pos, delay }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn("absolute z-10", pos)}
        >
          <div
            className="glass flex max-w-[150px] items-center gap-2 rounded-2xl px-2.5 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] animate-float sm:max-w-[210px] sm:gap-3 sm:px-3.5 sm:py-3"
            style={{ animationDelay: `${delay}s` }}
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-xl bg-electric/15 text-azure ring-1 ring-electric/25 sm:size-9">
              <Icon className="size-3.5 sm:size-[18px]" />
            </span>
            <span className="text-[10.5px] font-semibold leading-tight text-white sm:text-[13px]">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
