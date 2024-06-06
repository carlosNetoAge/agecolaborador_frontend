/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "medium": "10px",
        "large": "20px"
      },
      colors: {
        "age-orange": "#FF8B3D",
        "age-blue": "#53AEE2",
        "age-lightOrange": "#FFD8BE",
        "age-lightBlue": "#BAE6FF",
      }
    },
  },
  plugins: [],
}

