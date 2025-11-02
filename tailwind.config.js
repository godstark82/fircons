/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',          // Page background white
        foreground: '#1a1a2e',          // Dark navy text color
        primary: '#d0224a',             // Crimson red for brand primary
        secondary: '#4a4a87',           // Muted blue for secondary highlights
        gray: {
          light: '#e5e5e5',             // Light grey backgrounds
          medium: '#a3a3a3',            // Mid gray text and borders
          dark: '#4a4a4a',              // Dark gray text
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
