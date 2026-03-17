import { testimonials } from "../../data/testimonials";
import { SectionHeader } from "../UI/SectionHeader";
import { Card } from "../UI/Card";
import { FadeIn } from "../Animation/FadeIn";
import { UserCircle2 } from "lucide-react";

export const Testimonials = () => {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Client Testimonials" subtitle="Social Proof" align="center" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="border-t-4 border-gold">
                <div className="flex items-start gap-3">
                  <UserCircle2 className="h-10 w-10 text-slate" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-slate">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate">"{item.quote}"</p>
              </Card>
            ))}
          </div>
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div className="loop-track flex gap-6" style={{ "--loop-duration": "26s" }}>
                {loopedTestimonials.map((item, index) => (
                  <Card key={`${item.name}-${index}`} className="w-72 flex-shrink-0 border-t-4 border-gold">
                    <div className="flex items-start gap-3">
                      <UserCircle2 className="h-10 w-10 text-slate" />
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.name}</p>
                        <p className="text-xs text-slate">{item.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate">"{item.quote}"</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
