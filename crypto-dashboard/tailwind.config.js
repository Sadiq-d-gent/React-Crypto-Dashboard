/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        web3: {
          bg: '#0f0f3f',            // Rich dark navy background
          card: '#1e1e3f',          // Card/dark surface
          accent: '#a29bfe',        // Neon purple-blue
          text: '#f4f4f4',          // Main text
          subtext: '#9fa6b2',       // Secondary muted text
          border: '#2d2d5a',        // Subtle border
          highlight: '#fce303',     // Bright yellow
        }
      }
    },
  },
  plugins: [
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
}

