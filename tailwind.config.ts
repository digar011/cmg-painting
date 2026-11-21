import type { Config } from "tailwindcss";

/**
 * CMG design tokens (2026-11 redesign).
 * Palette from the client's logo: CMG royal blue on a warm paper ground,
 * near-black navy ink. Legacy `cmg-*` names are kept so every page re-themes
 * from one place; new names (paper, sand, ink) are preferred in new code.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        'cmg-royal': '#0B3FA8', // logo blue: actions, links, accents
        'cmg-blue': '#2E63C6',
        'cmg-sky': '#9DB6EA', // accent on dark grounds (7.9:1 on ink)
        'cmg-light': '#D9E1F0',

        // Grounds
        'cmg-paper': '#F4F0E8', // page ground
        'cmg-sand': '#EAE4D8', // surface band
        'cmg-white': '#FFFFFF',
        'cmg-off-white': '#F4F0E8', // legacy alias of paper

        // Ink
        'cmg-ink': '#101828',
        'cmg-ink-2': '#1D2434', // raised surface on dark
        'cmg-charcoal': '#101828', // legacy alias of ink
        'cmg-gray': '#575B66', // muted text, 6.1:1 on paper
        'cmg-taupe': '#C9C1B6', // muted text on ink, 9.9:1
        'cmg-line': '#D8D0C2', // hairlines on paper

        primary: '#0B3FA8',
        'primary-light': '#2E63C6',
        accent: '#C9C1B6',
      },
      fontFamily: {
        sans: ['var(--font-text)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
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
      borderRadius: {
        frame: '14px',
      },
      boxShadow: {
        // Kept for existing pages; flat hairlines are preferred in new code.
        'glass-sm': '0 1px 2px rgba(16, 24, 40, 0.05)',
        'glass-md': '0 1px 3px rgba(16, 24, 40, 0.08)',
        'glass-lg': '0 2px 8px rgba(16, 24, 40, 0.08)',
        'glass-xl': '0 6px 20px rgba(16, 24, 40, 0.10)',
      },
      maxWidth: {
        wrap: '1200px',
      },
      keyframes: {
        'develop': {
          '0%': { filter: 'grayscale(1) contrast(0.55) brightness(1.35)', transform: 'scale(1.04)' },
          '45%': { filter: 'grayscale(1) contrast(1.05) brightness(1)' },
          '100%': { filter: 'none', transform: 'scale(1)' },
        },
        'enter': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'breathe': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        develop: 'develop 1.6s cubic-bezier(.2,.7,.2,1) both',
        enter: 'enter .7s cubic-bezier(.2,.7,.2,1) both',
        breathe: 'breathe 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
