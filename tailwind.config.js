/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        terminal: ['"Share Tech Mono"', "monospace"],
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        gold: "#c9a84c",
        "gold-light": "#e8c96a",
        "gold-dim": "#7a6230",
        green: "#4ade80",
        cyan: "#22d3ee",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "slide-down": "slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        scan: "scan 3s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        slideDown: {
          "0%": { transform: "translateY(-120%) rotate(-2deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 10px #c9a84c44" },
          "50%": { boxShadow: "0 0 25px #c9a84c88, 0 0 50px #c9a84c33" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
