import { testimonials } from "../../data/testimonials";
import { SectionHeader } from "../UI/SectionHeader";
import { Card } from "../UI/Card";
import { FadeIn } from "../Animation/FadeIn";

export const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Client Testimonials" subtitle="Social Proof" align="center" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="border-t-4 border-gold">
                <p className="text-sm text-slate">"{item.quote}"</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-slate">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
