import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LostRoute } from "@/components/ui/LostRoute";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-midnight pb-20 pt-32 text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-dark mask-radial absolute inset-0" />
        <div className="absolute left-1/2 top-1/3 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[150px]" />
      </div>
      <div className="container-x text-center">
        <LostRoute />
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-azure">Error 404</p>
        <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl">
          Looks Like You&apos;ve Taken a <span className="text-gradient">Different Route.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-steel sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" arrow>
            Back to Home
          </Button>
          <Button href="/services" size="lg" variant="outline-dark">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
