/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#070706',
        graphite: '#11100d',
        paper: '#f3eadc',
        muted: '#a69a88',
        brass: '#d6aa5b',
        clay: '#c86f4a',
        sage: '#9dad8a',
      },
      boxShadow: {
        editorial: '0 28px 90px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'noise-texture':
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.08) 1px, transparent 0)",
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        ticker: 'ticker 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(22px, -18px, 0) rotate(8deg)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
