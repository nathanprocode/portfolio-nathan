/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Le nouveau bleu électrique
        "accent-blue": "#0b25e9",
        // Fond clair
        "light-bg": "#f8fafc", // slate-50
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
