import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Seo } from "../components/SEO/Seo";

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

  return (
    <>
      <Seo
        title={`${service.title} | FW82 Security`}
        description={service.description}
        pathname={`/services/${service.slug}`}
        image={service.image.src}
        type="article"
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <nav className="text-xs uppercase tracking-[0.3em] text-white/60">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
              <span className="mx-2">{">"}</span>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-gold">{service.title}</span>
            </nav>
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
            <SectionHeader title={`${service.title} Gallery`} subtitle="Capabilities" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-3xl bg-cloud shadow-soft">
                  <img
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    alt={item.title}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                    decoding="async"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-heading font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
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
        </section>
      </main>
    </>
  );
};
