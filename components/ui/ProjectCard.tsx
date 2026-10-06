"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectPreview } from "./ProjectPreview";

/** Project visual: the real cover image when provided, otherwise a code-drawn mockup. */
export function ProjectVisual({ project, priority }: { project: Project; priority?: boolean }) {
  return project.cover ? (
    <Image
      src={project.cover}
      alt={`${project.client} — ${project.title}`}
      width={1120}
      height={760}
      priority={priority}
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="h-auto w-full rounded-2xl"
    />
  ) : (
    <ProjectPreview type={project.preview} />
  );
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <article ref={ref} className={cn("group", className)}>
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.name} — ${project.title}`}
        className="block h-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] transition-colors duration-500 hover:border-electric/30"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-midnight bg-gradient-to-br from-electric/25 via-navy to-midnight sm:aspect-[16/11]">
          <div aria-hidden className="grid-dark absolute inset-0 opacity-60" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[80px] transition-opacity duration-700 group-hover:opacity-100 lg:opacity-60"
          />
          <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center p-4 sm:p-10">
            <div className="w-full max-w-[560px] transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <ProjectVisual project={project} />
            </div>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">{project.category}</p>
            <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
              {project.name}
              <span className="mt-1 block text-lg text-white/40 xl:mt-0 xl:inline xl:text-3xl">
                <span className="hidden xl:inline"> — </span>
                {project.title}
              </span>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">{project.description}</p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-electric group-hover:bg-electric group-hover:text-white">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
