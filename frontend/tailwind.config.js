/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    xs: "320px",
    small: "350px",
    phone: "400px",
    "phablet-col": "576px",
    sm: "640px",
    "md-min": "768px",
    "md-min1": "770px",
    md: "920px",
    lg: "1024px",
    xl: "1280px",
    xl2: "1366px",
    "2xl": "1536px",
    "3xl": "1920px",
    "4xl": "2560px",
    "5xl": "1441px",
    "max-3xl": { max: "1919px" },
    "max-xl3": { max: "1440px" },
    "max-xl2": { max: "1365px" },
    "max-xl": { max: "1279px" },
    "max-lg": { max: "1023px" },
    "max-md": { max: "769px" },
    "max-md1": { max: "919px" },
    "max-sm": { max: "639px" },
    "max-xs": { max: "360px" },
    "max-accout-card": {max: "404px"},
    "max-phablet-col": { max: "575px" },
    "max-phone-wide": { max: "480px" },
    "login-card": { max: "480px" },
  },
  plugins: [],
}