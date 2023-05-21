/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rye: ['"Rye"'],
        playfair: ["Playfair Display SC"],
      },
      backgroundImage: {
        hero: "url('/images/bike.jpg')",
        brick: "url('/images/brick.jpg')",
      },
    },
  },
  plugins: [],
};
