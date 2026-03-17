import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { SectionHeader } from "../UI/SectionHeader";
import { Card } from "../UI/Card";
import { FadeIn } from "../Animation/FadeIn";
import { UserCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

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
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <Card key={item.name} className="w-full flex-shrink-0 border-t-4 border-gold">
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
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-soft"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-ink" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-soft"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-ink" />
              </button>
              <div className="mt-4 flex justify-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={`${item.name}-dot`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-gold" : "bg-slate/40"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
