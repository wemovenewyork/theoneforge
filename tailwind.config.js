/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forge: {
          bg: '#0C0A09',
          surface: '#151210',
          surfaceAlt: '#1A1714',
          primary: '#F97316',
          secondary: '#F59E0B',
          highlight: '#FB923C',
          text: '#FAF9F7',
          textSec: '#A39E95',
          muted: '#6B655C',
          border: 'rgba(249, 115, 22, 0.15)',
          borderStrong: 'rgba(249, 115, 22, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
