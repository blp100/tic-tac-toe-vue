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
      fontSize: {
        "heading-l": [
          "2.5rem",
          {
            letterSpacing: "2.5px",
            fontWeight: "700",
          },
        ],
        "heading-m": [
          "1.5rem",
          {
            letterSpacing: "1.5px",
            fontWeight: "700",
          },
        ],
        "heading-s": [
          "1.25rem",
          {
            letterSpacing: "1.25px",
            fontWeight: "700",
          },
        ],
        "heading-xs": [
          "1rem",
          {
            letterSpacing: "1px",
            fontWeight: "700",
          },
        ],
        "body": [
          "0.875rem",
          {
            letterSpacing: "0.875px",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
