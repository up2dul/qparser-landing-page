import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      green: '#A8FF35',
      'dark-50': '#585858',
      'dark-100': '#323232',
      'dark-200': '#2E2E2E',
      'dark-300': '#181818',
      'dark-400': '#050505',
    },
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
} satisfies Config;
