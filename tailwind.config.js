/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      colors: {
        main: "#131313",
        popup: "rgb(26,26,26)",
        primary: "#f97187",
        "black-dark": "rgb(26,26,26)",
        "grey-light": "rgb(225,225,225)",
        "grey-dark": "rgb(40,40,40)",
        "black-light": "rgb(54,54,54)",
        "pink-dark": "rgb(231,82,117)",
        "pink-default": "#f97187",
        "black-medium": "rgb(37,37,37)",
      },
      fontSize: {
        xxs: "12px",
        xs: "13px",
        xl: "22px",
        "3xl": ["32px", "42px"],
        md: "24px",
      },
      backgroundImage: {
        g1: "linear-gradient(0deg, #131313 0%, #131313 100%)",
        g2: "linear-gradient(95deg, #da5151 0.95%, #c55eb4 34.13%, #ac70c9 75.24%, #64ca62 98.96%)",
        g3: "linear-gradient(0deg, #000, #0000 80%)",
        g4: "linear-gradient(268deg, #fc768a -14.8%, #e65073 102.08%)",
        g5: "linear-gradient(#0000, #0e0e0eb3)",
        g6: "linear-gradient(270deg, #1d1c1cdb 20%, #1a1919c4)",
      },
    },
  },
  plugins: [],
};
