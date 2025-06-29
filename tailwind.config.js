/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'roboto': ['Roboto Mono', 'monospace'],
      },
      colors: {
        'accent': '#8b5cf6', // purple-500 as primary accent
        'secondary': '#a855f7', // purple-400 as secondary
        'tertiary': '#c084fc', // purple-300 as tertiary
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.8s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
