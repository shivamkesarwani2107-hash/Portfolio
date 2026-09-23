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
          950: '#0b0f19',
          900: '#111827',
          850: '#172033',
          800: '#1f293d',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f8fafc',
        },
        light: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#0f172a',
        },
        brand: {
          green: '#10b981',
          emerald: '#059669',
          blue: '#2563eb',
          cyan: '#0891b2',
          indigo: '#4f46e5',
          purple: '#7c3aed',
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
        'grid-pattern': "radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08), transparent 70%)",
      }
    },
  },
  plugins: [],
}

