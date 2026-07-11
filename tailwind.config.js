/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0F172A',
        primary: '#A78BFA',
        secondary: '#2DD4BF',
        accent: '#22D3EE',
        card: '#1E293B',
        ink: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(124, 58, 237, 0.26)',
      },
    },
  },
  plugins: [],
};
