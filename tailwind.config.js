/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b0b0d",
        security: "#1a1a1f",
        gold: "#b70e0e",
        trust: "#059669",
        alert: "#dc2626",
        ink: "#111111",
        slate: "#5c5c66",
        cloud: "#f5f5f7"
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
        "hero-gradient": "linear-gradient(120deg, rgba(11,11,13,0.9), rgba(11,11,13,0.65))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(183,14,14,0.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
