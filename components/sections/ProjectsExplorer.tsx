"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter));

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {projectFilters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.filters.includes(f)).length;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === f
                  ? "border-electric bg-electric text-white"
                  : "border-white/10 bg-white/[0.03] text-steel hover:border-white/25 hover:text-white",
              )}
            >
              {f}
              <span className={cn("text-xs", filter === f ? "text-white/70" : "text-white/30")}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-10 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.li
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} className="h-full" />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
