import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { specializedServices } from "../data/specializedServices";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Card } from "../components/UI/Card";
import { Seo } from "../components/SEO/Seo";
import { FadeIn } from "../components/Animation/FadeIn";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";

export const SpecializedServiceDetail = () => {
  const { slug } = useParams();

  const { service, nextService, prevService } = useMemo(() => {
    const index = specializedServices.findIndex((item) => item.slug === slug);
    const current = index >= 0 ? specializedServices[index] : null;
    const next = index >= 0 ? specializedServices[(index + 1) % specializedServices.length] : null;
    const prev = index >= 0 ? specializedServices[(index - 1 + specializedServices.length) % specializedServices.length] : null;
    return { service: current, nextService: next, prevService: prev };
  }, [slug]);

  if (!service) {
    return (
      <>
        <Seo
          title="Service Not Found | FW82 Security"
          description="Service not found."
          pathname="/services"
          noindex
        />
        <main>
          <section className="bg-navy py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="text-3xl font-heading font-bold">Service Not Found</h1>
              <p className="mt-4 max-w-2xl text-white/70">
                We couldn't locate that service. Explore our full catalog to find the right solution.
              </p>
              <Button as={Link} to="/services" variant="secondary" className="mt-6 w-fit text-xs">
                Back to Services
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
        title={`${service.title} | FW82 Security`}
        description={service.description}
        pathname={`/services/specialized/${service.slug}`}
        image={service.image.src}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description
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
                name: "Services",
                item: `${siteUrl}/services`
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `${siteUrl}/services/specialized/${service.slug}`
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
                { label: "Services", to: "/services" },
                { label: service.title }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{service.tagline}</p>
            <h1 className="mt-3 text-4xl font-heading font-bold">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-white/70">{service.description}</p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <FadeIn>
                <img
                  src={service.image.src}
                  srcSet={service.image.srcSet}
                  alt={service.title}
                  className="aspect-video w-full rounded-3xl object-cover shadow-soft"
                  decoding="async"
                />
              </FadeIn>
              <div className="mt-8 space-y-6">
                {service.intro.map((paragraph, index) => (
                  <FadeIn key={`${service.slug}-intro-${index}`} delay={0.05 * index}>
                    <p className="text-sm leading-8 text-slate">{paragraph}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <FadeIn delay={0.1}>
                <Card className="border border-slate/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Key Features</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate">
                    {service.features.map((item) => (
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
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Why FW82</p>
                  <p className="mt-4 text-sm text-slate">{service.value}</p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="border border-slate/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Ready to Start?</p>
                  <p className="mt-4 text-sm text-slate">
                    Speak with our team about a tailored deployment for your site and risk profile.
                  </p>
                  <Button as={Link} to="/contact" variant="primary" className="mt-6 w-full text-xs">
                    Request a Consultation
                  </Button>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-white pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate/10 bg-cloud p-6">
              {prevService && (
                <Button as={Link} to={`/services/specialized/${prevService.slug}`} variant="secondary" className="text-xs">
                  Previous Service
                </Button>
              )}
              <Button as={Link} to="/services" variant="dark" className="text-xs">
                All Services
              </Button>
              {nextService && (
                <Button as={Link} to={`/services/specialized/${nextService.slug}`} variant="primary" className="text-xs">
                  Next Service
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
