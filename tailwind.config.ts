import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.ts'
  ],
  safelist: [
    'bg-white/10',
    'border-white/10',
    'text-white/80',
    'shadow-aero',
    'backdrop-blur-sm',
    'bg-aero-bg',
    'text-aero-text',
  ],
  extend: {
    colors: {
      'aero-glass': '#e3f0ff33',
      'aero-border': '#ffffff22',
      'aero-text': '#e3f0ff',
      'aero-glow': '#8ec5fc',
    },
    boxShadow: {
      aero: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
    backdropBlur: {
      sm: '4px',
    },
  },
  theme: {
    extend: {
      colors: {
        win95: {
          bg: '#C0C0C0',
          border: '#808080',
          shadow: '#FFFFFF',
          highlight: '#000000',
          button: '#E0E0E0',
          buttonBorder: '#A0A0A0'
        }
      },
      fontFamily: {
        sans: ['"Segoe UI"', '"Tahoma"', '"Geneva"', 'sans-serif'],
      },
      boxShadow: {
        'inset-95': 'inset 2px 2px #fff, inset -2px -2px #808080',
        '95': '2px 2px #808080, -2px -2px #fff'
      },
      borderRadius: {
        none: '0px',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
})
