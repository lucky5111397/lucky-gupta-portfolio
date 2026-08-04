/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09090B",
        surface: "#111827",
        "surface-raised": "#161B29",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.16)",
        "text-primary": "#F5F5F7",
        "text-dim": "#9CA3AF",
        "text-faint": "#6B7280",
        violet: {
          500: "#8B5CF6",
        },
        blue: {
          500: "#3B82F6",
        },
        cyan: {
          400: "#22D3EE",
        },
        online: "#34D399",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.15) 100%)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139,92,246,0.35)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.35)",
        card: "0 4px 24px -8px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        "spin-slow": "spin 20s linear infinite",
        "node-pulse": "node-pulse 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.4)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
