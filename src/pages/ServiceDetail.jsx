import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Card } from "../components/UI/Card";
import { Seo } from "../components/SEO/Seo";
import { COMPANY } from "../utils/constants";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";

export const ServiceDetail = () => {
  const { slug } = useParams();

  const { service, nextService, prevService } = useMemo(() => {
    const index = services.findIndex((item) => item.slug === slug);
    const current = index >= 0 ? services[index] : null;
    const next = index >= 0 ? services[(index + 1) % services.length] : null;
    const prev = index >= 0 ? services[(index - 1 + services.length) % services.length] : null;
    return { service: current, nextService: next, prevService: prev };
  }, [slug]);

  if (!service) {
    return (
      <>
        <Seo title="Service Not Found | FW82 Security" description="Service not found." pathname="/services" noindex />
        <main>
          <section className="bg-navy py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="text-3xl font-heading font-bold">Service Not Found</h1>
              <p className="mt-4 max-w-2xl text-white/70">
                We couldn&apos;t locate that service. Explore our full catalog to find the right solution.
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
        pathname={`/services/${service.slug}`}
        image={service.image.src}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: COMPANY.branches,
            provider: {
              "@type": "LocalBusiness",
              name: COMPANY.name,
              telephone: COMPANY.phone,
              email: COMPANY.emailPrimary,
              address: {
                "@type": "PostalAddress",
                addressLocality: COMPANY.hq,
                addressCountry: "KE"
              }
            }
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
                item: `${siteUrl}/services/${service.slug}`
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Service</p>
            <h1 className="mt-3 text-4xl font-heading font-bold">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-white/70">{service.description}</p>
            <Button as={Link} to="/services" variant="secondary" className="mt-6 w-fit text-xs">
              Back to Services
            </Button>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            {service.longIntro && (
              <>
                <SectionHeader title="Service Overview" subtitle={service.title} />
                <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-sm leading-8 text-slate">{service.longIntro}</p>
                  </div>
                  {service.whyChoose && (
                    <Card className="border border-slate/10">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Choose FW82</p>
                      <ul className="mt-4 space-y-3 text-sm text-slate">
                        {service.whyChoose.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>
                {service.longSections && (
                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {service.longSections.map((section) => {
                      const galleryItem = service.gallery.find((item) => item.title === section.title);
                      return (
                        <div
                          key={section.title}
                          className="group rounded-3xl border border-slate/10 bg-cloud transition hover:shadow-lift"
                        >
                          {galleryItem && (
                            <img
                              src={galleryItem.image.src}
                              srcSet={galleryItem.image.srcSet}
                              alt={galleryItem.title}
                              loading="lazy"
                              className="aspect-4/3 w-full rounded-2xl object-cover"
                              decoding="async"
                            />
                          )}
                          <div className="p-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-gold">{service.title}</p>
                            <h3 className="mt-2 text-lg font-heading font-semibold text-ink">{section.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate">{section.body}</p>
                            <ul className="mt-4 space-y-2 text-sm text-slate">
                              {section.bullets.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {service.closing && (
                  <div className="mt-10 rounded-3xl bg-cloud p-6 text-sm leading-8 text-slate">
                    {service.closing}
                  </div>
                )}
              </>
            )}

            {!service.longSections && (
              <div className={`${service.longIntro ? "mt-16" : ""}`}>
                <SectionHeader title={`${service.title} Gallery`} subtitle="Capabilities" />
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.gallery.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-3xl border border-slate/10 bg-cloud transition hover:shadow-lift"
                    >
                      <img
                        src={item.image.src}
                        srcSet={item.image.srcSet}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-4/3 w-full rounded-2xl object-cover"
                        decoding="async"
                      />
                      <div className="p-5">
                        <h3 className="text-base font-heading font-semibold text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className={`${service.longIntro ? "mt-12" : "mt-12"}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button as={Link} to="/services" variant="secondary" className="w-fit text-xs">
                  All Services
                </Button>
                <div className="flex flex-wrap gap-3">
                  {prevService && (
                    <Button as={Link} to={`/services/${prevService.slug}`} variant="dark" className="w-fit text-xs">
                      Previous
                    </Button>
                  )}
                  {nextService && (
                    <Button as={Link} to={`/services/${nextService.slug}`} variant="primary" className="w-fit text-xs">
                      Next Service
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
