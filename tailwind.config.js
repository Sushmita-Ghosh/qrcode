/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(218, 44%, 22%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "light-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
