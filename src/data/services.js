import { buildImageSet } from "../utils/imageGenerator";

export const services = [
  {
    title: "Guarding & Patrols",
    slug: "guarding-patrols",
    icon: "Shield",
    description: "Uniformed officers & estate patrols",
    shortDescription: "Guards & patrols",
    longIntro:
      "Guarding and patrols form the backbone of FW82 Security Solutions Ltd's service offering. We provide visible, disciplined, and professional protection that deters threats, reassures communities, and safeguards businesses. Our uniformed officers are licensed by the Private Security Regulatory Authority (PSRA) and trained to deliver more than presence - they provide vigilance, responsiveness, and professionalism.",
    longSections: [
      {
        title: "Uniformed Security Officers",
        body:
          "Our officers are the frontline of protection. Stationed at entrances, lobbies, and sensitive areas, they serve as both deterrents and ambassadors of safety.",
        bullets: [
          "Access control and visitor management",
          "Conflict resolution and de-escalation techniques",
          "Emergency response and first aid",
          "Customer service and professional conduct"
        ]
      },
      {
        title: "Estate Patrol Units",
        body:
          "Residential communities require consistent vigilance. Our estate patrol units conduct both scheduled and randomized patrols across compounds, ensuring that potential threats are deterred and residents feel reassured.",
        bullets: [
          "Scheduled and randomized patrol coverage",
          "Real-time incident reporting and escalation",
          "Rapid backup coordination when needed"
        ]
      },
      {
        title: "Industrial Security",
        body:
          "Industrial sites face unique risks, including theft, vandalism, and unauthorized access. We provide perimeter oversight, access control, and surveillance integration for factories, warehouses, and construction sites.",
        bullets: [
          "Perimeter oversight and access control",
          "Monitoring of heavy equipment and sensitive assets",
          "Coordination with site managers for safe operations"
        ]
      },
      {
        title: "Residential Guards",
        body:
          "For homes and gated communities, FW82 offers friendly yet vigilant guards who manage gate access, monitor visitors, and patrol neighborhoods.",
        bullets: [
          "Visitor management and gate control",
          "Neighborhood patrols and visibility",
          "Trusted relationships with residents"
        ]
      }
    ],
    whyChoose: [
      "Licensed, PSRA-certified personnel",
      "24/7 availability with rapid response support",
      "Integration of patrols with CCTV and alarm systems",
      "Customized deployment strategies for each client environment",
      "Proven track record across corporate, industrial, and residential settings"
    ],
    closing:
      "Guarding and patrols are not just about uniforms - they are about discipline, vigilance, and trust. FW82 Security Solutions Ltd delivers professional protection that adapts to diverse environments, ensuring that businesses, communities, and homes across Kenya remain safe and secure.",
    details: ["Uniformed Security Officers", "Estate Patrol Units", "Industrial Security", "Residential Guards"],
    image: buildImageSet(
      "Guarding & Patrols",
      "Security guard patrol vehicle in modern Kenyan residential estate at night, vehicle headlights on, professional security branding on car, suburban setting, dusk lighting",
      "services/guarding-patrols/cover"
    ),
    gallery: [
      {
        title: "Uniformed Security Officers",
        caption: "Visible deterrence with professional, PSRA-trained officers.",
        image: buildImageSet(
          "Uniformed Security Officers",
          "Professional uniformed security officer standing at a gated entrance in Kenya, crisp uniform, confident posture",
          "services/guarding-patrols/uniformed-officers"
        )
      },
      {
        title: "Estate Patrol Units",
        caption: "Scheduled and randomized patrols across residential compounds.",
        image: buildImageSet(
          "Estate Patrol Units",
          "Branded patrol vehicle driving through a quiet residential estate at night with headlights on",
          "services/guarding-patrols/estate-patrol"
        )
      },
      {
        title: "Industrial Security",
        caption: "Access control and perimeter oversight for industrial sites.",
        image: buildImageSet(
          "Industrial Security",
          "Security officer at industrial facility entrance with warehouse background, professional atmosphere",
          "services/guarding-patrols/industrial-security"
        )
      },
      {
        title: "Residential Guards",
        caption: "Friendly front-line security for communities and homes.",
        image: buildImageSet(
          "Residential Guards",
          "Security officer greeting residents at a modern apartment entrance, daytime",
          "services/guarding-patrols/residential-guards"
        )
      }
    ]
  },
  {
    title: "Technical Security",
    slug: "technical-security",
    icon: "Cpu",
    description: "24/7 monitoring & smart analytics",
    shortDescription: "Smart monitoring",
    longIntro:
      "Technical security strengthens physical protection with smart surveillance, automated alerts, and reliable monitoring. FW82 Security Solutions Ltd designs and deploys integrated systems that provide real-time visibility, faster response, and dependable reporting across commercial, industrial, and residential environments.",
    longSections: [
      {
        title: "CCTV Installation",
        body:
          "We provide high-definition CCTV coverage with clear visibility day and night, designed around entry points, perimeter zones, and high-risk areas.",
        bullets: [
          "Strategic camera placement and coverage mapping",
          "Night vision and analytics-ready devices",
          "Centralized monitoring and incident playback"
        ]
      },
      {
        title: "Intruder Alarms",
        body:
          "Rapid alerts reduce response time and protect assets before incidents escalate. Our alarm solutions integrate with response protocols for immediate action.",
        bullets: [
          "Instant alerts and escalation workflows",
          "Integration with guard response teams",
          "Reliable monitoring and false-alarm management"
        ]
      },
      {
        title: "Access Control Systems",
        body:
          "Access control ensures only authorized personnel enter sensitive areas, with secure audit trails for accountability.",
        bullets: [
          "Secure entry points with smart locks",
          "Audit logs and visitor management tools",
          "Scalable configurations for growing sites"
        ]
      },
      {
        title: "Electric Fencing",
        body:
          "Perimeter systems act as a strong deterrent and integrate with sensors for early warning and response coordination.",
        bullets: [
          "Perimeter defense with sensor integration",
          "Early detection of breach attempts",
          "Compliance with safety standards"
        ]
      },
      {
        title: "Biometric Systems",
        body:
          "Biometrics enhance security for high-value environments by verifying identity with precision and speed.",
        bullets: [
          "Fingerprint and facial recognition options",
          "Secure access for sensitive zones",
          "Reduced credential sharing risks"
        ]
      }
    ],
    whyChoose: [
      "Real-time monitoring and smart analytics",
      "Systems tailored to each site risk profile",
      "Integration with guarding and response teams",
      "Certified installation and maintenance support",
      "Scalable solutions for growing operations"
    ],
    closing:
      "With FW82 technical security, clients gain visibility, control, and peace of mind. Our integrated systems ensure threats are detected early and addressed quickly, keeping people and assets protected.",
    details: ["CCTV Installation", "Intruder Alarms", "Access Control Systems", "Electric Fencing", "Biometric Systems"],
    image: buildImageSet(
      "Technical Security",
      "Security technician installing CCTV camera on building exterior, professional work, safety equipment, modern tools, clear sky",
      "services/technical-security/cover"
    ),
    gallery: [
      {
        title: "CCTV Installation",
        caption: "High-definition coverage with night vision and analytics.",
        image: buildImageSet(
          "CCTV Installation",
          "Technician installing a modern CCTV camera on a building exterior",
          "services/technical-security/cctv-installation"
        )
      },
      {
        title: "Intruder Alarms",
        caption: "Immediate alerts and rapid response escalation.",
        image: buildImageSet(
          "Intruder Alarms",
          "Security control room screens showing alarm alerts and camera feeds",
          "services/technical-security/intruder-alarms"
        )
      },
      {
        title: "Access Control Systems",
        caption: "Secure entry points with audit trails and smart locks.",
        image: buildImageSet(
          "Access Control Systems",
          "Corporate entrance with modern access control turnstiles",
          "services/technical-security/access-control"
        )
      },
      {
        title: "Electric Fencing",
        caption: "Perimeter protection integrated with sensors.",
        image: buildImageSet(
          "Electric Fencing",
          "Industrial perimeter fencing with security lighting at dusk",
          "services/technical-security/electric-fencing"
        )
      },
      {
        title: "Biometric Systems",
        caption: "Fingerprint and facial recognition for sensitive zones.",
        image: buildImageSet(
          "Biometric Systems",
          "Modern office lobby with biometric access terminal",
          "services/technical-security/biometric-systems"
        )
      }
    ]
  },
  {
    title: "Event Security",
    slug: "event-security",
    icon: "Users",
    description: "Crowd management & VIP protection",
    shortDescription: "Crowd & VIP",
    longIntro:
      "Events require a security presence that is firm, professional, and discreet. FW82 Security Solutions Ltd delivers structured event protection that prioritizes guest safety, smooth access flow, and rapid incident response for corporate, retail, and public gatherings.",
    longSections: [
      {
        title: "Crowd Management",
        body:
          "Safe crowd movement protects guests and reduces risk. We deploy marshals, barriers, and clear flow plans to maintain order.",
        bullets: [
          "Controlled entry and exit points",
          "Barrier systems and safe flow design",
          "On-ground marshals for guidance"
        ]
      },
      {
        title: "VIP Protection",
        body:
          "Our close protection teams provide discreet security for high-profile guests while maintaining a professional and welcoming environment.",
        bullets: [
          "Executive escort services",
          "Discreet perimeter control",
          "Coordinated arrival and departure planning"
        ]
      },
      {
        title: "Concert Security",
        body:
          "Concerts and rallies demand multi-zone coverage with clear command and emergency response coordination.",
        bullets: [
          "Stage front and backstage security",
          "Emergency response lanes",
          "Multi-zone access control"
        ]
      },
      {
        title: "Corporate Events",
        body:
          "Corporate venues require secure access while preserving brand experience. We handle guest screening and venue control seamlessly.",
        bullets: [
          "Guest screening and verification",
          "Venue access control",
          "Professional, brand-aligned presence"
        ]
      },
      {
        title: "Mall Events",
        body:
          "Retail events require crowd safety and incident prevention while keeping the environment welcoming for shoppers.",
        bullets: [
          "Retail crowd management",
          "Rapid response coordination",
          "Incident reporting and escalation"
        ]
      },
      {
        title: "Diplomatic Security",
        body:
          "High-compliance protocols ensure safety for diplomatic and executive visits with strict access control and coordination.",
        bullets: [
          "Strict perimeter control",
          "Coordinated access protocols",
          "Enhanced privacy and safety measures"
        ]
      }
    ],
    whyChoose: [
      "Experienced event marshals and supervisors",
      "VIP and diplomatic protocol readiness",
      "Clear crowd flow and access strategies",
      "Rapid response coordination on site",
      "Professional guest-facing presence"
    ],
    closing:
      "FW82 event security keeps gatherings safe, organized, and professional. From corporate launches to public events, we deliver the calm control that protects guests and hosts alike.",
    details: ["Crowd Management", "VIP Protection", "Concert Security", "Corporate Events", "Mall Events", "Diplomatic Security"],
    image: buildImageSet(
      "Event Security",
      "Large outdoor concert in Kenya with crowd and stage visible, security personnel managing crowd barriers, evening event lighting",
      "services/event-security/cover"
    ),
    gallery: [
      {
        title: "Crowd Management",
        caption: "Barrier control and safe attendee flow.",
        image: buildImageSet(
          "Crowd Management",
          "Security team managing a crowd near event barriers at night",
          "services/event-security/crowd-management"
        )
      },
      {
        title: "VIP Protection",
        caption: "Discrete close protection for high-profile guests.",
        image: buildImageSet(
          "VIP Protection",
          "Professional security detail with executive client in a modern venue",
          "services/event-security/vip-protection"
        )
      },
      {
        title: "Concert Security",
        caption: "Backstage, stage front, and perimeter coverage.",
        image: buildImageSet(
          "Concert Security",
          "Large public rally with stage lighting and organized security presence",
          "services/event-security/concert-security"
        )
      },
      {
        title: "Corporate Events",
        caption: "Guest screening and venue access control.",
        image: buildImageSet(
          "Corporate Events",
          "Corporate event setting with professional staff and security presence",
          "services/event-security/corporate-events"
        )
      },
      {
        title: "Mall Events",
        caption: "Retail crowd safety and incident response.",
        image: buildImageSet(
          "Mall Events",
          "Busy retail mall environment with coordinated security staff",
          "services/event-security/mall-events"
        )
      },
      {
        title: "Diplomatic Security",
        caption: "High-compliance protocols and strict perimeter control.",
        image: buildImageSet(
          "Diplomatic Security",
          "Secure facility entrance with checkpoints and professional security",
          "services/event-security/diplomatic-security"
        )
      }
    ]
  },
  {
    title: "Smart Security Integration",
    slug: "smart-security-integration",
    icon: "Smartphone",
    description: "Advanced detection systems",
    shortDescription: "Smart integration",
    longIntro:
      "Smart security integration connects devices, alerts, and monitoring into one coordinated system. FW82 Security Solutions Ltd delivers technology that keeps clients informed in real time, reduces manual monitoring, and strengthens response across homes and businesses.",
    longSections: [
      {
        title: "Mobile App Monitoring",
        body:
          "Stay connected to your security system from anywhere with live feeds, notifications, and remote control.",
        bullets: [
          "Real-time camera feeds",
          "Mobile alerts and status updates",
          "Remote arming and disarming"
        ]
      },
      {
        title: "Remote Alerts",
        body:
          "Automated notifications ensure decision-makers know about incidents instantly, enabling faster action.",
        bullets: [
          "Instant push notifications",
          "Escalation workflows",
          "24/7 monitoring support"
        ]
      },
      {
        title: "Smart Home Integration",
        body:
          "Connected devices work together to secure entry points, manage lighting, and automate response.",
        bullets: [
          "Integrated device control",
          "Automation for safety routines",
          "Seamless compatibility"
        ]
      },
      {
        title: "Cloud Storage",
        body:
          "Secure, compliant storage keeps footage accessible and searchable when you need it.",
        bullets: [
          "Secure storage with redundancy",
          "Searchable footage archives",
          "Compliance-ready data handling"
        ]
      },
      {
        title: "AI Analytics",
        body:
          "AI tools detect unusual behavior, reduce false alarms, and help prevent incidents before they occur.",
        bullets: [
          "Behavioral analytics and anomaly detection",
          "Reduced false alarm rates",
          "Actionable insights for security teams"
        ]
      }
    ],
    whyChoose: [
      "Connected systems with real-time visibility",
      "Reduced manual monitoring requirements",
      "Smart alerts that improve response time",
      "Scalable solutions for homes and enterprises",
      "Secure data handling and reporting"
    ],
    closing:
      "FW82 smart security integration brings visibility, control, and automation into a single unified system. Clients benefit from faster response, better intelligence, and stronger peace of mind.",
    details: ["Mobile App Monitoring", "Remote Alerts", "Smart Home Integration", "Cloud Storage", "AI Analytics"],
    image: buildImageSet(
      "Smart Integration",
      "Hand holding smartphone showing security camera feed app, modern home interior blurred, tech lifestyle photography",
      "services/smart-security-integration/cover"
    ),
    gallery: [
      {
        title: "Mobile App Monitoring",
        caption: "Real-time feeds and alerts on the go.",
        image: buildImageSet(
          "Mobile App Monitoring",
          "Smartphone displaying live security camera feeds",
          "services/smart-security-integration/mobile-app"
        )
      },
      {
        title: "Remote Alerts",
        caption: "Instant push notifications and escalation workflows.",
        image: buildImageSet(
          "Remote Alerts",
          "Security control room with alert dashboards on screens",
          "services/smart-security-integration/remote-alerts"
        )
      },
      {
        title: "Smart Home Integration",
        caption: "Connected devices that work seamlessly together.",
        image: buildImageSet(
          "Smart Home Integration",
          "Modern residential complex with smart security features",
          "services/smart-security-integration/smart-home"
        )
      },
      {
        title: "Cloud Storage",
        caption: "Secure, compliant, and searchable footage storage.",
        image: buildImageSet(
          "Cloud Storage",
          "Abstract secure data center hallway with server racks",
          "services/smart-security-integration/cloud-storage"
        )
      },
      {
        title: "AI Analytics",
        caption: "Behavioral insights to prevent incidents early.",
        image: buildImageSet(
          "AI Analytics",
          "Security team reviewing analytics dashboards and camera feeds",
          "services/smart-security-integration/ai-analytics"
        )
      }
    ]
  }
];
