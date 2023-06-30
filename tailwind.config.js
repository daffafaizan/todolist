/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        "after-midnight": "#30343f",
      },
      screens: {
        xxxs: { min: "100px", max: "399px" },
        xxs: { min: "400px", max: "575px" },
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px" },
      },
    },
  },
  plugins: [],
};
