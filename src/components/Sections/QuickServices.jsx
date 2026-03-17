import { Shield, Cpu, Users, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../UI/Card";
import { SectionHeader } from "../UI/SectionHeader";
import { FadeIn } from "../Animation/FadeIn";
import { services } from "../../data/services";

const iconMap = {
  Shield,
  Cpu,
  Users,
  Smartphone
};

export const QuickServices = () => {
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Fast Response, Total Protection" subtitle="Core Services" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <Card
                key={service.title}
                className={`border-l-4 border-transparent hover:border-gold ${index === 0 ? "lg:col-span-1" : ""}`}
              >
                <Icon className="h-12 w-12 text-security" />
                <h3 className="mt-4 text-lg font-heading font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-slate">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-gold"
                >
                  Learn more
                </Link>
              </Card>
            );
          })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
