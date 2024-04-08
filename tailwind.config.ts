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
        headerImgMobile: "url('/header-mobile.png')",
        plan: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('/plan.png')",
        injury: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('/injury.png')",
        nutrition: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('/nutrition.png')",
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2.5s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'ping-slow': 'ping 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
