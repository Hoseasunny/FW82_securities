import { buildImageSet } from "../utils/imageGenerator";

export const services = [
  {
    title: "Guarding & Patrols",
    slug: "guarding-patrols",
    icon: "Shield",
    description: "Uniformed officers & estate patrols",
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
