import {
  Bot,
  Code2,
  Globe,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  TrendingUp,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import type { BlogCategory } from "@/data/blog";

const icons: Record<BlogCategory, LucideIcon> = {
  "Software Development": Code2,
  "Web Development": Globe,
  "Digital Marketing": Megaphone,
  SEO: Search,
  "Business Growth": TrendingUp,
  "AI & Automation": Bot,
  "E-commerce": ShoppingBag,
  Branding: Palette,
  Technology: Cpu,
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Generated, on-brand cover art used until a real article image is added. */
export function BlogCover({ category, seed }: { category: BlogCategory; seed: string }) {
  const Icon = icons[category];
  const h = hash(seed);
  const x = 20 + (h % 60);
  const y = 15 + ((h >> 3) % 55);
  const rings = 3 + (h % 3);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-midnight bg-gradient-to-br from-electric/30 via-navy to-midnight">
      <div className="grid-dark absolute inset-0 opacity-70" />
      <div
        className="absolute size-2/3 rounded-full bg-electric/30 blur-[70px]"
        style={{ left: `${x - 30}%`, top: `${y - 30}%` }}
      />
      {Array.from({ length: rings }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-azure/15"
          style={{
            width: `${(i + 1) * 28}%`,
            aspectRatio: "1",
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <div
        className="absolute grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-azure shadow-[0_20px_50px_-15px_rgba(168,131,79,0.6)] backdrop-blur-md transition-transform duration-700 group-hover:scale-110 sm:size-16"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      >
        <Icon className="size-6 sm:size-7" strokeWidth={1.75} />
      </div>
    </div>
  );
}
