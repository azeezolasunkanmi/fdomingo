/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212", // DarkGray
        primaryText: "#FFFFFF", // white
        secondaryText: "#BBBBBB", // (Light Gray)
        accent: "#FF5722", //deep orange
        accentSecondary: "#8C271E", //deep orange
        background: "#fafaf8",
        text: "#454543",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
      crimson: ["Crimson Text", "serif"],
    },
  },
  plugins: [],
};
