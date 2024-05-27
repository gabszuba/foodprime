/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gabarito: ["Gabarito", "sans-serif"],
      },
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--color-text)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
