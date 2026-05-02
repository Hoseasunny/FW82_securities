import { Shield, Cpu, Users, Smartphone } from "lucide-react";
import { SectionHeader } from "../UI/SectionHeader";
import { FadeIn } from "../Animation/FadeIn";
import { services } from "../../data/services";
import { InlineLink } from "../UI/InlineLink";

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
            const isDark = index % 2 === 1;
            const iconLeft = index % 2 === 1;
            return (
              <div
                key={service.title}
                className={`group relative p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  isDark
                    ? "border-2 border-white/25 bg-[#050505] text-white"
                    : "border-2 border-navy/90 bg-white text-ink"
                }`}
                style={{ borderRadius: isDark ? "0 30px 0 30px" : "30px 0 30px 0" }}
              >
                <div
                  className={`absolute -top-2 border-2 p-3 ${
                    iconLeft ? "-left-2 rounded-br-2xl" : "-right-2 rounded-bl-2xl"
                  } ${
                    isDark
                      ? "border-white/25 bg-gold text-white"
                      : "border-navy/85 bg-navy text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className={`text-xs uppercase tracking-[0.24em] ${isDark ? "text-gold" : "text-gold"}`}>Service</p>
                <h3 className={`mt-4 ${iconLeft ? "pl-10" : "pr-10"} text-lg font-heading font-semibold ${isDark ? "text-white" : "text-ink"}`}>
                  {service.title}
                </h3>
                <p className={`mt-2 text-sm ${isDark ? "text-white/90" : "text-slate"}`}>{service.description}</p>
                <InlineLink
                  to={`/services/${service.slug}`}
                  className={`mt-4 ${isDark ? "text-gold hover:text-white" : "text-ink hover:text-gold"}`}
                >
                  Learn more
                </InlineLink>
              </div>
            );
          })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
