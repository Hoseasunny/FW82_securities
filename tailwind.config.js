/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        security: "#12294D",
        gold: "#D32F2F",
        trust: "#16A34A",
        alert: "#B71C1C",
        ink: "#0D0D0D",
        slate: "#6B7280",
        cloud: "#F7F8FA"
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
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
