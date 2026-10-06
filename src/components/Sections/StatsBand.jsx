import React from "react";
import { Activity, MapPin, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { label: "Response support", value: "24/7", Icon: Activity },
  { label: "Kenyan branches", value: "4", Icon: MapPin },
  { label: "Protection model", value: "End-to-end", Icon: ShieldCheck },
  { label: "Technology enabled", value: "Always", Icon: Zap }
];

export const StatsBand = () => {
  return (
    <section className="bg-navy py-12 text-white" aria-label="FW82 service indicators">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, Icon: StatusIcon }, index) => (
          <div key={label} className={`flex items-center gap-4 lg:justify-center ${index > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
            {React.createElement(StatusIcon, {
              className: "h-6 w-6 shrink-0 text-red-400",
              "aria-hidden": "true"
            })}
            <div>
              <p className="font-heading text-2xl font-bold text-red-400">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};