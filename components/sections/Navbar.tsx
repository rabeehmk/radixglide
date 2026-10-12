"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsApp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500",
          scrolled || open
            ? "border-azure/15 bg-navy/90 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Logo className="relative z-10" />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-white xl:px-3.5",
                  isActive(l.href) ? "text-white" : "text-white/70",
                )}
              >
                {l.label}
                {isActive(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-azure to-transparent"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="/contact" arrow className="hidden sm:inline-flex lg:hidden xl:inline-flex">
            Get a Free Consultation
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-5 rounded bg-current transition-all duration-300",
                  open && "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] w-5 rounded bg-current transition-all duration-300",
                  open && "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
            className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-navy px-6 pb-10 pt-28 lg:hidden"
          >
            <div aria-hidden className="grid-dark mask-radial pointer-events-none absolute inset-0" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-navy blur-3xl"
            />
            <ul className="relative space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4 text-3xl font-bold tracking-tight text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="size-6 text-white/30 transition-all group-hover:text-azure" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative mt-auto space-y-4 pt-10"
            >
              <Button
                href="/contact"
                arrow
                size="lg"
                className="w-full"
              >
                Get a Free Consultation
              </Button>
              <WhatsAppButton size="lg" className="w-full" hideIfUnconfigured />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
