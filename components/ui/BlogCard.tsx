import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate, readingTime, type BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";
import { BlogCover } from "./BlogCover";

export function BlogImage({ post, className, priority }: { post: BlogPost; className?: string; priority?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {post.cover ? (
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <BlogCover category={post.category} seed={post.slug} />
      )}
    </div>
  );
}

export function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[24px] border border-midnight/[0.07] bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/25 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.3)]"
      >
        <BlogImage post={post} className="aspect-[16/10]" />
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{post.category}</p>
          <h3 className="mt-3 text-lg font-bold leading-snug tracking-[-0.02em] text-midnight sm:text-xl">{post.title}</h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-midnight/55">{post.excerpt}</p>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-midnight/[0.06] pt-5">
            <span className="flex items-center gap-2 text-xs text-midnight/45">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <Clock className="size-3.5" aria-hidden />
              {readingTime(post)} min read
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric">
              Read Article
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
