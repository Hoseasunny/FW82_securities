import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { SectionHeader } from "../UI/SectionHeader";
import { Button } from "../UI/Button";
import { FadeIn } from "../Animation/FadeIn";

const buildTripleSet = (items, startIndex = 0) => {
  if (!items?.length) return [];
  const picks = [0, 1, 2].map((offset) => items[(startIndex + offset) % items.length]);
  return picks;
};

export const HomeServices = () => {
  const technical = services.find((service) => service.slug === "technical-security");
  const pinnedServices = services.filter((service) => service.slug !== "technical-security");

  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Services" subtitle="Security Portfolio" />
        </FadeIn>

        {technical && (
          <FadeIn delay={0.1} className="mt-10">
            <div className="relative w-screen overflow-hidden bg-navy px-6 py-10 sm:rounded-3xl sm:px-8 -mx-6 ml-[calc(50%-50vw)]">
              <div className="grid gap-6 lg:grid-cols-2">
                {[0, 2].map((startIndex) => (
                  <div key={startIndex} className="relative overflow-hidden rounded-3xl">
                    <div className="triple-fade h-screen w-full sm:h-80 md:h-[420px]">
                      {buildTripleSet(technical.gallery, startIndex).map((item) => (
                        <img
                          key={`${item.title}-${startIndex}`}
                          src={item.image.src}
                          srcSet={item.image.srcSet}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-navy/55" />
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
                ))}
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
