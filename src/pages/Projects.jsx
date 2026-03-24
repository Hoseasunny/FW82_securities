import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Seo } from "../components/SEO/Seo";
import { InlineLink } from "../components/UI/InlineLink";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { StaggerGroup } from "../components/Animation/StaggerGroup";

const filters = ["All", "Event Security", "Technical Systems", "Guarding"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

  return (
    <>
      <Seo
        title="Projects & Case Studies | FW82 Security"
        description="Explore real-world security deployments across Kenya, including guarding, event security, and technical systems."
        pathname="/projects"
        image={projects[0]?.image?.src}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: `${siteUrl}/projects`
            }
          ]
        }}
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Projects" }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <h1 className="text-4xl font-heading font-bold">Project Portfolio</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Explore detailed case studies of real-world deployments across Kenya, from critical infrastructure
              to corporate campuses and residential estates.
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

            <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={project.title}
                  to={`/projects/${project.slug}`}
                  className="group overflow-hidden rounded-3xl border border-slate/30 bg-white/90 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.55)] ring-1 ring-white/60 backdrop-blur transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_32px_70px_-40px_rgba(15,23,42,0.75)] hover:ring-gold/25"
                >
                  <img
                    src={project.image.src}
                    srcSet={project.image.srcSet}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                    decoding="async"
                  />
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{project.category}</p>
                    <h3 className="mt-2 text-lg font-heading font-semibold text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate">{project.summary}</p>
                    <InlineLink as="span" className="mt-4">
                      View case study
                    </InlineLink>
                  </div>
                </Link>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
    </>
  );
};
