import { Cpu, Shield, ShieldCheck, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { specializedServices } from "../data/specializedServices";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Seo } from "../components/SEO/Seo";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { StaggerGroup } from "../components/Animation/StaggerGroup";

const iconMap = {
  Shield,
  Cpu,
  Users,
  Smartphone
};

export const Services = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";
  return (
    <>
      <Seo
        title="Security Services | FW82 Security Solution Ltd"
        description="Explore our full range of security services, including guarding, technical security systems, event protection, and smart integration."
        pathname="/services"
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
              name: "Services",
              item: `${siteUrl}/services`
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
                { label: "Services" }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <h1 className="text-4xl font-heading font-bold">Security Services</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Tailored security solutions designed for residential, commercial, industrial, and event environments.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6">
            <SectionHeader title="Core Services" subtitle="What We Deliver" />
            <StaggerGroup className="grid gap-8 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Shield;
                const isDark = index % 2 === 1;
                const iconLeft = index % 2 === 1;
                return (
                <div
                  key={service.title}
                  className={`relative overflow-hidden border-2 ${isDark ? "border-white/25 bg-[#050505] text-white" : "border-navy/90 bg-white text-ink"}`}
                  style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
                >
                  <div
                    className={`absolute -top-2 z-10 border-2 p-3 ${iconLeft ? "-left-2 rounded-br-2xl" : "-right-2 rounded-bl-2xl"} ${
                      isDark ? "border-white/25 bg-gold text-white" : "border-navy/85 bg-navy text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className={`p-6 ${isDark ? "text-white" : "text-ink"}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.3em] text-gold">Service</span>
                      </div>
                      <h3 className={`mt-3 ${iconLeft ? "pl-10" : "pr-10"} text-xl font-heading font-semibold`}>{service.title}</h3>
                      <p className={`mt-2 text-sm ${isDark ? "text-white/80" : "text-slate"}`}>
                        {service.shortDescription || service.description}
                      </p>
                      <Button
                        as={Link}
                        to={`/services/${service.slug}`}
                        variant={isDark ? "secondary" : "dark"}
                        className="mt-4 w-fit text-xs"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              title="Specialized Services"
              subtitle="Integrated Security Solutions for Modern Needs"
            />
            <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specializedServices.map((service, index) => {
                const isDark = index % 2 === 1;
                const iconLeft = index % 2 === 1;
                return (
                <div
                  key={service.slug}
                  className={`group relative overflow-hidden border-2 transition hover:-translate-y-1 hover:shadow-lift ${
                    isDark ? "border-white/25 bg-[#050505] text-white" : "border-navy/90 bg-white text-ink"
                  }`}
                  style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
                >
                  <div
                    className={`absolute -top-2 z-10 border-2 p-3 ${iconLeft ? "-left-2 rounded-br-2xl" : "-right-2 rounded-bl-2xl"} ${
                      isDark ? "border-white/25 bg-gold text-white" : "border-navy/85 bg-navy text-white"
                    }`}
                  >
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className={`p-6 ${isDark ? "text-white" : "text-ink"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{service.tagline}</p>
                    <h3 className={`mt-2 ${iconLeft ? "pl-10" : "pr-10"} text-lg font-heading font-semibold ${isDark ? "text-white" : "text-ink"}`}>{service.title}</h3>
                    <p className={`mt-2 text-sm ${isDark ? "text-white/90" : "text-slate"}`}>{service.description}</p>
                    <Button
                      as={Link}
                      to={`/services/specialized/${service.slug}`}
                      variant={isDark ? "secondary" : "dark"}
                      className="mt-4 w-fit text-xs"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              );
              })}
            </StaggerGroup>
          </div>
        </section>
      </main>
    </>
  );
};
