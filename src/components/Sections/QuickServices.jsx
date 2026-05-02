import { Shield, Cpu, Users, Smartphone } from "lucide-react";
import { SectionHeader } from "../UI/SectionHeader";
import { FadeIn } from "../Animation/FadeIn";
import { services } from "../../data/services";
import { InlineLink } from "../UI/InlineLink";
import { AlternatingCard } from "../UI/AlternatingCard";

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
              <AlternatingCard
                key={service.title}
                index={index}
                icon={Icon}
                className="group"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Service</p>
                <h3 className="mt-4 text-lg font-heading font-bold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-current/90">{service.description}</p>
                <InlineLink
                  to={`/services/${service.slug}`}
                  className="mt-4 text-gold hover:text-white"
                >
                  Learn more
                </InlineLink>
              </AlternatingCard>
            );
          })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
