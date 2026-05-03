/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Slightly darker for premium feel
        blue: {
          50: '#fdf3f9',
          100: '#fce5f2',
          200: '#facce3',
          300: '#f6a4cc',
          400: '#f06eaf',
          500: '#e84594', // Main bright accent
          600: '#d52474',
          700: '#b8155d',
          800: '#98144f',
          900: '#3A1930', // The user's exact uploaded color
          950: '#230b1b',
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { filter: 'brightness(1) blur(0px)' },
          '100%': { filter: 'brightness(1.2) blur(2px)' },
        }
      }
    },
  },
  plugins: [],
}

