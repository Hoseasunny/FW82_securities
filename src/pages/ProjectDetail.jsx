import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { FadeIn } from "../components/Animation/FadeIn";
import { Seo } from "../components/SEO/Seo";
import { InlineLink } from "../components/UI/InlineLink";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";

export const ProjectDetail = () => {
  const { slug } = useParams();

  const { project, related, nextProject, prevProject } = useMemo(() => {
    const index = projects.findIndex((item) => item.slug === slug);
    const current = index >= 0 ? projects[index] : null;
    const next = index >= 0 ? projects[(index + 1) % projects.length] : null;
    const prev = index >= 0 ? projects[(index - 1 + projects.length) % projects.length] : null;
    const others = projects.filter((item) => item.slug !== slug).slice(0, 2);
    return { project: current, related: others, nextProject: next, prevProject: prev };
  }, [slug]);

  if (!project) {
    return (
      <>
        <Seo title="Project Not Found | FW82 Security" description="Project not found." pathname="/projects" noindex />
        <main>
          <section className="bg-navy py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="text-3xl font-heading font-bold">Project Not Found</h1>
              <p className="mt-4 max-w-2xl text-white/70">
                We could not locate that case study. Please explore our projects instead.
              </p>
              <Button as={Link} to="/projects" variant="secondary" className="mt-6 w-fit text-xs">
                Back to Projects
              </Button>
            </div>
          </section>
        </main>
      </>
    );
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

  return (
    <>
      <Seo
        title={`${project.title} | FW82 Security`}
        description={project.summary}
        pathname={`/projects/${project.slug}`}
        image={project.image.src}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Project",
            name: project.title,
            description: project.summary,
            category: project.category
          },
          {
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
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: `${siteUrl}/projects/${project.slug}`
              }
            ]
          }
        ]}
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Projects", to: "/projects" },
                { label: project.category }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">{project.category}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-heading font-bold">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-sm text-white/70">{project.summary}</p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <FadeIn>
                <img
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  alt={project.title}
                  className="aspect-video w-full rounded-3xl object-cover shadow-soft"
                  decoding="async"
                />
              </FadeIn>
              {project.stats && (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-cloud p-4 text-center">
                      <p className="text-lg font-heading font-semibold text-ink">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-10 space-y-6">
                {project.content.map((paragraph, index) => (
                  <FadeIn key={`${project.slug}-p-${index}`} delay={0.05 * index}>
                    <p className="text-sm leading-8 text-slate">{paragraph}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <FadeIn delay={0.1}>
                <Card className="border border-slate/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Approach</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate">
                    {project.approach.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card className="border border-slate/10 bg-cloud">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Outcome</p>
                  <p className="mt-4 text-sm text-slate">{project.outcome}</p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="border border-slate/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Need a Similar Plan?</p>
                  <p className="mt-4 text-sm text-slate">
                    Talk to our team about a tailored deployment for your site.
                  </p>
                  <Button as={Link} to="/contact" variant="primary" className="mt-6 w-full text-xs">
                    Request a Consultation
                  </Button>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-white pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate/10 bg-cloud p-6">
              {prevProject && (
                <Button as={Link} to={`/projects/${prevProject.slug}`} variant="secondary" className="text-xs">
                  Previous Case Study
                </Button>
              )}
              <Button as={Link} to="/projects" variant="dark" className="text-xs">
                All Projects
              </Button>
              {nextProject && (
                <Button as={Link} to={`/projects/${nextProject.slug}`} variant="primary" className="text-xs">
                  Next Case Study
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader title="More Projects" subtitle="Related Work" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-slate/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <img
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    alt={item.title}
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.category}</p>
                    <h3 className="mt-3 text-lg font-heading font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.summary}</p>
                    <InlineLink as="span" className="mt-4">
                      Read case study
                    </InlineLink>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
