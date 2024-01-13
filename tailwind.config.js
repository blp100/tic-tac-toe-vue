/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-blue": "#31c3bd",
        "light-blue-hover": "#65e9e4",
        "light-yellow": "#f2b137",
        "light-yellow-hover": "#ffc860",
        "dark-navy": "#1a2a33",
        "semi-dark-navy": "#1f3641",
        silver: "#a8bfc9",
        "silver-hover": "#dbe8ed",
      },
    },
  },
  plugins: [],
};
