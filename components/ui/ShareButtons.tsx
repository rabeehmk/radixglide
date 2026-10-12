"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsApp";

const glyph = {
  x: "M18.2 2.2h3.4l-7.4 8.5L23 21.8h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2.2h7l4.8 6.4 5.4-6.4zm-1.2 17.6h1.9L7.1 4.1H5.1l11.9 15.7z",
  linkedin:
    "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5z",
  facebook:
    "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
};

const btn =
  "grid size-10 place-items-center rounded-full border border-midnight/10 bg-white text-slate transition-all duration-300 hover:-translate-y-0.5 hover:border-electric hover:bg-electric hover:text-midnight";

/** Share an article. `url` must be absolute. */
export function ShareButtons({ url, title, className }: { url: string; title: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links = [
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, path: glyph.x },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, path: glyph.linkedin },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, path: glyph.facebook },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className={btn}>
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
            <path d={l.path} />
          </svg>
        </a>
      ))}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={btn}
      >
        <WhatsAppIcon className="size-4" />
      </a>
      <button type="button" onClick={copy} aria-label="Copy link" className={btn}>
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}
