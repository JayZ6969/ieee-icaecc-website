/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'slant-left': 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
      }
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-slant-left': {
          'clip-path': 'polygon(0% 0, 100% 0, 100% 100%, 13% 100%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};