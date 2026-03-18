import { Cpu, Shield, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";
import { Seo } from "../components/SEO/Seo";

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
            <h1 className="text-4xl font-heading font-bold">Security Services</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Tailored security solutions designed for residential, commercial, industrial, and event environments.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6">
            <SectionHeader title="Core Services" subtitle="What We Deliver" />
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Shield;
                return (
                  <div key={service.title} className="group relative overflow-hidden rounded-3xl bg-navy">
                    <img
                      src={service.image.src}
                      srcSet={service.image.srcSet}
                      alt={service.title}
                      loading="lazy"
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-navy/60 opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center gap-3 text-gold">
                        <Icon className="h-5 w-5" />
                        <span className="text-xs uppercase tracking-[0.3em]">Service</span>
                      </div>
                      <h3 className="mt-3 text-xl font-heading font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{service.description}</p>
                      <Button as={Link} to={`/services/${service.slug}`} variant="secondary" className="mt-4 w-fit text-xs">
                        Learn More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
