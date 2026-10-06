/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        security: "#263c70",
        "navy-50": "#E8EEF6",
        gold: "#B91C1C",
        trust: "#16A34A",
        alert: "#B71C1C",
        ink: "#0F1C33",
        slate: "#55688A",
        cloud: "#F4F7FE",
        sky: "#0EA5E9",
        indigo: "#6366F1",
        cyan: "#06B6D4"
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        lift: "0 18px 44px rgba(30, 60, 120, 0.14)",
        soft: "0 8px 26px rgba(30, 60, 120, 0.10)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg, rgba(11,11,13,0.9), rgba(11,11,13,0.65))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(183,14,14,0.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
