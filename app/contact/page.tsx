import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { placeholders, site } from "@/data/site";
import { emailLink, hasWhatsApp, phoneLink } from "@/lib/contact-links";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsApp";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = pageMetadata({
  title: "Contact — Start Your Project",
  description:
    "Tell RadixGlide about your project. Get in touch about custom software, websites, mobile apps, e-commerce, SEO or digital marketing.",
  path: "/contact",
});

function InfoCard({
  icon: Icon,
  label,
  value,
  placeholder,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  placeholder: string;
  href: string | null;
}) {
  const body = value ? (
    <span className="font-semibold text-midnight">{value}</span>
  ) : (
    <span className="font-mono text-sm text-midnight/40">{placeholder}</span>
  );
  return (
    <div className="group flex items-start gap-4 rounded-[22px] border border-midnight/[0.07] bg-white p-5 transition-all duration-300 hover:border-electric/25">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-navy text-azure">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-midnight/40">{label}</p>
        <p className="mt-1 break-words">
          {value && href ? (
            <a href={href} className="transition-colors hover:text-electric">
              {body}
            </a>
          ) : (
            body
          )}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { contact } = site;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Let&apos;s Build Something <span className="text-gradient">Great Together.</span>
          </>
        }
        text="Have a project in mind, need a custom software solution, or looking to grow your digital presence? Tell us what you need."
      />

      <section className="section-y bg-snow">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-midnight">Get in touch</h2>
              <p className="mt-2 text-midnight/60">
                Share a few details and our team will get back to you. The first consultation is free.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard icon={Mail} label="Email" value={contact.email} placeholder={placeholders.email} href={emailLink("Project enquiry")} />
              <InfoCard icon={Phone} label="Phone" value={contact.phone} placeholder={placeholders.phone} href={phoneLink()} />
              <InfoCard icon={MapPin} label="Location" value={contact.location} placeholder={placeholders.location} href={null} />
              <InfoCard icon={Clock} label="Working hours" value={contact.hours} placeholder={placeholders.hours} href={null} />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[24px] bg-navy p-7 text-white">
                <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-[#25D366]/25 blur-3xl" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-[#25D366] text-midnight">
                  <WhatsAppIcon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold tracking-[-0.02em]">Prefer WhatsApp?</h3>
                <p className="relative mt-1.5 text-steel">Chat with our team directly.</p>
                {hasWhatsApp() ? (
                  <WhatsAppButton className="relative mt-6" label="Start a WhatsApp chat" />
                ) : (
                  <p className="relative mt-6 rounded-xl border border-dashed border-white/15 px-4 py-3 font-mono text-sm text-white/40">
                    {placeholders.whatsapp}
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Suspense fallback={<div className="min-h-[720px] rounded-[28px] border border-midnight/[0.07] bg-white" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
