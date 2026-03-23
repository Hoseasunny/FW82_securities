import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const siteUrl = process.env.VITE_SITE_URL || "https://www.fw82securitysolutions.com";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/news",
  "/careers",
  "/contact"
];

const extractSlugs = (relativePath) => {
  const file = fs.readFileSync(path.join(root, relativePath), "utf-8");
  return [...file.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
};

const serviceRoutes = extractSlugs(path.join("src", "data", "services.js")).map(
  (slug) => `/services/${slug}`
);
const specializedRoutes = extractSlugs(path.join("src", "data", "specializedServices.js")).map(
  (slug) => `/services/specialized/${slug}`
);
const projectRoutes = extractSlugs(path.join("src", "data", "projects.js")).map(
  (slug) => `/projects/${slug}`
);
const newsRoutes = extractSlugs(path.join("src", "data", "news.js")).map(
  (slug) => `/news/${slug}`
);

const urls = [...staticRoutes, ...serviceRoutes, ...specializedRoutes, ...projectRoutes, ...newsRoutes].map((route) => {
  return `  <url>\n    <loc>${siteUrl}${route}</loc>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

const outputPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated at ${outputPath}`);
