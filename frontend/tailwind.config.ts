/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", defaultTheme.fontFamily.sans],
      },
      colors: {
        colorI: "#F9F5EB",
        colorII: "#D0BC7E",
        colorIII: "#E1E1D7",
        colorIV: "#EBEBEB",
        blackI: "#1C1C1C",
        white: "#FFFFFF"
      },
      backgroundImage: {
        headerImg: "url('/header-img.png')",
        plan: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('/plan.png')",
      },
    },
  },
  plugins: [],
};
