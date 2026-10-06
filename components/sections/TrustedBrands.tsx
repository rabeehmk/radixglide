import { brands } from "@/data/home";

/* Typographic wordmarks stand in for client logos — replace each with an <Image> of the real SVG logo. */
const glyphs = ["◆", "●", "◐", "✿", "♥", "◎", "❖", "▲"];

function Wordmark({ name, i }: { name: string; i: number }) {
  return (
    <span className="group flex shrink-0 items-center gap-2.5 px-8 text-midnight/35 grayscale transition-all duration-300 hover:text-electric hover:grayscale-0 sm:px-12">
      <span className="text-lg text-midnight/25 transition-colors duration-300 group-hover:text-azure">
        {glyphs[i % glyphs.length]}
      </span>
      <span className="whitespace-nowrap text-lg font-bold tracking-[-0.03em] sm:text-xl">{name}</span>
    </span>
  );
}

export function TrustedBrands() {
  return (
    <section aria-labelledby="brands-title" className="border-b border-midnight/[0.06] bg-snow py-14 sm:py-16">
      <div className="container-x">
        <p
          id="brands-title"
          className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-midnight/45"
        >
          Trusted by Growing Brands
        </p>
      </div>
      <div className="mask-fade-x group/marquee mt-9 overflow-hidden">
        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {brands.map((b, i) => (
                <li key={b}>
                  <Wordmark name={b} i={i} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
