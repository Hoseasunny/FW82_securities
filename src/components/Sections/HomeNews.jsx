import { Link } from "react-router-dom";
import { newsItems } from "../../data/news";
import { SectionHeader } from "../UI/SectionHeader";
import { FadeIn } from "../Animation/FadeIn";
import { InlineLink } from "../UI/InlineLink";

export const HomeNews = () => {
  const items = newsItems.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeader title="Latest News" subtitle="Updates" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-slate/10 bg-cloud transition hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={item.image.src}
                  srcSet={item.image.srcSet}
                  alt={item.title}
                  className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                  decoding="async"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate">
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-heading font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{item.excerpt}</p>
                  <InlineLink as="span" className="mt-4">
                    Learn More
                  </InlineLink>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
        <div className="mt-8 flex justify-end">
          <Link to="/news" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};
