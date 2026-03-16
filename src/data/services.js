import { buildImageSet } from "../utils/imageGenerator";

export const services = [
  {
    title: "Guarding & Patrols",
    icon: "Shield",
    description: "Uniformed officers & estate patrols",
    details: ["Uniformed Security Officers", "Estate Patrol Units", "Industrial Security", "Residential Guards"],
    image: buildImageSet(
      "Guarding & Patrols",
      "Security guard patrol vehicle in modern Kenyan residential estate at night, vehicle headlights on, professional security branding on car, suburban setting, dusk lighting",
      "patrol-vehicle"
    )
  },
  {
    title: "Technical Security",
    icon: "Cpu",
    description: "24/7 monitoring & smart analytics",
    details: ["CCTV Installation", "Intruder Alarms", "Access Control Systems", "Electric Fencing", "Biometric Systems"],
    image: buildImageSet(
      "Technical Security",
      "Security technician installing CCTV camera on building exterior, professional work, safety equipment, modern tools, clear sky",
      "cctv-install"
    )
  },
  {
    title: "Event Security",
    icon: "Users",
    description: "Crowd management & VIP protection",
    details: ["Crowd Management", "VIP Protection", "Concert Security", "Corporate Events", "Mall Events", "Diplomatic Security"],
    image: buildImageSet(
      "Event Security",
      "Large outdoor concert in Kenya with crowd and stage visible, security personnel managing crowd barriers, evening event lighting",
      "event-crowd"
    )
  },
  {
    title: "Smart Security Integration",
    icon: "Smartphone",
    description: "Advanced detection systems",
    details: ["Mobile App Monitoring", "Remote Alerts", "Smart Home Integration", "Cloud Storage", "AI Analytics"],
    image: buildImageSet(
      "Smart Integration",
      "Hand holding smartphone showing security camera feed app, modern home interior blurred, tech lifestyle photography",
      "smartphone-app"
    )
  }
];
