"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { blogCategories, type BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/ui/BlogCard";

const PAGE_SIZE = 6;

/** Searchable, filterable list of articles with "load more". */
export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)),
    );
  }, [posts, category, query]);

  const shown = filtered.slice(0, visible);
  const select = (c: string) => {
    setCategory(c);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0"
        >
          {["All", ...blogCategories].map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => select(c)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                category === c
                  ? "border-midnight bg-midnight text-white"
                  : "border-midnight/10 bg-white text-midnight/65 hover:border-electric/40 hover:text-midnight",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative block w-full shrink-0 lg:w-72">
          <span className="sr-only">Search articles</span>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-midnight/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search articles…"
            className="h-11 w-full rounded-full border border-midnight/10 bg-white pl-11 pr-10 text-sm text-midnight outline-none transition-colors placeholder:text-midnight/40 focus:border-electric"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-midnight/40 hover:bg-midnight/5 hover:text-midnight"
            >
              <X className="size-3.5" />
            </button>
          )}
        </label>
      </div>

      <p className="mt-6 text-sm text-midnight/50" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {category !== "All" && ` in ${category}`}
        {query && ` matching “${query}”`}
      </p>

      {shown.length > 0 ? (
        <motion.ul layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.li
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlogCard post={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-6 rounded-[24px] border border-dashed border-midnight/15 bg-white px-6 py-16 text-center">
          <p className="text-lg font-semibold text-midnight">No articles found</p>
          <p className="mt-2 text-sm text-midnight/55">
            {category !== "All" && !query
              ? `We haven't published anything in ${category} yet — check back soon.`
              : "Try a different search term or category."}
          </p>
          <button
            type="button"
            onClick={() => {
              select("All");
              setQuery("");
            }}
            className="mt-6 text-sm font-semibold text-electric hover:underline"
          >
            Show all articles
          </button>
        </div>
      )}

      {filtered.length > visible && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex h-12 items-center rounded-full border border-midnight/15 bg-white px-7 text-sm font-semibold text-midnight transition-all hover:border-electric hover:text-electric active:scale-[0.97]"
          >
            Load more articles
          </button>
        </div>
      )}
    </div>
  );
}
