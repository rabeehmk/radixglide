import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const projectSpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Projects() {
  return (
    <section id="projects" className="section-y relative isolate overflow-hidden bg-midnight text-white">
      <div aria-hidden className="absolute right-0 top-0 -z-10 size-[600px] rounded-full bg-electric/15 blur-[160px]" />
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Portfolio"
            title="Featured Projects"
            text="A glimpse of the digital experiences we've created for ambitious brands."
          />
          <Reveal delay={0.2}>
            <Button href="/projects" variant="outline-dark" arrow>
              View all projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={projectSpans[i % projectSpans.length]}>
              <ProjectCard project={p} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
