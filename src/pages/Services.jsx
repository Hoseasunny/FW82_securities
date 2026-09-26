import { Cpu, Shield, ShieldCheck, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { specializedServices } from "../data/specializedServices";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Seo } from "../components/SEO/Seo";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { StaggerGroup } from "../components/Animation/StaggerGroup";
import { AlternatingCard } from "../components/UI/AlternatingCard";
import { FaqSection } from "../components/Sections/FaqSection";
import { CTASection } from "../components/Sections/CTASection";
import { faqItems } from "../data/faqItems";

const iconMap = {
  Shield,
  Cpu,
  Users,
  Smartphone
};

export const Services = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://www.fw82securitysolutions.com";
  return (
    <>
      <Seo
        title="Security Services | FW82 Security Solutions Ltd"
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">Security technology and response</p>
            <h1 className="mt-3 text-4xl font-heading font-bold">Security Services</h1>
            <div className="mt-5 h-0.5 w-16 bg-red-400" aria-hidden="true" />
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
                return (
                <AlternatingCard
                  key={service.title}
                  index={index}
                  icon={Icon}
                  className="overflow-hidden p-0"
                >
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Service</span>
                      </div>
                      <h3 className="mt-3 text-xl font-heading font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm font-medium text-current/90">
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
                </AlternatingCard>
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
                return (
                <AlternatingCard
                  key={service.slug}
                  index={index}
                  icon={ShieldCheck}
                  className="group overflow-hidden p-0"
                >
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{service.tagline}</p>
                    <h3 className="mt-2 text-lg font-heading font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-current/90">{service.description}</p>
                    <Button
                      as={Link}
                      to={`/services/specialized/${service.slug}`}
                      variant={isDark ? "secondary" : "dark"}
                      className="mt-4 w-fit text-xs"
                    >
                      Learn More
                    </Button>
                  </div>
                </AlternatingCard>
              );
              })}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader title="How We Work" subtitle="A Clearer Security Plan" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Assess", "We understand your site, people, assets, and operating context."],
                ["02", "Design", "We shape a practical plan around your risk profile and priorities."],
                ["03", "Deploy", "Our teams and systems are put into operation with clear procedures."],
                ["04", "Improve", "Reporting and review keep protection aligned as your needs change."]
              ].map(([number, title, description]) => (
                <article key={number} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="font-heading text-3xl font-bold text-red-400">{number}</p>
                  <h3 className="mt-5 text-xl font-heading font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems.slice(0, 5)} title="Security Service FAQ" subtitle="Before We Begin" />
        <CTASection />
      </main>
    </>
  );
};
