import { buildImageSet } from "../utils/imageGenerator";

export const newsItems = [
  {
    title: "FW82 Security Supports Community Safety Program in Changamwe",
    date: "March 2024",
    category: "Community",
    excerpt:
      "FW82 partnered with local leaders to deliver safety awareness sessions and neighborhood patrol support.",
    image: buildImageSet(
      "Community Safety",
      "Community safety initiative in Kenya, security team with community leaders",
      "news-thumbnails/team-briefing"
    )
  },
  {
    title: "Belgium Ambassador Visits Client Event at Airport Mall",
    date: "February 2024",
    category: "Corporate",
    excerpt:
      "Our event security detail supported a diplomatic visit with full VIP protection protocols.",
    image: buildImageSet(
      "Diplomatic Visit",
      "Corporate event at a modern Kenyan mall with VIP arrival",
      "news-thumbnails/news-1"
    )
  },
  {
    title: "New AI-Powered CCTV Systems for SMEs Launch",
    date: "January 2024",
    category: "Technology",
    excerpt:
      "Smart analytics and automated alerts are now available for SMEs across Kenya.",
    image: buildImageSet(
      "AI CCTV",
      "Modern CCTV cameras with AI analytics visual overlay",
      "news-thumbnails/news-2"
    )
  },
  {
    title: "FW82 Achieves ISO 9001:2015 Certification",
    date: "December 2023",
    category: "Company News",
    excerpt:
      "ISO certification reinforces our commitment to quality assurance and continuous improvement.",
    image: buildImageSet(
      "ISO Certified",
      "Corporate certification ceremony with team",
      "news-thumbnails/news-3"
    )
  }
];
