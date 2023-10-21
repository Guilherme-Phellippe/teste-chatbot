/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_dark: "#0c1317",
        blue_medium_dark: "#111b21",
        blue_light_dark: "#2a3942",
        green_main: "#008069",
        green_light: "#00a884"
      }
    },
  },
  plugins: [],
}

