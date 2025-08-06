/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ssdblue': {
          50:  '#eefbff',
          100: '#dcf7ff',
          200: '#b2f1ff',
          300: '#6de9ff',
          400: '#20deff',
          500: '#00caff',
          600: '#00a4df',
          700: '#0082b4',
          800: '#006e95',
          900: '#005a7a',
          950: '#00415c',
        },
        'ssdred': '#CD3700',
      },
    },
  },
  plugins: [],
}

