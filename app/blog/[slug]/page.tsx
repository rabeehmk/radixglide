import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Lightbulb } from "lucide-react";
import { formatDate, getPost, headingId, posts, readingTime, sortedPosts, type Block } from "@/data/blog";
import { site } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard, BlogImage } from "@/components/ui/BlogCard";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/sections/CTA";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

function ArticleBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={headingId(block.text)} className="mt-14 scroll-mt-28 text-2xl font-bold tracking-[-0.03em] text-midnight sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-8 text-xl font-bold tracking-[-0.02em] text-midnight">{block.text}</h3>;
    case "p":
      return <p className="mt-5 text-[17px] leading-[1.8] text-slate">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] leading-[1.7] text-slate">
              <span aria-hidden className="mt-[11px] size-1.5 shrink-0 rounded-full bg-electric" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-electric pl-6 text-xl font-medium leading-snug tracking-[-0.01em] text-midnight sm:text-2xl">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="my-10 flex gap-4 rounded-[20px] border border-electric/20 bg-electric/[0.06] p-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-electric text-midnight">
            <Lightbulb className="size-5" />
          </span>
          <div>
            <p className="font-bold text-midnight">{block.title}</p>
            <p className="mt-1.5 leading-relaxed text-slate">{block.text}</p>
          </div>
        </aside>
      );
  }
}

export default async function ArticlePage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const toc = post.content.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const sameCategory = sortedPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const related = [...sameCategory, ...sortedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, 3);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        title={post.title}
        text={post.excerpt}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-steel">
          <span className="font-semibold text-white">{post.author}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden /> {readingTime(post)} min read
          </span>
        </div>
      </PageHero>

      <article className="bg-snow pb-16 lg:pb-24">
        <div className="container-x">
          <Reveal className="-mt-px pt-12 sm:pt-16">
            <BlogImage post={post} priority className="aspect-[16/8] rounded-[28px]" />
          </Reveal>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="space-y-10 lg:sticky lg:top-28">
                {toc.length > 2 && (
                  <nav aria-label="Table of contents" className="rounded-[20px] border border-midnight/[0.07] bg-white p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/40">On this page</p>
                    <ol className="mt-4 space-y-3 text-sm">
                      {toc.map((h) => (
                        <li key={h.text}>
                          <a href={`#${headingId(h.text)}`} className="text-slate transition-colors hover:text-electric">
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/40">Share</p>
                  <ShareButtons url={url} title={post.title} className="mt-4" />
                </div>
              </div>
            </aside>

            <div className="max-w-[720px] lg:col-span-8 lg:col-start-5">
              {post.content.map((block, i) => (
                <ArticleBlock key={i} block={block} />
              ))}

              <div className="mt-16 flex flex-col gap-6 border-t border-midnight/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-electric">
                  <ArrowLeft className="size-4" /> All articles
                </Link>
                <ShareButtons url={url} title={post.title} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white py-16 lg:py-24" aria-labelledby="related-heading">
          <div className="container-x">
            <h2 id="related-heading" className="text-3xl font-bold tracking-[-0.03em] text-midnight sm:text-4xl">
              Related articles
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.06}>
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABanner
        title={
          <>
            Let&apos;s turn insight <span className="text-gradient">into results.</span>
          </>
        }
        text="Whether you need custom software, a high-converting website or a digital marketing strategy, our team can help."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "Talk to an Expert", whatsapp: true }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: url,
        }}
      />
    </>
  );
}
