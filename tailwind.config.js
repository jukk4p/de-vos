/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Design System: Industrial Luxury
        background: '#141313',
        surface: {
          DEFAULT: '#141313',
          bright: '#3a3939',
          container: '#201f1f',
          lowest: '#0e0e0e',
          low: '#1c1b1b',
        },
        primary: '#c9c6c5', // Metallic Gray
        secondary: '#c8c6c5',
        accent: '#D1A15E',   // Brushed Brass / Industrial Gold (AAA)
        outline: '#8e9192',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-tight': '-0.02em',
        'industrial': '0.1em',
      }
    },
  },
  plugins: [],
}
