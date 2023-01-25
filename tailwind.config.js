/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', '/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        golden: {
          "primary": "#131111",
          "secondary": "#423e3d",
          "accent": "#94440e",
          "neutral": "#cb9a4b",
          "base-100": "#1c272a",
          "info": "#f7d98a",
          "success": "#8b8d52",
          "warning": "#FF3404",
          "error": "#F76050",
        }
      }
    ]
  }
}
