import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { placeholders, site } from "@/data/site";
import { footerCompany, footerServiceSlugs, legalLinks } from "@/data/navigation";
import { getService } from "@/data/services";
import { emailLink, phoneLink } from "@/lib/contact-links";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

const linkCls =
  "inline-flex items-center gap-2 text-sm text-steel transition-colors duration-300 hover:text-azure";
const placeholderCls = "text-sm text-white/30";

function ContactItem({
  icon: Icon,
  value,
  placeholder,
  href,
}: {
  icon: typeof Mail;
  value: string;
  placeholder: string;
  href: string | null;
}) {
  const content = (
    <>
      <Icon className="size-4 shrink-0" aria-hidden /> {value || placeholder}
    </>
  );
  return (
    <li>
      {value && href ? (
        <a href={href} className={linkCls}>
          {content}
        </a>
      ) : (
        <span className={`inline-flex items-center gap-2 ${value ? "text-sm text-steel" : placeholderCls}`}>{content}</span>
      )}
    </li>
  );
}

export function Footer() {
  const { contact } = site;
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="container-x pb-10 pt-16 lg:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 text-2xl font-bold tracking-[-0.03em]">
              Ideas. Build. <span className="text-azure">Grow.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
              Software, design and digital marketing under one roof — built to help ambitious businesses
              scale.
            </p>
            <SocialIcons className="mt-8" />
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <Column title="Company">
              {footerCompany.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </Column>
          </div>

          <div className="lg:col-span-2">
            <Column title="Services">
              {footerServiceSlugs.map((slug) => {
                const s = getService(slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className={linkCls}>
                      {s.title}
                    </Link>
                  </li>
                );
              })}
            </Column>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <Column title="Contact">
              <ContactItem icon={Mail} value={contact.email} placeholder={placeholders.email} href={emailLink()} />
              <ContactItem icon={Phone} value={contact.phone} placeholder={placeholders.phone} href={phoneLink()} />
              <ContactItem icon={MapPin} value={contact.location} placeholder={placeholders.location} href={null} />
              <ContactItem icon={Clock} value={contact.hours} placeholder={placeholders.hours} href={null} />
            </Column>
          </div>
        </div>

        {/* oversized wordmark */}
        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center text-[15vw] font-extrabold leading-none tracking-[-0.06em] text-transparent xl:text-[13rem]"
        >
          RadixGlide
        </p>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-sm text-white/40 sm:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
