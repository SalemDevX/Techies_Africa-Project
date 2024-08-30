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
      dark: "#101010",
      dark2: "#263238",
      light: "#999999",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
