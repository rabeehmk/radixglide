import { AlertTriangle } from "lucide-react";
import { headingId } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  /** Flags the section as needing legal review before publishing. */
  review?: boolean;
};

export function LegalDocument({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" crumbs={[{ label: title }]} title={title} text={intro} />
      <section className="section-y bg-snow">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="Sections" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 rounded-[20px] border border-midnight/[0.07] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/40">Contents</p>
              <ol className="mt-4 space-y-2.5 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#${headingId(s.title)}`} className="text-slate hover:text-electric">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl lg:col-span-8 lg:col-start-5">
            <div role="note" className="flex gap-3 rounded-[20px] border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden />
              <p>
                <strong>Template — requires legal review.</strong> This document is a starting template and is
                not legal advice. Sections marked <em>“Legal review required”</em> must be completed and checked by
                a qualified legal professional for your jurisdiction before this page is relied on.
              </p>
            </div>
            <p className="mt-6 text-sm text-midnight/50">Last updated: {updated}</p>

            {sections.map((s, i) => (
              <section key={s.title} className="mt-12">
                <h2 id={headingId(s.title)} className="scroll-mt-28 text-2xl font-bold tracking-[-0.03em] text-midnight">
                  {i + 1}. {s.title}
                </h2>
                {s.review && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                    <AlertTriangle className="size-3.5" aria-hidden /> Legal review required
                  </p>
                )}
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 leading-[1.8] text-slate">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-slate">
                        <span aria-hidden className="mt-[10px] size-1.5 shrink-0 rounded-full bg-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
