/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060709',
          900: '#090a0f',
          850: '#0e1118',
          800: '#131822',
          700: '#1b2230',
          600: '#283347',
          500: '#475569',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f8fafc',
        },
        brand: {
          green: '#10b981',
          emerald: '#059669',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.2))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(16, 185, 129, 0.4))' },
        }
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 70%)",
      }
    },
  },
  plugins: [],
}
