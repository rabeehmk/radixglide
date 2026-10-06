import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/data/site";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { FloatingWhatsApp } from "@/components/ui/WhatsApp";
import { JsonLd } from "@/components/ui/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RadixGlide — Software Development & Digital Marketing Company",
    template: "%s | RadixGlide",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "RadixGlide — Ideas. Build. Grow.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "RadixGlide — Ideas. Build. Grow.",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  description: site.description,
  ...(site.contact.email ? { email: site.contact.email } : {}),
  ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
  sameAs: Object.values(site.socials).filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-electric px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CursorGlow />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
