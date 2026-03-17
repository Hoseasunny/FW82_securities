import { buildImageSet } from "../utils/imageGenerator";

export const projects = [
  {
    title: "Airport Mall Changamwe",
    category: "Event Security",
    summary: "Event Security & Crowd Management",
    image: buildImageSet(
      "Airport Mall",
      "Modern shopping mall interior in Kenya, busy with shoppers, security personnel in professional uniforms visible, bright lighting",
      "projects/project-1"
    ),
    details: {
      challenge: "High visitor volumes demanded seamless crowd control without disrupting the shopping experience.",
      solution: "Deployed event marshals, intelligent queue systems, and rapid response patrols.",
      results: "Reduced incident response times by 40% and improved client satisfaction scores."
    }
  },
  {
    title: "Close the Gap Ltd",
    category: "Technical Systems",
    summary: "Integrated CCTV & Alarm Systems",
    image: buildImageSet(
      "Close the Gap",
      "Modern office building exterior in Nairobi, glass facade, security cameras visible, blue sky",
      "projects/project-2"
    ),
    details: {
      challenge: "Needed unified visibility across multiple floors and entry points.",
      solution: "Installed AI-enabled CCTV with centralized monitoring and access control.",
      results: "Achieved full perimeter visibility with automated alerts in under 30 days."
    }
  },
  {
    title: "Kenya Ports Authority",
    category: "Guarding",
    summary: "Perimeter Security & Access Control",
    image: buildImageSet(
      "Kenya Ports",
      "Industrial port facility in Mombasa Kenya, security checkpoint with barrier gate, container shipping area",
      "projects/project-3"
    ),
    details: {
      challenge: "Securing a high-traffic logistics hub with restricted access requirements.",
      solution: "Implemented layered access control, guard rotations, and automated checkpoints.",
      results: "Improved access compliance to 99.5% with zero critical breaches."
    }
  },
  {
    title: "Nairobi Business Park",
    category: "Guarding",
    summary: "24/7 Manned Guarding",
    image: buildImageSet(
      "Business Park",
      "Modern office park entrance in Nairobi, security booth with guard, landscaped gardens",
      "projects/project-4"
    ),
    details: {
      challenge: "Maintaining security continuity across multiple office tenants.",
      solution: "Dedicated control room team with rapid response units.",
      results: "Created a single secure access flow for 12+ corporate tenants."
    }
  },
  {
    title: "Diamond Plaza II",
    category: "Technical Systems",
    summary: "Integrated Security Systems",
    image: buildImageSet(
      "Diamond Plaza",
      "Shopping mall interior with security cameras visible on ceiling, modern retail environment",
      "projects/project-5"
    ),
    details: {
      challenge: "Required discrete monitoring while maintaining luxury retail ambience.",
      solution: "Blended CCTV coverage with discreet on-ground guarding.",
      results: "Improved loss prevention metrics by 32%."
    }
  },
  {
    title: "Safari Rally Kenya 2023",
    category: "Event Security",
    summary: "Event Security Management",
    image: buildImageSet(
      "Safari Rally",
      "Rally cars on dirt track in Kenya, crowd barriers, security personnel in high-visibility vests",
      "projects/project-6"
    ),
    details: {
      challenge: "Large-scale crowd safety over multiple locations.",
      solution: "Multi-site command with on-ground marshals and emergency response lanes.",
      results: "Zero major incidents recorded across three days of competition."
    }
  }
];
