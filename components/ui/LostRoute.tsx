"use client";

import { motion } from "framer-motion";

/** Animated "route that drifts off course" illustration for the 404 page. */
export function LostRoute() {
  return (
    <div aria-hidden className="relative mx-auto h-40 w-full max-w-lg sm:h-48">
      <svg viewBox="0 0 400 160" className="absolute inset-0 size-full" fill="none">
        <defs>
          <linearGradient id="lr-line" x1="0" x2="1">
            <stop offset="0" stopColor="#A8834F" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#D6BE96" />
            <stop offset="1" stopColor="#A8834F" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* the expected route */}
        <path d="M20 120 H380" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 8" />
        {/* the route taken */}
        <motion.path
          d="M20 120 C 110 120, 140 120, 190 100 S 260 30, 330 40"
          stroke="url(#lr-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <circle cx="20" cy="120" r="5" fill="#A8834F" />
        <circle cx="380" cy="120" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      </svg>
      <motion.div
        className="absolute left-[82.5%] top-[25%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 1.9 }, scale: { delay: 1.9 }, y: { delay: 2.2, duration: 3, repeat: Infinity } }}
      >
        <span className="glass grid place-items-center rounded-2xl px-4 py-2 font-mono text-2xl font-bold text-azure sm:text-3xl">
          404
        </span>
      </motion.div>
    </div>
  );
}
