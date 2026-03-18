import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "../../data/services";
import { SectionHeader } from "../UI/SectionHeader";
import { Button } from "../UI/Button";
import { FadeIn } from "../Animation/FadeIn";

export const HomeServices = () => {
  const technical = services.find((service) => service.slug === "technical-security");
  const pinnedServices = services.filter((service) => service.slug !== "technical-security");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!technical?.gallery?.length) return undefined;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % technical.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [technical]);

  const handlePrev = () => {
    if (!technical?.gallery?.length) return;
    setActiveSlide((prev) => (prev - 1 + technical.gallery.length) % technical.gallery.length);
  };

  const handleNext = () => {
    if (!technical?.gallery?.length) return;
    setActiveSlide((prev) => (prev + 1) % technical.gallery.length);
  };

  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Services" subtitle="Security Portfolio" />
        </FadeIn>

        {technical && (
          <FadeIn delay={0.1} className="mt-10">
            <div className="relative w-screen overflow-hidden bg-navy px-6 py-10 -mx-6 ml-[calc(50%-50vw)] sm:w-full sm:mx-0 sm:ml-0 sm:rounded-3xl sm:px-8">
              <div className="md:hidden">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative h-[72vh] w-full">
                    {technical.gallery.map((item, index) => (
                      <img
                        key={item.title}
                        src={item.image.src}
                        srcSet={item.image.srcSet}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                          index === activeSlide ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-navy/70" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">Technical Security</p>
                      <h3 className="mt-2 text-lg font-heading font-semibold">
                        {technical.gallery[activeSlide]?.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/80">
                        {technical.gallery[activeSlide]?.caption}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-soft"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-soft"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {technical.gallery.map((item, index) => (
                      <button
                        key={`${item.title}-dot`}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 w-2 rounded-full ${index === activeSlide ? "bg-gold" : "bg-white/60"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">Technical Security</p>
                    <h3 className="mt-2 text-lg font-heading font-semibold">{technical.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{technical.description}</p>
                  </div>
                  <Link
                    to={`/services/${technical.slug}`}
                    className="inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-gold"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 md:gap-6">
                {[0, 1].map((offset) => {
                  const panelIndex = (activeSlide + offset) % technical.gallery.length;
                  return (
                    <div key={panelIndex} className="relative overflow-hidden rounded-3xl">
                      <div className="relative h-80 w-full md:h-[420px]">
                        {technical.gallery.map((item, index) => (
                          <img
                            key={`${item.title}-${offset}`}
                            src={item.image.src}
                            srcSet={item.image.srcSet}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                              index === panelIndex ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        ))}
                      </div>
                    <div className="absolute inset-0 bg-navy/70" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">Technical Security</p>
                      <h3 className="mt-2 text-lg font-heading font-semibold">{technical.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{technical.description}</p>
                      <Link
                        to={`/services/${technical.slug}`}
                        className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-gold"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                  );
                })}
              </div>
              <div className="mt-6 hidden items-center justify-between gap-4 md:flex">
                <div className="flex items-center gap-2 text-white/80">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="rounded-full border border-white/40 p-2 text-white"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-full border border-white/40 p-2 text-white"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  {technical.gallery.map((item, index) => (
                    <button
                      key={`${item.title}-dot-desktop`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 w-2 rounded-full ${index === activeSlide ? "bg-gold" : "bg-white/40"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.2} className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pinnedServices.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-3xl bg-navy">
                <img
                  src={service.image.src}
                  srcSet={service.image.srcSet}
                  alt={service.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-navy/60 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold">Service</span>
                  <h3 className="mt-3 text-xl font-heading font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-gold"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 flex justify-end">
          <Button as={Link} to="/services" className="w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
