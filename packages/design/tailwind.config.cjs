/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          0: "#ffffff",
          50: "#e7e8e9",
          100: "#cfd1d2",
          200: "#b7babc",
          300: "#9fa3a6",
          400: "#878b8f",
          500: "#707479",
          600: "#585d63",
          700: "#40464d",
          800: "#282f36",
          900: "#101820"
        },
        primary: {
          50: "#d6e2f6",
          100: "#c1d4f1",
          200: "#99b7e8",
          300: "#84a9e3",
          400: "#5b8cda",
          500: "#326fd1",
          600: "#2859a7",
          700: "#1e437d",
          800: "#193868",
          900: "#142c54"
        }
      }
    },
  },
}