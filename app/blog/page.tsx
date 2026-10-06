import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate, readingTime, sortedPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BlogImage } from "@/components/ui/BlogCard";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Blog — Insights on Software, Marketing & Growth",
  description:
    "Practical insights on software development, web development, digital marketing, SEO, AI & automation, branding and business growth from the RadixGlide team.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = sortedPosts.find((p) => p.featured) ?? sortedPosts[0];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        crumbs={[{ label: "Blog" }]}
        title={
          <>
            Insights for the <span className="text-gradient">Digital World</span>
          </>
        }
        text="Explore practical insights about software development, digital marketing, technology, branding and business growth."
      />

      <section className="bg-snow pt-16 sm:pt-20" aria-labelledby="featured-heading">
        <div className="container-x">
          <h2 id="featured-heading" className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">
            Featured article
          </h2>
          <Reveal className="mt-6">
            <article className="group">
              <Link
                href={`/blog/${featured.slug}`}
                className="grid overflow-hidden rounded-[28px] border border-midnight/[0.07] bg-white transition-all duration-500 hover:border-electric/25 hover:shadow-[0_40px_80px_-40px_rgba(15,23,42,0.4)] lg:grid-cols-2"
              >
                <BlogImage post={featured} priority className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px]" />
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{featured.category}</p>
                  <h3 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-[-0.035em] text-midnight sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-midnight/60">{featured.excerpt}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-midnight/50">
                    <span className="font-semibold text-midnight/80">{featured.author}</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden /> {readingTime(featured)} min read
                    </span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-electric">
                    Read Article
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-snow" aria-labelledby="latest-heading">
        <div className="container-x">
          <h2 id="latest-heading" className="mb-8 text-3xl font-bold tracking-[-0.03em] text-midnight sm:text-4xl">
            Latest articles
          </h2>
          <BlogExplorer posts={sortedPosts} />
        </div>
      </section>

      <CTABanner
        className="bg-snow"
        title={
          <>
            Ready to put ideas <span className="text-gradient">into action?</span>
          </>
        }
        text="Talk to our team about your website, software or digital marketing goals."
        primary={{ label: "Get a Free Consultation", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
