import { Shield, Camera, Bell, Users } from "lucide-react";
import { Card } from "../UI/Card";
import { SectionHeader } from "../UI/SectionHeader";
import { FadeIn } from "../Animation/FadeIn";

const quickServices = [
  {
    title: "Guarding & Patrols",
    description: "Uniformed officers & estate patrols",
    Icon: Shield
  },
  {
    title: "CCTV Surveillance",
    description: "24/7 monitoring & smart analytics",
    Icon: Camera
  },
  {
    title: "Intruder Alarms",
    description: "Advanced detection systems",
    Icon: Bell
  },
  {
    title: "Event Security",
    description: "Crowd management & VIP protection",
    Icon: Users
  }
];

export const QuickServices = () => {
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Fast Response, Total Protection" subtitle="Core Services" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickServices.map((service, index) => {
            const Icon = service.Icon;
            return (
              <Card
                key={service.title}
                className={`border-l-4 border-transparent hover:border-gold ${index === 0 ? "lg:col-span-1" : ""}`}
              >
                <Icon className="h-12 w-12 text-security" />
                <h3 className="mt-4 text-lg font-heading font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-slate">{service.description}</p>
              </Card>
            );
          })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
