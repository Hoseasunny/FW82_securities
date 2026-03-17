import { CheckCircle } from "lucide-react";
import { buildImageSet } from "../../utils/imageGenerator";
import { CountUp } from "../Animation/CountUp";
import { SectionHeader } from "../UI/SectionHeader";
import { SlideIn } from "../Animation/SlideIn";

const whyImages = [
  buildImageSet(
    "Security Control Room",
    "Split composition: left side shows security control room with multiple CCTV screens, right side shows professional security team briefing",
    "control-room"
  ),
  buildImageSet(
    "Security Team Briefing",
    "Professional security team briefing in a modern operations room",
    "team-briefing"
  ),
  buildImageSet(
    "Corporate Security",
    "Security presence at a modern corporate office lobby with access control",
    "project-office"
  )
];

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
      <div className="mx-auto max-w-6xl px-6">
        <SlideIn
          direction="left"
          className="relative w-screen overflow-hidden sm:mx-0 sm:w-full sm:rounded-3xl -mx-6 ml-[calc(50%-50vw)]"
        >
          <div className="triple-fade h-screen w-full sm:h-80 md:h-[420px]">
            {whyImages.map((image) => (
              <img
                key={image.prompt}
                src={image.src}
                srcSet={image.srcSet}
                alt="Security operations visual"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </SlideIn>
        <SlideIn
          direction="right"
          className="-mt-24 ml-0 mr-auto rounded-3xl bg-white p-8 shadow-soft sm:-mt-24 sm:p-10 lg:ml-auto lg:mr-10 lg:max-w-4xl relative z-10"
        >
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
