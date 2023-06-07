/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // '1': "linear-gradient(167.96deg, #0E0E0E 0%, #141531 100%)",
      },
      boxShadow: {
        "common" : `0px 8px 40px rgba(0, 0, 0, 0.12)`,
        "blue_primary" : `0px 0px 10px #3239F4, 0px 4px 8px rgba(0, 0, 0, 0.1)`,
        "white" : `0px 0px 10px #FFFFFF`
      },
      colors: {
        "1": "#050616",
        "blue_dark": "#0E0E0E",
        "blue_primary": "#3239F4",
        "blue_light": "#2ECCDE",
        "gray_1": "#202637",
        "gray_1/35": "rgba(22, 40, 68, .35)",
        "gray_2": "#555D72",
        "gray_3": "#A4AABB",
        "red": "#F17878",
        "green": "#5DB771",
        "yellow": "#C6AA52",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
