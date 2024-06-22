import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          primary: colors.blue[500],
          secondary: colors.cyan[500],
          foreground: colors.black,
        },
      },
    },
  },
  plugins: [],
};
