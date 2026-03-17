import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { SectionHeader } from "../UI/SectionHeader";
import { Button } from "../UI/Button";
import { FadeIn } from "../Animation/FadeIn";

const buildLoopItems = (items) => {
  if (!items?.length) return [];
  return [...items, ...items];
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
            <div className="relative overflow-hidden rounded-3xl bg-navy p-6">
              <div className="loop-track flex gap-6" style={{ "--loop-duration": "32s" }}>
                {buildLoopItems(technical.gallery).map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="relative h-64 w-72 flex-shrink-0 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-navy/55" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">Technical Security</p>
                      <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                      <p className="mt-2 text-xs text-white/80">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.2} className="mt-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {pinnedServices.map((service) => (
              <div key={service.title} className="relative">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    alt={service.title}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                    decoding="async"
                  />
                </div>
                <div className="-mt-8 mx-4 rounded-2xl bg-white p-6 shadow-soft lg:mx-6">
                  <h3 className="text-lg font-heading font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate">{service.description}</p>
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
