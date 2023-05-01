/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgb(161 161 170)",
        
        'light-white': 'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [],
}

