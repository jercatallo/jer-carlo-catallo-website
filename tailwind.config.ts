import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': '640px',      // Small screens (e.g., mobile phones)
      'md': '768px',      // Medium screens (e.g., tablets)
      'lg': '1024px',     // Large screens (e.g., small desktops)
      'xl': '1280px',     // Extra large screens (e.g., large desktops)
      '2xl': '1536px',    // Extra extra large screens
    },
    colors: {
      // Primary Colors
      primaryColor: '#F3CB14', 
      secondaryColor: '#4C5C54',

      // Background Colors
      primaryBackgroundColor: '#ffffff', // White
      secondaryBackgroundColor: '#f5f5f5', // Light Gray

      // Text Colors
      primaryText: '#4F4F4F', // Dark Gray
      secondaryText: '#777', // Light Gray

      // Text on Background Colors (for readability)  
      textOnPrimaryBackground: '#ffffff',
      textOnSecondaryBackground: '#ffffff',

      // Accent Colors
      accentColor: '#F2E413',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [],
}
export default config
