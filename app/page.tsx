import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustedBrands } from "@/components/sections/TrustedBrands";
import { Services } from "@/components/sections/Services";
import { WhyRadixGlide } from "@/components/sections/WhyRadixGlide";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Marketing } from "@/components/sections/Marketing";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "RadixGlide — Software Development & Digital Marketing Company",
  description:
    "RadixGlide builds custom software, websites and mobile apps, and drives growth with SEO, social media and performance marketing. Ideas. Build. Grow.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Services />
      <WhyRadixGlide />
      <Process />
      <Projects />
      <Marketing />
      <Technologies />
      <Testimonials />
      <CTA />
    </>
  );
}
