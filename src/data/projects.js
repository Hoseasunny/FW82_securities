import { buildImageSet } from "../utils/imageGenerator";

export const projects = [
  {
    title: "Airport Mall Changamwe",
    slug: "airport-mall-changamwe",
    category: "Event Security",
    summary: "Event Security & Crowd Management",
    image: buildImageSet(
      "Airport Mall",
      "Modern shopping mall interior in Kenya, busy with shoppers, security personnel in professional uniforms visible, bright lighting",
      "projects/project-1"
    ),
    content: [
      "Airport Mall required a security partner capable of managing high foot traffic while maintaining a welcoming environment. FW82 Security Solutions Ltd implemented a layered approach: disciplined guards at entrances, discreet patrols inside, and CCTV monitoring across key zones.",
      "From daily operations to peak shopping seasons, our team coordinated with mall management to align access control with customer flow, ensuring visibility without creating friction for shoppers.",
      "The outcome was a safer shopping experience, reduced shoplifting incidents, and enhanced customer trust in the mall's management."
    ],
    stats: [
      { label: "Peak Crowd Coverage", value: "24/7" },
      { label: "Incident Response", value: "Faster" },
      { label: "Shoplifting Risk", value: "Reduced" }
    ],
    approach: [
      "Entry point screening and access control.",
      "Crowd management during peak shopping seasons.",
      "Emergency evacuation procedures designed with mall management."
    ],
    outcome:
      "A safer shopping experience, reduced shoplifting incidents, and enhanced customer trust in the mall's management.",
    details: {
      challenge: "High visitor volumes demanded seamless crowd control without disrupting the shopping experience.",
      solution: "Deployed event marshals, intelligent queue systems, and rapid response patrols.",
      results: "Reduced incident response times by 40% and improved client satisfaction scores."
    }
  },
  {
    title: "Close the Gap Ltd",
    slug: "close-the-gap-ltd",
    category: "Technical Systems",
    summary: "Integrated CCTV & Alarm Systems",
    image: buildImageSet(
      "Close the Gap",
      "Modern office building exterior in Nairobi, glass facade, security cameras visible, blue sky",
      "projects/project-2"
    ),
    content: [
      "Close the Gap Ltd required a unified visibility platform across multiple floors and entry points. FW82 delivered an integrated technical security solution that centralized monitoring and tightened access control.",
      "The deployment combined AI-enabled CCTV, automated alerts, and streamlined reporting so management teams could respond quickly to irregular activity.",
      "The result was full perimeter visibility, faster response coordination, and stronger compliance with internal security protocols."
    ],
    stats: [
      { label: "Floors Covered", value: "Multi-level" },
      { label: "Alert Automation", value: "Enabled" },
      { label: "Visibility", value: "Full" }
    ],
    approach: [
      "Centralized CCTV monitoring with AI-assisted alerts.",
      "Access control systems integrated with staff workflows.",
      "Rapid incident reporting and escalation procedures."
    ],
    outcome:
      "Full perimeter visibility with automated alerts and unified monitoring across all floors.",
    details: {
      challenge: "Needed unified visibility across multiple floors and entry points.",
      solution: "Installed AI-enabled CCTV with centralized monitoring and access control.",
      results: "Achieved full perimeter visibility with automated alerts in under 30 days."
    }
  },
  {
    title: "Kenya Ports Authority",
    slug: "kenya-ports-authority",
    category: "Guarding",
    summary: "Perimeter Security & Access Control",
    image: buildImageSet(
      "Kenya Ports",
      "Industrial port facility in Mombasa Kenya, security checkpoint with barrier gate, container shipping area",
      "projects/project-3"
    ),
    content: [
      "FW82 Security Solutions Ltd was engaged to provide comprehensive security services for the Kenya Ports Authority, one of Kenya's most vital economic gateways. The challenge was safeguarding cargo operations, staff, and facilities against theft, unauthorized access, and potential sabotage.",
      "Our team deployed highly trained guards at entry points, integrated CCTV surveillance with real-time monitoring, and established rapid response protocols for emergencies.",
      "The outcome included reduced incidents of unauthorized access, improved staff confidence, and strengthened compliance with international maritime security standards."
    ],
    stats: [
      { label: "Access Points", value: "Secured" },
      { label: "Response Protocols", value: "Live" },
      { label: "Compliance", value: "Strengthened" }
    ],
    approach: [
      "Deployment of highly trained guards at entry points.",
      "Integration of CCTV surveillance with real-time monitoring.",
      "Establishment of rapid response protocols for emergencies."
    ],
    outcome:
      "Reduced incidents of unauthorized access, improved staff confidence, and strengthened compliance with international maritime security standards.",
    details: {
      challenge: "Securing a high-traffic logistics hub with restricted access requirements.",
      solution: "Implemented layered access control, guard rotations, and automated checkpoints.",
      results: "Improved access compliance to 99.5% with zero critical breaches."
    }
  },
  {
    title: "Nairobi Business Park",
    slug: "nairobi-business-park",
    category: "Guarding",
    summary: "24/7 Manned Guarding",
    image: buildImageSet(
      "Business Park",
      "Modern office park entrance in Nairobi, security booth with guard, landscaped gardens",
      "projects/project-4"
    ),
    content: [
      "Nairobi Business Park required a consistent security posture across multiple tenants and operational schedules. FW82 deployed a dedicated guarding model supported by a control room and rapid response units.",
      "The solution balanced access control with a professional, client-friendly atmosphere that supported visitor flow without compromising security.",
      "This approach created a unified security standard across the complex, improving access discipline and tenant confidence."
    ],
    stats: [
      { label: "Tenants Covered", value: "12+" },
      { label: "Guarding", value: "24/7" },
      { label: "Access Flow", value: "Unified" }
    ],
    approach: [
      "Dedicated control room with 24/7 monitoring.",
      "Structured guard rotations aligned to tenant traffic.",
      "Clear visitor access procedures and reporting."
    ],
    outcome:
      "A single secure access flow and consistent protection across all tenant operations.",
    details: {
      challenge: "Maintaining security continuity across multiple office tenants.",
      solution: "Dedicated control room team with rapid response units.",
      results: "Created a single secure access flow for 12+ corporate tenants."
    }
  },
  {
    title: "Diamond Plaza II",
    slug: "diamond-plaza-ii",
    category: "Technical Systems",
    summary: "Integrated Security Systems",
    image: buildImageSet(
      "Diamond Plaza",
      "Shopping mall interior with security cameras visible on ceiling, modern retail environment",
      "projects/project-5"
    ),
    content: [
      "Diamond Plaza II required discreet monitoring while maintaining a luxury retail environment. FW82 blended CCTV coverage with visible guarding to deter threats without disrupting the premium customer experience.",
      "The deployment emphasized real-time surveillance, quiet incident response, and coordinated reporting across retail zones.",
      "Loss prevention improved, and the mall benefited from a more confident and secure retail atmosphere."
    ],
    stats: [
      { label: "Retail Zones", value: "Protected" },
      { label: "Response", value: "Discreet" },
      { label: "Loss Prevention", value: "Improved" }
    ],
    approach: [
      "Discreet CCTV coverage across key retail zones.",
      "Visible guarding to deter threats without friction.",
      "Rapid incident escalation and reporting."
    ],
    outcome:
      "Improved loss prevention metrics and stronger confidence among tenants and shoppers.",
    details: {
      challenge: "Required discrete monitoring while maintaining luxury retail ambience.",
      solution: "Blended CCTV coverage with discreet on-ground guarding.",
      results: "Improved loss prevention metrics by 32%."
    }
  },
  {
    title: "Safari Rally Kenya 2023",
    slug: "safari-rally-kenya-2023",
    category: "Event Security",
    summary: "Event Security Management",
    image: buildImageSet(
      "Safari Rally",
      "Rally cars on dirt track in Kenya, crowd barriers, security personnel in high-visibility vests",
      "projects/project-6"
    ),
    content: [
      "Safari Rally Kenya required large-scale crowd management across multiple locations. FW82 coordinated on-ground marshals and emergency response lanes to maintain safe movement throughout the event.",
      "A central command team tracked activity across venues while field teams managed crowd density and event access points.",
      "The result was a safe, well-managed event with zero major incidents recorded."
    ],
    stats: [
      { label: "Event Days", value: "3" },
      { label: "Incidents", value: "Zero" },
      { label: "Coverage", value: "Multi-site" }
    ],
    approach: [
      "Multi-site command coordination and coverage.",
      "On-ground marshals for crowd safety and access control.",
      "Emergency response lanes and rapid escalation."
    ],
    outcome:
      "Zero major incidents recorded across three days of competition.",
    details: {
      challenge: "Large-scale crowd safety over multiple locations.",
      solution: "Multi-site command with on-ground marshals and emergency response lanes.",
      results: "Zero major incidents recorded across three days of competition."
    }
  },
  {
    title: "Corporate Office Complex",
    slug: "corporate-office-complex",
    category: "Guarding",
    summary: "Executive Protection & Access Control",
    image: buildImageSet(
      "Corporate Office Complex",
      "Modern corporate office complex in Nairobi with professional security presence at entry",
      "projects/project-7"
    ),
    content: [
      "A leading corporate client engaged FW82 Security Solutions Ltd to secure its Nairobi headquarters. The challenge was balancing strict access control with a professional, client-friendly atmosphere.",
      "FW82 deployed biometric access systems for staff and visitors, provided VIP escort services for executives, and trained guards to manage both routine operations and high-pressure scenarios.",
      "The result was improved executive safety, streamlined visitor management, and a professional environment that reassured both staff and clients."
    ],
    stats: [
      { label: "Access Control", value: "Biometric" },
      { label: "VIP Escort", value: "Dedicated" },
      { label: "Visitor Flow", value: "Streamlined" }
    ],
    approach: [
      "Biometric access systems for staff and visitors.",
      "VIP escort services for executives.",
      "Guards trained for routine operations and high-pressure scenarios."
    ],
    outcome:
      "Improved executive safety, streamlined visitor management, and a professional environment that reassured staff and clients.",
    details: {
      challenge: "Needed strict access control without compromising a premium client experience.",
      solution: "Implemented biometric access, visitor screening, and executive escort protocols.",
      results: "Improved executive safety and streamlined visitor management."
    }
  },
  {
    title: "Residential Estate - Mombasa",
    slug: "residential-estate-mombasa",
    category: "Guarding",
    summary: "Community Patrols & Safety Awareness",
    image: buildImageSet(
      "Residential Estate",
      "Gated residential estate in Mombasa with security gate and patrol presence, evening light",
      "projects/project-8"
    ),
    content: [
      "FW82 Security Solutions Ltd partnered with a gated community in Mombasa to strengthen residential security. Residents expressed concerns about burglary and unauthorized entry.",
      "Our teams established estate patrols, staffed guard posts at entry gates, and delivered safety awareness workshops for residents.",
      "The outcome was a significant reduction in burglary attempts, improved resident confidence, and a stronger sense of community safety."
    ],
    stats: [
      { label: "Patrols", value: "Daily" },
      { label: "Resident Trust", value: "Higher" },
      { label: "Burglary Risk", value: "Lower" }
    ],
    approach: [
      "Estate patrols and guard posts at entry gates.",
      "Safety awareness workshops for residents.",
      "Direct communication channels with rapid response units."
    ],
    outcome:
      "Significant reduction in burglary attempts, improved resident confidence, and a stronger sense of community safety.",
    details: {
      challenge: "Residents needed stronger deterrence against burglary and unauthorized entry.",
      solution: "Established patrols, guard posts, and a community response protocol.",
      results: "Reduced burglary attempts and improved resident confidence."
    }
  }
];
