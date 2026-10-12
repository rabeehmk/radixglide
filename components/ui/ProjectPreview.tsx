import type { Project } from "@/data/projects";

/**
 * Code-drawn product mockups used until real screenshots are added.
 * Set `cover` on a project in data/projects.ts to replace one with a real image.
 */
export function ProjectPreview({ type }: { type: Project["preview"] }) {
  switch (type) {
    case "interior":
      return <InteriorMock />;
    case "photography":
      return <PhotographyMock />;
    case "cafe":
      return <CafeMock />;
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

function InteriorMock() {
  const rooms = [
    ["Living Rooms", "from-[#3A2C1F] to-[#14100C]"],
    ["Kitchens", "from-[#1F2A2A] to-[#0B1012]"],
    ["Offices", "from-[#24222E] to-[#0D0C12]"],
  ];
  return (
    <Window className="w-full">
      <div className="relative aspect-[16/7] overflow-hidden bg-gradient-to-br from-[#2B2118] via-[#14100C] to-[#0B0E14]">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#C8A26B]/20 to-transparent" />
        <div className="absolute bottom-0 left-[55%] h-[45%] w-[30%] rounded-t-lg bg-[#C8A26B]/15" />
        <div className="absolute bottom-[45%] left-[62%] h-[18%] w-[16%] rounded-full bg-[#E9D8B4]/20 blur-md" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6">
          <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#C8A26B] sm:text-[9px]">Artecs Prime Decore</p>
          <p className="mt-1.5 text-sm font-bold leading-tight text-white sm:text-lg">
            Spaces crafted
            <br />
            for living.
          </p>
          <span className="mt-3 inline-block rounded-full bg-[#C8A26B] px-3 py-1 text-[9px] font-bold text-midnight">
            Book a consultation
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
        {rooms.map(([label, hue]) => (
          <div key={label} className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br ${hue}`}>
            <div className="absolute inset-x-[20%] bottom-[18%] h-[30%] rounded bg-white/[0.07]" />
            <span className="absolute bottom-1.5 left-2 text-[8px] font-semibold text-white/80 sm:text-[9px]">{label}</span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function PhotographyMock() {
  const tiles = [
    "col-span-2 row-span-2 from-[#2A2633] to-[#0D0C12]",
    "from-[#33261F] to-[#120D0B]",
    "from-[#1D2A33] to-[#0A0F12]",
    "from-[#2E2A1F] to-[#100E0A]",
    "from-[#1F1F2E] to-[#0B0B12]",
  ];
  return (
    <Window className="w-full">
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="font-serif text-sm italic tracking-wide text-white">Portfolio</span>
          <div className="flex gap-2 text-[8px] text-steel sm:gap-3 sm:text-[9px]">
            <span className="text-white">Weddings</span>
            <span>Portraits</span>
            <span>Events</span>
          </div>
        </div>
        <div className="mt-3 grid auto-rows-[44px] grid-cols-4 gap-1.5 sm:auto-rows-[60px] sm:gap-2">
          {tiles.map((t) => (
            <div key={t} className={`relative overflow-hidden rounded-md bg-gradient-to-br ${t}`}>
              <div className="absolute left-1/2 top-[40%] size-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-[2px]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
          <span className="text-[10px] text-steel">Now booking for this season</span>
          <span className="text-[10px] font-bold text-azure">Book a shoot →</span>
        </div>
      </div>
    </Window>
  );
}

function CafeMock() {
  const menu = [
    ["Cappuccino", "₹160"],
    ["Cold Brew", "₹190"],
    ["Hazelnut Latte", "₹210"],
    ["Blueberry Cheesecake", "₹240"],
  ];
  return (
    <Window className="w-full">
      <div className="grid sm:grid-cols-[1fr_1.1fr]">
        <div className="relative hidden min-h-[200px] overflow-hidden bg-gradient-to-br from-[#3B2618] via-[#1C120B] to-[#0B0E14] sm:block">
          <div className="absolute left-1/2 top-[42%] size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#E9D8B4]/25 bg-[#6B4226]/50" />
          <div className="absolute left-1/2 top-[42%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A26B]/30" />
          <p className="absolute bottom-4 left-4 text-sm font-bold text-white">Brewed with love.</p>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold tracking-tight text-white">Menu</span>
            <span className="rounded-full bg-[#C8A26B]/15 px-2.5 py-1 text-[9px] font-semibold text-[#E9D8B4]">
              Open · 8 AM – 11 PM
            </span>
          </div>
          <div className="mt-3 divide-y divide-white/[0.05]">
            {menu.map(([item, price]) => (
              <div key={item} className="flex items-center justify-between py-2 text-[10px] sm:text-[11px]">
                <span className="text-white/80">{item}</span>
                <span className="font-semibold text-[#E9D8B4]">{price}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-[#C8A26B] py-2 text-center text-[9px] font-bold text-midnight">Reserve a table</span>
            <span className="rounded-lg border border-white/10 py-2 text-center text-[9px] font-semibold text-white/80">
              Get directions
            </span>
          </div>
        </div>
      </div>
    </Window>
  );
}

function StoreMock() {
  const products = [
    { name: "Classic Leather Watch", price: "₹2,499", hue: "from-[#2a2118] to-[#0f0c0a]" },
    { name: "Gold Layered Necklace", price: "₹1,299", hue: "from-[#2E2A1F] to-[#100E0A]" },
    { name: "Polarised Sunglasses", price: "₹1,799", hue: "from-[#151D2E] to-[#090C14]" },
  ];
  return (
    <Window className="w-full">
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-white">Latefite</span>
          <div className="flex items-center gap-2">
            <span className="hidden text-[9px] text-steel sm:inline">Watches · Jewellery · Eyewear</span>
            <span className="rounded-full bg-electric px-2.5 py-1 text-[9px] font-bold text-white">Cart · 2</span>
          </div>
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
          <span className="text-[10px] text-steel">Secure checkout · Free shipping</span>
          <span className="text-xs font-bold text-azure">Proceed →</span>
        </div>
      </div>
    </Window>
  );
}
