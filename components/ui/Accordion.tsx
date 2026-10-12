"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

/** Animated FAQ accordion. One item open at a time. */
export function Accordion({
  items,
  tone = "light",
  defaultOpen = 0,
  className,
}: {
  items: Item[];
  tone?: "light" | "dark";
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const dark = tone === "dark";

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li
            key={item.q}
            className={cn(
              "overflow-hidden rounded-[20px] border transition-colors duration-300",
              dark
                ? isOpen
                  ? "border-electric/40 bg-white/[0.06]"
                  : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                : isOpen
                  ? "border-electric/30 bg-white shadow-[0_20px_50px_-30px_rgba(11,37,69,0.35)]"
                  : "border-midnight/[0.08] bg-white hover:border-midnight/20",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7"
              >
                <span className={cn("text-base font-semibold tracking-[-0.01em] sm:text-lg", dark ? "text-white" : "text-midnight")}>
                  {item.q}
                </span>
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                    isOpen
                      ? "rotate-45 bg-electric text-midnight"
                      : dark
                        ? "border border-white/15 text-white"
                        : "border border-midnight/10 text-midnight",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className={cn("px-5 pb-6 pr-16 text-[15px] leading-relaxed sm:px-7", dark ? "text-steel" : "text-slate")}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
