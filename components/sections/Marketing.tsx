"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MousePointerClick, Target, Users } from "lucide-react";
import { marketingChannels } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const traffic = [28, 34, 31, 46, 52, 61, 74, 92];

const kpis = [
  { icon: Users, label: "Leads", value: "3.2k", delta: "+64%" },
  { icon: MousePointerClick, label: "CTR", value: "6.8%", delta: "+2.1" },
  { icon: Target, label: "ROAS", value: "5.4x", delta: "+38%" },
];

function GrowthDashboard() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-azure/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-midnight/[0.07] bg-white p-5 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.45)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-midnight/40">
              Organic + Paid Revenue <span className="normal-case tracking-normal text-midnight/30">· sample data</span>
            </p>
            <p className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-midnight sm:text-4xl">AED 482,900</p>
          </div>
          <span className="shrink-0 rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-azure">+212% YoY</span>
        </div>

        {/* bar + line chart */}
        <div className="relative mt-8 h-48 sm:h-56">
          <div className="absolute inset-0 flex flex-col justify-between" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-t border-dashed border-midnight/[0.07]" />
            ))}
          </div>
          <div className="relative flex h-full items-end gap-2 sm:gap-3">
            {traffic.map((v, i) => (
              <div key={months[i]} className="flex h-full flex-1 flex-col justify-end">
                <motion.div
                  className={`w-full rounded-t-lg ${i === traffic.length - 1 ? "bg-navy" : "bg-azure/25"}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${v}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease }}
                />
              </div>
            ))}
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full" aria-hidden>
            <motion.path
              d="M6 70 L18 64 L31 66 L43 52 L56 45 L68 36 L81 22 L94 6"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="mt-2 flex gap-2 sm:gap-3">
          {months.map((m) => (
            <span key={m} className="flex-1 text-center text-[10px] font-medium text-midnight/35">
              {m}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          {kpis.map(({ icon: Icon, label, value, delta }) => (
            <div key={label} className="rounded-2xl border border-midnight/[0.06] bg-snow p-3 sm:p-4">
              <Icon className="size-4 text-electric" />
              <p className="mt-3 text-lg font-bold tracking-tight text-midnight sm:text-xl">{value}</p>
              <p className="flex flex-wrap items-center gap-x-1.5 text-[11px] text-midnight/45">
                {label} <span className="font-semibold text-electric">{delta}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* floating chip */}
      <div className="absolute -left-3 top-1/3 hidden animate-float rounded-2xl border border-midnight/[0.06] bg-white/80 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.5)] backdrop-blur-md sm:block lg:-left-8">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-midnight/40">Top channel</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-midnight">
          Google Ads <ArrowUpRight className="size-4 text-electric" />
        </p>
      </div>
    </div>
  );
}

export function Marketing() {
  return (
    <section id="marketing" className="section-y relative overflow-hidden bg-snow">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Digital Marketing"
            title={
              <>
                Don&apos;t Just Build. <span className="text-electric">Grow.</span>
              </>
            }
            text="Launching is only the beginning. RadixGlide keeps working after your website or software goes live — attracting the right audience, turning visitors into customers and reporting on what actually moves revenue."
          />
          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-2">
              {marketingChannels.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm font-medium text-midnight/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric hover:bg-navy hover:text-azure"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <Button href="/contact" variant="dark" size="lg" arrow className="mt-10">
              Grow Your Business
            </Button>
          </Reveal>
        </div>
        <Reveal direction="right" delay={0.1} className="lg:col-span-7 lg:pl-8">
          <GrowthDashboard />
        </Reveal>
      </div>
    </section>
  );
}
