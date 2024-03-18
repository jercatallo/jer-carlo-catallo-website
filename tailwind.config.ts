import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/design-system/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': 'cpx', // Small screens (e.g., mobile phones)
      'md': '768px', // Medium screens (e.g., tablets)
      'lg': '1024px', // Large screens (e.g., small desktops)
      'xl': '1280px', // Extra large screens (e.g., large desktops)
      '2xl': '1536px', // Extra extra large screens
    },
    colors: {
      // Primary Colors
      ['primary-color']: '#0175FA',
      ['primary-color-2']: '#0064D6',
      ['primary-color-3']: '#0051AD',
      ['primary-color-4']: '#003E85',
      ['primary-color-5']: '#002B5C',
      accent: '#01f9fc',

      // Background Colors
      background: '#ffffff', // White
      surface: '#000000', // Black

      // Text Colors
      main: '#36454F', // Black
      ['main-light']: '#ffffff',
      light: '#ffffff', // White
      ['on-primary']: '#ffffff',
    },
    fontFamily: {
      // ['heading']: ['Montserrat', 'sans-serif'],
      // ['body']: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};

export default config;
