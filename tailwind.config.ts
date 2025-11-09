import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#4B5563'
        }
      }
    }
  },
  plugins: [typography]
};

export default config;
