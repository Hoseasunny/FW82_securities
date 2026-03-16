import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";

const filters = ["All", "Event Security", "Technical Systems", "Guarding"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (selected && closeRef.current) {
      closeRef.current.focus();
    }
  }, [selected]);

  return (
    <main>
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-heading font-bold">Project Portfolio</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Explore real-world deployments across Kenya's most trusted sites.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader title="Featured Deployments" subtitle="Portfolio" />
          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  activeFilter === filter
                    ? "bg-gold text-navy"
                    : "border border-slate/20 text-slate hover:border-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-slate/10 bg-cloud"
                onClick={() => setSelected(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(project);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  alt={project.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{project.category}</p>
                  <h3 className="mt-2 text-lg font-heading font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate">{project.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          tabIndex={-1}
          onClick={() => setSelected(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelected(null);
          }}
        >
          <div
            className="max-w-2xl rounded-3xl bg-white p-8 shadow-lift"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{selected.category}</p>
                <h3
                  id="project-modal-title"
                  className="mt-2 text-2xl font-heading font-semibold text-ink"
                >
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm font-semibold text-slate hover:text-ink focus-ring"
                ref={closeRef}
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-6">
              <div>
                <h4 className="text-sm font-semibold text-ink">Challenge</h4>
                <p className="mt-2 text-sm text-slate">{selected.details.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink">Solution</h4>
                <p className="mt-2 text-sm text-slate">{selected.details.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink">Results</h4>
                <p className="mt-2 text-sm text-slate">{selected.details.results}</p>
              </div>
            </div>
            <Button className="mt-6" onClick={() => setSelected(null)}>
              Close Case Study
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};
