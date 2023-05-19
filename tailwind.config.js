/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryWhite: "#FFFFFF",
      darkPurple: "#48319D",
      neonPurple: "#8015A7",
      deepPurple: "#613690",
      red: "#ED695E",
      yellow: "#F4BF4F",
      green: "#61C554",
      purple: "#8322FF",
      blue: "#22D7FF",
      dark01: "#2E335A",
      dark02: "#454B79",
      dark03: "#0C1033",
      dark04: "#1D234D",
    },
    fontFamily: {
      poppins: "var(--font-poppins)",
    },
    extend: {},
  },
  plugins: [],
};
