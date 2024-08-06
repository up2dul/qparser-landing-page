import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      green: '#A8FF35',
      grey: '#D9D9D9',
      'dark-50': '#7B7B7B',
      'dark-100': '#585858',
      'dark-200': '#323232',
      'dark-300': '#2E2E2E',
      'dark-400': '#181818',
      'dark-500': '#050505',
    },
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      spacing: {
        '25': '6.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
