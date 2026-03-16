/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a1628",
        security: "#1e3a5f",
        gold: "#c9a227",
        trust: "#059669",
        alert: "#dc2626",
        ink: "#1e293b",
        slate: "#64748b",
        cloud: "#f8fafc"
      },
      fontFamily: {
        heading: ["Inter", "Roboto", "ui-sans-serif", "system-ui"],
        body: ["Inter", "Open Sans", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        lift: "0 14px 30px rgba(10, 22, 40, 0.15)",
        soft: "0 8px 20px rgba(10, 22, 40, 0.12)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg, rgba(10,22,40,0.85), rgba(10,22,40,0.6))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(201,162,39,0.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
