/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95), translate(0,0)" },
          "100%": { opacity: "1", transform: "scale(1), translate(0,0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(1), translate(0,0)" },
          "100%": { opacity: "0", transform: "scale(0.95), translate(0,0)" },
        },
      },
      animation: {
        "rotateY-once": "rotateY 2s ease-in-out 1s forwards", // 2s delay, 2s duration, no repeat
        "fade-in": "fade-in 0.2s ease-out forwards",
        "fade-out": "fade-out 0.2s ease-in forwards",
      },
      screens: {
        xs: "360px",
        "2xl": "1600px",
      },
    },
  },
};
