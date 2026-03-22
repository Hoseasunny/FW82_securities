import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { newsItems } from "../data/news";
import { SectionHeader } from "../components/UI/SectionHeader";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { FadeIn } from "../components/Animation/FadeIn";
import { Seo } from "../components/SEO/Seo";
import { InlineLink } from "../components/UI/InlineLink";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";

export const NewsDetail = () => {
  const { slug } = useParams();

  const { article, related, nextArticle, prevArticle } = useMemo(() => {
    const index = newsItems.findIndex((item) => item.slug === slug);
    const current = index >= 0 ? newsItems[index] : null;
    const next = index >= 0 ? newsItems[(index + 1) % newsItems.length] : null;
    const prev = index >= 0 ? newsItems[(index - 1 + newsItems.length) % newsItems.length] : null;
    const others = newsItems.filter((item) => item.slug !== slug).slice(0, 2);
    return { article: current, related: others, nextArticle: next, prevArticle: prev };
  }, [slug]);

  if (!article) {
    return (
      <>
        <Seo title="News Not Found | FW82 Security" description="News article not found." pathname="/news" noindex />
        <main>
          <section className="bg-navy py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="text-3xl font-heading font-bold">News Article Not Found</h1>
              <p className="mt-4 max-w-2xl text-white/70">
                We could not locate that update. Please explore our latest news instead.
              </p>
              <Button as={Link} to="/news" variant="secondary" className="mt-6 w-fit text-xs">
                Back to News
              </Button>
            </div>
          </section>
        </main>
      </>
    );
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

  return (
    <>
      <Seo
        title={`${article.title} | FW82 Security`}
        description={article.excerpt}
        pathname={`/news/${article.slug}`}
        image={article.image.src}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            datePublished: article.date,
            image: article.image.src,
            publisher: {
              "@type": "Organization",
              name: "FW82 Security Solution Ltd"
            }
          },
          {
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
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `${siteUrl}/news/${article.slug}`
              }
            ]
          }
        ]}
      />
      <main>
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "News", to: "/news" },
                { label: article.category }
              ]}
              textClassName="text-white/60"
              linkClassName="hover:text-gold"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">{article.category}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-heading font-bold">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <FadeIn>
                <img
                  src={article.image.src}
                  srcSet={article.image.srcSet}
                  alt={article.title}
                  className="aspect-video w-full rounded-3xl object-cover shadow-soft"
                  decoding="async"
                />
              </FadeIn>
              <div className="mt-10 space-y-6">
                {article.content.map((paragraph, index) => (
                  <FadeIn key={`${article.slug}-p-${index}`} delay={0.05 * index}>
                    <p className="text-sm leading-8 text-slate">{paragraph}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <FadeIn delay={0.1}>
                <Card className="border border-slate/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Highlights</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate">
                    {article.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card className="border border-slate/10 bg-cloud">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Quick Contact</p>
                  <p className="mt-4 text-sm text-slate">
                    Need a briefing on this update or a tailored security plan? Our team can
                    walk you through the operational details.
                  </p>
                  <Button as={Link} to="/contact" variant="primary" className="mt-6 w-full text-xs">
                    Talk to FW82
                  </Button>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-cloud py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader title="More Updates" subtitle="Related News" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-slate/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <img
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    alt={item.title}
                    className="aspect-4/3 w-full object-cover"
                    decoding="async"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.category}</p>
                    <h3 className="mt-3 text-lg font-heading font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.excerpt}</p>
                    <InlineLink as="span" className="mt-4">
                      Read more
                    </InlineLink>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate/10 bg-cloud p-6">
              {prevArticle && (
                <Button as={Link} to={`/news/${prevArticle.slug}`} variant="secondary" className="text-xs">
                  Previous Article
                </Button>
              )}
              <Button as={Link} to="/news" variant="dark" className="text-xs">
                All News
              </Button>
              {nextArticle && (
                <Button as={Link} to={`/news/${nextArticle.slug}`} variant="primary" className="text-xs">
                  Next Article
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
