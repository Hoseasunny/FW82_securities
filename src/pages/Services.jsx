import { useState } from "react";
import { Cpu, Shield, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Button } from "../components/UI/Button";

const iconMap = {
  Shield,
  Cpu,
  Users,
  Smartphone
};

export const Services = () => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [guards, setGuards] = useState(2);

  const estimateLow = 15000 + guards * 2000;
  const estimateHigh = 45000 + guards * 3500;

  return (
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

      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader title="Service Calculator" subtitle="Estimator" align="center" />
          <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Property Type</span>
                <select
                  value={propertyType}
                  onChange={(event) => setPropertyType(event.target.value)}
                  className="w-full rounded-xl border border-slate/20 px-4 py-3 text-sm focus-ring"
                >
                  {[
                    "Residential",
                    "Commercial",
                    "Industrial",
                    "Event"
                  ].map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-2 block font-semibold text-ink">Number of Guards / Hours</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={guards}
                  onChange={(event) => setGuards(Number(event.target.value))}
                  className="w-full focus-ring"
                />
                <div className="mt-2 text-xs text-slate">{guards} units selected</div>
              </label>
            </div>
            <div className="mt-6 rounded-2xl bg-cloud p-6 text-center">
              <p className="text-sm text-slate">Estimated Range for {propertyType}</p>
              <p className="mt-3 text-2xl font-heading font-bold text-ink">
                KES {estimateLow.toLocaleString()} - {estimateHigh.toLocaleString()} / month
              </p>
            </div>
            <Button as="a" href="/contact" className="mt-6 w-full">
              Request Detailed Proposal
            </Button>
            <a
              href="/security-assessment-checklist.pdf"
              className="mt-4 block text-center text-xs font-semibold uppercase tracking-wide text-gold"
              download
            >
              Download Security Assessment Checklist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
