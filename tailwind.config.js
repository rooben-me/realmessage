/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-bg": "#FAFAFA",
        electricViolet: {
          DEFAULT: "#703EFE",
          50: "#F7F5FF",
          100: "#E8E0FF",
          200: "#CAB8FF",
          300: "#AC8FFE",
          400: "#8E67FE",
          500: "#703EFE",
          600: "#4706FE",
          700: "#3601CB",
          800: "#270193",
          900: "#18005B",
        },
        tamarind: {
          DEFAULT: "#1C0B19",
          50: "#DCA6D2",
          100: "#D697CB",
          200: "#CB7ABC",
          300: "#BF5DAE",
          400: "#AE459C",
          500: "#913982",
          600: "#742E67",
          700: "#57224D",
          800: "#391733",
          900: "#1C0B19",
        },
      },
    },
  },
  plugins: [],
};
