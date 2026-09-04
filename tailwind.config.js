/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beast: {
          50: '#fff1f2',
          100: '#ffe4e6',
          400: '#ff3355',
          500: '#FF0033',
          600: '#E50914',
          700: '#b91c1c',
          900: '#990021',
          crimson: '#FF0033',
          red: '#E50914',
        },
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#141414',
          700: '#1f1f1f',
          600: '#2b2b2b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -3px rgba(255, 0, 51, 0.45)',
        'glow-red': '0 0 25px -3px rgba(229, 9, 20, 0.45)',
        'glow-dark': '0 0 25px -3px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
