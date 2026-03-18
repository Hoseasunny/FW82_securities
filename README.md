# FW82 Security Solutions Website

Marketing and lead‑generation website for FW82 Security Solution Ltd. Built with React + Vite and styled with Tailwind CSS. The site includes multi‑page navigation, service detail pages with galleries, projects/case studies, news, careers, contact, and SEO enhancements (Open Graph, JSON‑LD, sitemap, robots).

## Features
- Home page with hero, services overview, and testimonials
- Services page with dedicated service detail pages
- Projects/case studies gallery with modal details
- News/updates listing
- Careers application form
- Contact form + branch contacts + social links
- SEO: per‑page metadata, Open Graph/Twitter, JSON‑LD, sitemap, robots

## Tech Stack
- React 19 + React Router
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- react-helmet-async for SEO

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## SEO / Sitemap
Generate sitemap (also runs automatically during `npm run build`):
```bash
npm run sitemap
```

## Environment
Set the public site URL for canonical links and sitemap:
```bash
VITE_SITE_URL=https://factory2ksecurity.co.ke
```

## Image Pipeline
This project uses WebP image sets with `srcSet` for performance.

- Generator: `scripts/generate-image-sets.cjs`
- Favicon generator: `scripts/convert-favicon.cjs`

Example usage:
```bash
node scripts/generate-image-sets.cjs
node scripts/convert-favicon.cjs "C:\path\to\favicon.png"
```

## Folder Structure (images)
```
public/images/
  hero/
  why-choose-us/
  services/
  projects/
  news-thumbnails/
```
