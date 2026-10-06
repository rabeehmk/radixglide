"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.5-8.5z" />
    </svg>
  );
}

/**
 * Floating WhatsApp chat button (bottom-right). Renders only when a WhatsApp number is
 * configured in data/site.ts or NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export function FloatingWhatsApp() {
  const href = whatsappLink();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!href) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with RadixGlide on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group fixed bottom-5 right-5 z-[55] flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
        >
          <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:3s]" />
          <WhatsAppIcon className="relative size-7" />
          <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[160px] group-hover:pr-1 sm:block">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/**
 * Inline WhatsApp button. Falls back to `fallbackHref` (usually /contact) when no number is
 * configured, so the button is never a dead end.
 */
export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  fallbackHref = "/contact",
  className,
  size = "md",
  hideIfUnconfigured = false,
}: {
  message?: string;
  label?: string;
  fallbackHref?: string;
  className?: string;
  size?: "md" | "lg";
  /** Render nothing (instead of linking to the fallback) when no number is configured. */
  hideIfUnconfigured?: boolean;
}) {
  const href = whatsappLink(message);
  const external = Boolean(href);
  if (!href && hideIfUnconfigured) return null;
  return (
    <a
      href={href ?? fallbackHref}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] font-semibold text-midnight transition-all duration-300 hover:shadow-[0_10px_35px_-8px_rgba(37,211,102,0.7)] hover:brightness-105 active:scale-[0.97]",
        size === "lg" ? "h-14 px-7 text-[15px]" : "h-11 px-5 text-sm",
        className,
      )}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}
