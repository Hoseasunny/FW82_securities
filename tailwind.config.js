/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#001B54",
        security: "#001B54",
        "navy-50": "#F4F6FA",
        gold: "#FF001F",
        trust: "#16A34A",
        alert: "#FF001F",
        ink: "#050A18",
        slate: "#526178",
        cloud: "#FFFFFF",
        sky: "#001B54",
        indigo: "#001B54",
        cyan: "#FF001F"
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
        "hero-gradient": "linear-gradient(120deg, rgba(5,10,24,0.94), rgba(0,27,84,0.78))",
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(255,0,31,0.16) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
