import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { newsItems } from "../data/news";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Seo } from "../components/SEO/Seo";
import { InlineLink } from "../components/UI/InlineLink";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { StaggerGroup } from "../components/Animation/StaggerGroup";

export const News = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return newsItems;
    return newsItems.filter((item) =>
      `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const [featured, ...rest] = filtered;
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

  return (
    <>
      <Seo
        title="News & Events | FW82 Security"
        description="Updates from FW82 Security and insights from the security landscape across Kenya."
        pathname="/news"
        image={featured?.image?.src}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${siteUrl}/`
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "News",
              item: `${siteUrl}/news`
            }
          ]
        }}
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "News" }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <h1 className="text-4xl font-heading font-bold">News & Events</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Updates from FW82 and the security landscape across Kenya.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <SectionHeader title="Latest Updates" subtitle="News" />
              <input
                type="search"
                placeholder="Search news"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search news articles"
                className="w-full rounded-full border border-slate/20 px-4 py-3 text-sm md:max-w-xs"
              />
            </div>

            {featured && (
              <Link to={`/news/${featured.slug}`} className="group mt-8 grid gap-6 lg:grid-cols-2">
                  <img
                    src={featured.image.src}
                    srcSet={featured.image.srcSet}
                    alt={featured.title}
                    className="h-full w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
                    decoding="async"
                  />
                <div className="flex flex-col justify-center rounded-3xl border border-slate/10 p-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold">Featured</span>
                  <h2 className="mt-3 text-2xl font-heading font-semibold text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate">{featured.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate">
                    <span>{featured.date}</span>
                    <span className="rounded-full bg-cloud px-3 py-1 text-gold">
                      {featured.category}
                    </span>
                    <span>{featured.readingTime}</span>
                  </div>
                  <InlineLink as="span" className="mt-6">
                    Learn More
                  </InlineLink>
                </div>
              </Link>
            )}

            <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Link
                  key={item.title}
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
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
                        {item.category}
                      </span>
                      <span className="text-slate">{item.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-heading font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.excerpt}</p>
                    <InlineLink as="span" className="mt-4">
                      Learn More
                    </InlineLink>
                  </div>
                </Link>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
    </>
  );
};
