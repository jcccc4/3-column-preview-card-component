/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "orange-cd": "#E28625",
        "blue-cd": "#006971",
        "green-cd": "#004140",
      },
      width: {
        card: "327px",
        "card-dsk":"307px"
      },
      height: {
        card: "442px",
        "card-dsk":"500px"
      },
      fontSize: {
        title: ["40px", "47.88px"],
        des: ["15px", "25px"],
      },
      fontFamily: {
        bsd: ["Big Shoulders Display", "cursive"],
        ld: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
