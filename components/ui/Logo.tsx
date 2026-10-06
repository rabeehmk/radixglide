import Link from "next/link";
import { cn } from "@/lib/utils";

/** RadixGlide wordmark. The mark is a stylised root/glide path — swap for the real SVG logo when available. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/#home"
      aria-label="RadixGlide home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className="size-9 transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span
        className={cn(
          "text-[19px] font-extrabold tracking-[-0.04em]",
          tone === "dark" ? "text-white" : "text-midnight",
        )}
      >
        Radix<span className="text-azure">Glide</span>
      </span>
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="rg-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#rg-mark)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" fill="none" stroke="#60A5FA" strokeOpacity="0.35" />
      <path
        d="M11 28V13h8.5a5 5 0 0 1 0 10H15l9 5.5"
        fill="none"
        stroke="#F8FAFC"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="13" r="2.6" fill="#60A5FA" />
    </svg>
  );
}
