import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
