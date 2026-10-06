import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { CTABanner } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Projects & Case Studies",
  description:
    "Explore RadixGlide projects including Otomation, Edufix Learning Academy, Eyetrack Solutions and PetalBox — software, websites, e-commerce and digital solutions.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        crumbs={[{ label: "Projects" }]}
        title={
          <>
            Work that helps brands <span className="text-gradient">move forward</span>
          </>
        }
        text="A selection of software platforms, websites and digital solutions we've designed and built for ambitious brands."
      />
      <section className="relative isolate overflow-hidden bg-midnight pb-20 text-white lg:pb-28">
        <div aria-hidden className="absolute right-0 top-40 -z-10 size-[600px] rounded-full bg-electric/10 blur-[160px]" />
        <div className="container-x pt-4">
          <ProjectsExplorer />
        </div>
      </section>
      <CTABanner
        className="bg-snow pt-16 lg:pt-24"
        title={
          <>
            Your project <span className="text-gradient">could be next.</span>
          </>
        }
        text="Tell us what you're planning — we'll help you shape it into a product your customers love."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
