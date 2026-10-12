import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-dark" | "outline-light" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "border border-azure/40 bg-navy text-white hover:border-azure hover:bg-midnight hover:shadow-[0_8px_40px_-6px_rgba(168,131,79,0.55)]",
  dark: "bg-midnight text-white hover:bg-navy hover:shadow-[0_10px_40px_-10px_rgba(11,37,69,0.7)]",
  "outline-dark":
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur-md hover:border-electric/50 hover:bg-white/[0.08]",
  "outline-light":
    "border border-midnight/15 bg-white/60 text-midnight backdrop-blur-md hover:border-electric/40 hover:bg-white",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  icon,
  className,
  size = "md",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.97]",
        size === "lg" ? "h-14 px-7 text-[15px]" : "h-11 px-5 text-sm",
        variants[variant],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
