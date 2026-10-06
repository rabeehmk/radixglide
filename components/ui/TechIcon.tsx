import { Boxes, Cloud, Webhook, type LucideIcon } from "lucide-react";
import {
  siNextdotjs,
  siReact,
  siPython,
  siDjango,
  siNodedotjs,
  siJavascript,
  siTypescript,
  siPostgresql,
  siMysql,
  siTailwindcss,
  siCloudflare,
  siFigma,
  siDocker,
  siLinux,
  siGoogleanalytics,
  siGoogleads,
  siGooglesearchconsole,
  siGoogletagmanager,
  siMeta,
  siInstagram,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/utils";

const brandIcons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  React: siReact,
  Python: siPython,
  Django: siDjango,
  "Node.js": siNodedotjs,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  "Tailwind CSS": siTailwindcss,
  Cloudflare: siCloudflare,
  Figma: siFigma,
  Docker: siDocker,
  Linux: siLinux,
  "Google Analytics": siGoogleanalytics,
  "Google Ads": siGoogleads,
  "Google Search Console": siGooglesearchconsole,
  "Tag Manager": siGoogletagmanager,
  "Meta Ads Manager": siMeta,
  "Meta Business Suite": siMeta,
  Instagram: siInstagram,
};

const lucideIcons: Record<string, LucideIcon> = {
  "REST APIs": Webhook,
  Webhooks: Webhook,
  AWS: Cloud,
};

/** Monochrome technology glyph; falls back to a generic icon for unmapped names. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-6", className)} fill="currentColor" aria-hidden>
        <path d={brand.path} />
      </svg>
    );
  }
  const Icon = lucideIcons[name] ?? Boxes;
  return <Icon className={cn("size-6", className)} strokeWidth={1.75} aria-hidden />;
}
