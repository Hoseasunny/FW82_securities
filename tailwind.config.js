/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        security: "#0A1628",
        "navy-50": "#F4F6FA",
        gold: "#FF7900",
        trust: "#16A34A",
        alert: "#FF7900",
        ink: "#050A18",
        slate: "#526178",
        cloud: "#FFFFFF",
        sky: "#0A1628",
        indigo: "#0A1628",
        cyan: "#FF7900"
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
        "hero-gradient": "linear-gradient(120deg, rgba(5,10,24,0.94), rgba(10,22,40,0.78))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(255,121,0,0.16) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
