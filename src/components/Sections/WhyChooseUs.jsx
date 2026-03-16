import { CheckCircle } from "lucide-react";
import { buildImageSet } from "../../utils/imageGenerator";
import { CountUp } from "../Animation/CountUp";
import { SectionHeader } from "../UI/SectionHeader";
import { SlideIn } from "../Animation/SlideIn";

const whyImage = buildImageSet(
  "Why Choose FW82",
  "Split composition: left side shows security control room with multiple CCTV screens, right side shows professional security team briefing",
  "control-room"
);

const features = [
  "Highly trained officers (PSRA certified)",
  "Modern surveillance systems (AI-powered)",
  "24/7 rapid response teams",
  "Nationwide coverage (Nairobi, Mombasa, Kisumu, Eldoret)",
  "Customized security solutions"
];

const stats = [
  { value: 500, label: "Clients Served", suffix: "+" },
  { value: 15, label: "Years Experience" },
  { value: 50, label: "Professional Staff", suffix: "+" },
  { value: 99, label: "Client Retention", suffix: ".8%" }
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <SlideIn direction="left" className="overflow-hidden rounded-3xl">
          <img
            src={whyImage.src}
            srcSet={whyImage.srcSet}
            alt="Security control room and team briefing"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </SlideIn>
        <SlideIn direction="right">
          <SectionHeader title="Why Choose FW82" subtitle="Our Advantage" />
          <ul className="mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate">
                <CheckCircle className="mt-1 h-5 w-5 text-trust" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-cloud p-4">
                <CountUp value={stat.value} suffix={stat.suffix || ""} />
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
};
