import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsApp";
import { cn } from "@/lib/utils";
import { hasWhatsApp } from "@/lib/contact-links";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  text: string;
  primary: { label: string; href: string };
  /** Secondary action. "whatsapp" renders a WhatsApp button (falls back to /contact). */
  secondary?: { label: string; href: string } | { label: string; whatsapp: true; message?: string };
  id?: string;
  className?: string;
};

/** Large gradient call-to-action panel used across the site. */
export function CTABanner({ eyebrow = "Let's work together", title, text, primary, secondary, id, className }: Props) {
  return (
    <section id={id} className={cn("relative bg-white pb-16 pt-4 lg:pb-24", className)}>
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px] bg-midnight bg-gradient-to-br from-electric/25 via-navy to-midnight px-6 py-16 text-center text-white sm:rounded-[40px] sm:px-12 sm:py-24 lg:py-28">
            <div aria-hidden className="grid-dark mask-radial absolute inset-0 -z-10" />
            <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-electric/30 blur-[120px]" />
            <div aria-hidden className="absolute -bottom-32 -left-20 -z-10 size-80 rounded-full bg-electric/15 blur-[100px]" />
            <div aria-hidden className="absolute -right-24 bottom-0 -z-10 size-[420px] translate-y-1/3 rounded-full border border-electric/15" />
            <div aria-hidden className="absolute -right-10 bottom-0 -z-10 size-[260px] translate-y-1/3 rounded-full border border-electric/20" />
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/70 to-transparent" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-azure">{eyebrow}</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-steel sm:text-lg">{text}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" arrow>
                {primary.label}
              </Button>
              {secondary &&
                ("whatsapp" in secondary ? (
                  hasWhatsApp() ? (
                    <WhatsAppButton size="lg" label={secondary.label} message={secondary.message} />
                  ) : (
                    // No number configured yet: plain contact button instead of a WhatsApp button that isn't one
                    <Button href="/contact" size="lg" variant="outline-dark">
                      {/whatsapp/i.test(secondary.label) ? "Talk to Our Team" : secondary.label}
                    </Button>
                  )
                ) : (
                  <Button href={secondary.href} size="lg" variant="outline-dark">
                    {secondary.label}
                  </Button>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Homepage CTA. */
export function CTA() {
  return (
    <CTABanner
      id="contact"
      title={
        <>
          Have an Idea? <span className="text-gradient">Let&apos;s Build It.</span>
        </>
      }
      text="Whether you need custom software, a powerful website, or a digital marketing strategy, RadixGlide is ready to turn your ideas into measurable growth."
      primary={{ label: "Start Your Project", href: "/contact" }}
      secondary={{ label: "Talk to Our Team", whatsapp: true }}
    />
  );
}
