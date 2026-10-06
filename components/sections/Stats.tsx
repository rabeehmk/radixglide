import { stats } from "@/data/home";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <Reveal className="relative mt-16 pb-16 lg:mt-20 lg:pb-24">
      <dl className="glass grid grid-cols-2 overflow-hidden rounded-[28px] lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={[
              "relative flex flex-col-reverse justify-end px-5 py-7 sm:px-8 sm:py-9",
              i % 2 === 0 ? "border-r border-white/[0.08]" : "",
              i < 2 ? "border-b border-white/[0.08] lg:border-b-0" : "",
              i === 1 ? "lg:border-r" : "",
            ].join(" ")}
          >
            <dt className="mt-2text-sm text-steel">{s.label}</dt>
            <dd className="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
