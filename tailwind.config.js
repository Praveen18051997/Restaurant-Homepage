/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2A54',
          'red-hover': '#e0244b',
          pink: '#FF2A6D',
          yellow: '#FFC72C',
          'yellow-hover': '#f5b91b',
          green: '#22C55E',
          dark: '#18181B',
          light: '#FFFFFF',
          bg: '#FAFAFA',
          card: '#FFFFFF',
          slate: '#F4F4F5',
          cream: '#F8F6F0',
        }
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 10px 25px -5px rgba(255, 199, 44, 0.4)',
        'red-glow': '0 10px 25px -5px rgba(255, 42, 84, 0.3)',
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
