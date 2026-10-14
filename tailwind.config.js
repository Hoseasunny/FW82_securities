/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#17345A",
        security: "#254B78",
        "navy-50": "#E8F0FA",
        gold: "#D32F2F",
        trust: "#16A34A",
        alert: "#B71C1C",
        ink: "#10233F",
        slate: "#526782",
        cloud: "#F1F5FA",
        sky: "#0EA5E9",
        indigo: "#6366F1",
        cyan: "#06B6D4"
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        lift: "0 18px 44px rgba(16, 35, 63, 0.16)",
        soft: "0 8px 26px rgba(16, 35, 63, 0.10)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg, rgba(11,11,13,0.9), rgba(11,11,13,0.65))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(183,14,14,0.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
