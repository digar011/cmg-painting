import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Royal Blue
        'cmg-royal': '#0B3FA8',

        // Supporting Blues
        'cmg-blue': '#2E63C6',
        'cmg-light': '#D6E2F3',

        // Accent
        'cmg-taupe': '#B8AFA6',

        // Neutrals
        'cmg-white': '#FFFFFF',
        'cmg-off-white': '#FAFAFA',
        'cmg-charcoal': '#1F2937',
        'cmg-gray': '#6B7280',

        // Semantic aliases for easier theming
        'primary': '#0B3FA8',
        'primary-light': '#2E63C6',
        'accent': '#B8AFA6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      boxShadow: {
        'glass-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'glass-md': '0 2px 8px rgba(11, 63, 168, 0.08)',
        'glass-lg': '0 4px 12px rgba(11, 63, 168, 0.12)',
        'glass-xl': '0 8px 24px rgba(11, 63, 168, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
