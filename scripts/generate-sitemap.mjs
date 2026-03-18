import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const siteUrl = process.env.VITE_SITE_URL || "https://factory2ksecurity.co.ke";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/news",
  "/careers",
  "/contact"
];

const servicesFile = fs.readFileSync(path.join(root, "src", "data", "services.js"), "utf-8");
const slugMatches = [...servicesFile.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const serviceRoutes = slugMatches.map((slug) => `/services/${slug}`);

const urls = [...staticRoutes, ...serviceRoutes].map((route) => {
  return `  <url>\n    <loc>${siteUrl}${route}</loc>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

const outputPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated at ${outputPath}`);
