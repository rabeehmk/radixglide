import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";

export function Technologies() {
  return (
    <section id="technology" className="section-y relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden className="grid-dark mask-radial absolute inset-0 -z-10" />
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
      <div className="container-x">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Technology"
          title="Built With Modern Technology"
          text="Battle-tested frameworks and cloud infrastructure, chosen for speed, security and long-term maintainability."
        />
        <ul className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4">
          {technologies.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 0.035}>
              <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-steel backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.07] hover:text-azure hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.4)] sm:px-5 sm:py-4">
                <TechIcon name={t} />
                <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-white sm:text-base">
                  {t}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
