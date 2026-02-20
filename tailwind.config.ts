import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0A0A0A',
        surfaceHover: '#111111',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0A0',
        textTertiary: '#666666',
        accent: '#FF3366',
        accentSecondary: '#6366F1',
        border: '#1A1A1A',
        borderHover: '#2A2A2A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
