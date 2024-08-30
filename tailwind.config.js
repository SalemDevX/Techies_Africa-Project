/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
    colors: {
      primary: "#5846fb",
      secondary: "#A24EEC",
      dark: "#000000",
      dark2: "#17181A",
      light: "#999999",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
// #263238