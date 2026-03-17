const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sizes = [400, 800, 1200];

const mappings = [
  // Hero
  { src: "public/images/hero/hero-1.jpg", dest: "public/images/hero/hero-1" },
  { src: "public/images/hero/hero-1.jpg", dest: "public/images/hero/hero-2" },
  { src: "public/images/hero/hero-1.jpg", dest: "public/images/hero/hero-3" },

  // Why choose us
  { src: "public/images/why-choose-us/why-1.jpg", dest: "public/images/why-choose-us/why-1" },
  { src: "public/images/why-choose-us/why-2.jpg", dest: "public/images/why-choose-us/why-2" },
  { src: "public/images/why-choose-us/why-3.jpg", dest: "public/images/why-choose-us/why-3" },

  // Guarding & Patrols
  { src: "public/images/services/guarding-patrols/cover.jpg", dest: "public/images/services/guarding-patrols/cover" },
  { src: "public/images/services/guarding-patrols/uniformed.jpg", dest: "public/images/services/guarding-patrols/uniformed-officers" },
  { src: "public/images/services/guarding-patrols/estate-patrol.jpg", dest: "public/images/services/guarding-patrols/estate-patrol" },
  { src: "public/images/services/guarding-patrols/indurstrial-security.jpg", dest: "public/images/services/guarding-patrols/industrial-security" },
  { src: "public/images/services/guarding-patrols/residential-guards.jpg", dest: "public/images/services/guarding-patrols/residential-guards" },

  // Technical Security
  { src: "public/images/services/technical-security/cover.jpg", dest: "public/images/services/technical-security/cover" },
  { src: "public/images/services/technical-security/cctv-installation.jpg", dest: "public/images/services/technical-security/cctv-installation" },
  { src: "public/images/services/technical-security/intruder-alarms.jpg", dest: "public/images/services/technical-security/intruder-alarms" },
  { src: "public/images/services/technical-security/access-control.jpg", dest: "public/images/services/technical-security/access-control" },
  { src: "public/images/services/technical-security/electric-fencing.jpg", dest: "public/images/services/technical-security/electric-fencing" },
  { src: "public/images/services/technical-security/biometric-systems.jpg", dest: "public/images/services/technical-security/biometric-systems" },
  { src: "public/images/services/technical-security/claud-storage.jpg", dest: "public/images/services/technical-security/cloud-storage" },
  { src: "public/images/services/technical-security/ai-intergration.jpg", dest: "public/images/services/technical-security/ai-analytics" },

  // Event Security
  { src: "public/images/services/event-security/cover.jpg", dest: "public/images/services/event-security/cover" },
  { src: "public/images/services/event-security/crowd-management.jpg", dest: "public/images/services/event-security/crowd-management" },
  { src: "public/images/services/event-security/vip-protection.jpg", dest: "public/images/services/event-security/vip-protection" },
  { src: "public/images/services/event-security/cooperate-events.jpg", dest: "public/images/services/event-security/corporate-events" },
  { src: "public/images/services/event-security/crowd-management.jpg", dest: "public/images/services/event-security/concert-security" },
  { src: "public/images/services/event-security/cover.jpg", dest: "public/images/services/event-security/mall-events" },
  { src: "public/images/services/event-security/vip-protection.jpg", dest: "public/images/services/event-security/diplomatic-security" },

  // Smart Security Integration (source folder has a typo)
  { src: "public/images/services/smart-security-intergration/cover.jpg", dest: "public/images/services/smart-security-integration/cover" },
  { src: "public/images/services/smart-security-intergration/mobile-app.jpg", dest: "public/images/services/smart-security-integration/mobile-app" },
  { src: "public/images/services/smart-security-intergration/smart-alerts.jpg", dest: "public/images/services/smart-security-integration/remote-alerts" },
  { src: "public/images/services/smart-security-intergration/smart-home.jpg", dest: "public/images/services/smart-security-integration/smart-home" },
  { src: "public/images/services/smart-security-intergration/smart-alerts.jpg", dest: "public/images/services/smart-security-integration/cloud-storage" },
  { src: "public/images/services/smart-security-intergration/smart-home.jpg", dest: "public/images/services/smart-security-integration/ai-analytics" },

  // Projects
  { src: "public/images/projects/project-1.jpg", dest: "public/images/projects/project-1" },
  { src: "public/images/projects/project-2.jpg", dest: "public/images/projects/project-2" },
  { src: "public/images/projects/project-3.jpg", dest: "public/images/projects/project-3" },
  { src: "public/images/projects/project-4.jpg", dest: "public/images/projects/project-4" },
  { src: "public/images/projects/project-6.jpg", dest: "public/images/projects/project-6" },
  { src: "public/images/projects/project-5.webp", dest: "public/images/projects/project-5" },

  // News
  { src: "public/images/news-thumbnails/news-1.jpg", dest: "public/images/news-thumbnails/news-1" },
  { src: "public/images/news-thumbnails/news-2.jpg", dest: "public/images/news-thumbnails/news-2" },
  { src: "public/images/news-thumbnails/news-3.jpg", dest: "public/images/news-thumbnails/news-3" },
  { src: "public/images/news-thumbnails/team-briefing.jpg", dest: "public/images/news-thumbnails/team-briefing" }
];

const root = process.cwd();

const ensureDir = (filePath) => {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
};

const convertOne = async (src, destBase) => {
  const srcPath = path.join(root, src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Missing source: ${src}`);
    return;
  }

  await Promise.all(
    sizes.map(async (size) => {
      const destPath = path.join(root, `${destBase}-${size}.webp`);
      ensureDir(destPath);
      await sharp(srcPath)
        .resize(size)
        .webp({ quality: 82 })
        .toFile(destPath);
    })
  );
};

const run = async () => {
  for (const { src, dest } of mappings) {
    await convertOne(src, dest);
  }
  console.log("Image sets generated.");
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
