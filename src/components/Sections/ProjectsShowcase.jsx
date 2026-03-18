import { projects } from "../../data/projects";
import { SectionHeader } from "../UI/SectionHeader";
import { Button } from "../UI/Button";
import { FadeIn } from "../Animation/FadeIn";

export const ProjectsShowcase = () => {
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Featured Projects" subtitle="Case Studies" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-8 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-3xl bg-navy">
              <img
                src={project.image.src}
                srcSet={project.image.srcSet}
                alt={project.title}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-navy/60 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">{project.category}</span>
                <h3 className="mt-3 text-xl font-heading font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/80">{project.summary}</p>
                <Button variant="secondary" className="mt-4 w-fit text-xs">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
