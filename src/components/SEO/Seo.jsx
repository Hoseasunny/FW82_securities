import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "FW82 Security Solution Ltd";
const DEFAULT_DESCRIPTION =
  "Leading security company in Kenya offering guarding, CCTV, alarms, and event security. PSRA licensed. Serving Nairobi, Mombasa, Kisumu & Eldoret.";
const DEFAULT_IMAGE = "/images/hero/hero-1-1200.webp";
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

const withBase = (pathname = "/") => {
  if (!pathname.startsWith("/")) return `${SITE_URL}/${pathname}`;
  return `${SITE_URL}${pathname}`;
};

export const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  pathname = "/",
  type = "website",
  noindex = false,
  jsonLd
}) => {
  const canonical = withBase(pathname);
  const metaTitle = title;
  const metaDescription = description;
  const ogImage = image.startsWith("http") ? image : withBase(image);

  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLdItems.map((item, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};
