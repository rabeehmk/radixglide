import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./SectionHeading";

type Crumb = { label: string; href?: string };

/** Dark hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  children,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-midnight pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:pb-24",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-dark mask-radial absolute inset-0" />
        <div className="absolute -left-40 -top-20 size-[560px] rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute -right-32 top-24 size-[420px] rounded-full bg-navy blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className={cn("container-x", center && "text-center")}>
        {crumbs && (
          <Reveal>
            <nav aria-label="Breadcrumb" className={cn("mb-8", center && "flex justify-center")}>
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-steel">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <ChevronRight aria-hidden className="size-3.5 text-white/30" />
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white/80">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}
        <Reveal>
          <Eyebrow tone="dark" className={center ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className={cn(
              "mt-6 max-w-4xl text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl",
              center && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>
        {text && (
          <Reveal delay={0.16}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel sm:text-lg",
                center && "mx-auto",
              )}
            >
              {text}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24}>
            <div className={cn("mt-10", center && "flex justify-center")}>{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
