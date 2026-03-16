import { CLIENT_LOGOS } from "../../utils/constants";

export const ClientLogos = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl overflow-hidden px-6">
        <div className="flex gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-slate animate-[scroll_18s_linear_infinite]">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, index) => (
            <span key={`${logo}-${index}`} className="opacity-70">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
