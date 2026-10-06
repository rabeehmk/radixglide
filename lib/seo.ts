import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  /** Path beginning with "/", used for the canonical URL. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Use the title as-is instead of applying the "| RadixGlide" template. */
  absoluteTitle?: boolean;
};

/** Unique title, description, canonical, Open Graph and Twitter metadata for a page. */
export function pageMetadata({ title, description, path, type = "website", publishedTime, absoluteTitle }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
