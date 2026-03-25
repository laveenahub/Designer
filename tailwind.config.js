/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        text: '#f5f5f5',
        muted: '#888888',
        stroke: '#1f1f1f',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
