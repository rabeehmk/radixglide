import type { Project } from "@/data/projects";

/**
 * Code-drawn product mockups used until real screenshots are added.
 * Set `cover` on a project in data/projects.ts to replace one with a real image.
 */
export function ProjectPreview({ type }: { type: Project["preview"] }) {
  switch (type) {
    case "invoice":
      return <InvoiceMock />;
    case "lms":
      return <LmsMock />;
    case "security":
      return <SecurityMock />;
    case "store":
      return <StoreMock />;
  }
}

function Window({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-3 h-4 w-40 max-w-[40%] rounded-full bg-white/[0.05]" />
      </div>
      {children}
    </div>
  );
}

function InvoiceMock() {
  const rows = [
    ["INV-2041", "Al Noor Trading", "AED 12,480", "Cleared"],
    ["INV-2040", "Gulf Logistics", "AED 8,215", "Cleared"],
    ["INV-2039", "Sahara Foods", "AED 3,960", "Pending"],
    ["INV-2038", "Marina Tech", "AED 21,700", "Cleared"],
  ];
  return (
    <Window className="w-full">
      <div className="grid sm:grid-cols-[150px_1fr]">
        <div className="hidden space-y-2.5 border-r border-white/[0.06] p-4 sm:block">
          <div className="h-2.5 w-16 rounded bg-electric/70" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-2 rounded ${i === 1 ? "w-20 bg-white/40" : "w-14 bg-white/10"}`} />
          ))}
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ["Issued", "1,284"],
              ["VAT", "AED 64k"],
              ["Compliance", "100%"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5 sm:p-3">
                <p className="text-[9px] uppercase tracking-wider text-white/40">{k}</p>
                <p className="mt-1 text-xs font-bold text-white sm:text-base">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 divide-y divide-white/[0.05] rounded-xl border border-white/[0.06]">
            {rows.map((r) => (
              <div key={r[0]} className="grid grid-cols-[1fr_auto] gap-2 px-3 py-2.5 text-[10px] sm:grid-cols-4 sm:text-[11px]">
                <span className="font-mono text-steel">{r[0]}</span>
                <span className="hidden truncate text-white/70 sm:block">{r[1]}</span>
                <span className="hidden text-white/80 sm:block">{r[2]}</span>
                <span className={`justify-self-end rounded-full px-2 py-0.5 text-[9px] font-semibold ${r[3] === "Cleared" ? "bg-electric/15 text-azure" : "bg-white/10 text-steel"}`}>
                  {r[3]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

function LmsMock() {
  return (
    <Window className="w-full">
      <div className="p-4 sm:p-5">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-electric/40 to-navy">
          <div className="grid-dark absolute inset-0" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full bg-electric/90 text-midnight shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <svg viewBox="0 0 24 24" className="ml-0.5 size-5 fill-current" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
          </div>
          <div className="absolute inset-x-3 bottom-3 h-1 rounded-full bg-white/15">
            <div className="h-full w-2/3 rounded-full bg-electric" />
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          {[86, 64, 42].map((p, i) => (
            <div key={p} className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[10px] font-bold text-steel">
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="h-1.5 rounded-full bg-white/[0.08]">
                  <div className="h-full rounded-full bg-azure/70" style={{ width: `${p}%` }} />
                </div>
              </div>
              <span className="text-[10px] font-semibold text-steel">{p}%</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function SecurityMock() {
  return (
    <Window className="w-full">
      <div className="grid grid-cols-2 gap-2 p-3 sm:p-4">
        {["CAM 01 · Entrance", "CAM 02 · Lobby", "CAM 03 · Parking", "CAM 04 · Warehouse"].map((c, i) => (
          <div
            key={c}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[#111C33] to-[#070B14]"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
              }}
            />
            <div className="absolute bottom-2 left-2 text-[8px] font-mono text-steel sm:text-[9px]">{c}</div>
            <div className="absolute right-2 top-2 flex items-center gap-1 text-[8px] font-bold text-azure">
              <span className="size-1.5 animate-pulse rounded-full bg-electric" /> REC
            </div>
            {i === 1 && (
              <div className="absolute left-[38%] top-[30%] h-[40%] w-[22%] rounded border border-electric shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
            )}
          </div>
        ))}
      </div>
    </Window>
  );
}

function StoreMock() {
  const products = [
    { name: "Blush Peony Box", price: "AED 249", hue: "from-[#2a1d22] to-[#0f0b0d]" },
    { name: "Ivory Rose Set", price: "AED 189", hue: "from-[#1E2433] to-[#0B0E14]" },
    { name: "Midnight Orchid", price: "AED 319", hue: "from-[#151D2E] to-[#090C14]" },
  ];
  return (
    <Window className="w-full">
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-white">PetalBox</span>
          <span className="rounded-full bg-electric px-2.5 py-1 text-[9px] font-bold text-white">Cart · 2</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {products.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]">
              <div className={`relative aspect-square bg-gradient-to-br ${p.hue}`}>
                <div className="absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-azure/40 to-transparent blur-sm" />
              </div>
              <div className="p-2">
                <p className="truncate text-[9px] font-semibold text-white/80 sm:text-[10px]">{p.name}</p>
                <p className="text-[9px] text-azure sm:text-[10px]">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
          <span className="text-[10px] text-steel">Secure checkout</span>
          <span className="text-xs font-bold text-azure">Proceed →</span>
        </div>
      </div>
    </Window>
  );
}
