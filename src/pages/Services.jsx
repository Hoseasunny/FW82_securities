import { useState } from "react";
import { Cpu, Shield, Smartphone, Users } from "lucide-react";
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
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <div key={service.title} className="grid gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <SectionHeader title={service.title} subtitle="Service" />
                  <p className="mt-4 text-sm text-slate">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate">
                        <span className="h-2 w-2 rounded-full bg-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
