import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/** Light service card linking to the service detail page. */
export function ServiceCard({ service, index, className }: { service: Service; index?: number; className?: string }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-midnight/[0.07] bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/25 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.3)] sm:p-7",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-40 rounded-full bg-azure/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl border border-midnight/[0.07] bg-snow text-electric transition-all duration-500 group-hover:border-transparent group-hover:bg-navy group-hover:text-azure">
          <Icon className="size-[22px]" strokeWidth={1.75} />
        </span>
        {index !== undefined && (
          <span className="font-mono text-xs text-midnight/30">{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>
      <h3 className="relative mt-6 text-lg font-bold tracking-[-0.02em] text-midnight sm:mt-8 sm:text-xl">{service.title}</h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-midnight/55">{service.summary}</p>
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
        Learn more
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
