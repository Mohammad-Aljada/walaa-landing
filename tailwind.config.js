/** @type {import('tailwindcss').Config} (Tailwind 3.4+) */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F5C',
        secondary: '#FFE45C',
        'secondary-90': '#1a3b9d',
        tertiary: '#FAF7EE',
        heading: '#030000',
        body: '#2c2c2c',
      },
      fontFamily: {
        // add "thmanyah sans" via @font-face (public/fonts) — Tajawal is the fallback
        sans: ['"thmanyah sans"', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        brand: 'linear-gradient(120deg, #0B1F5C 8%, #1a3b9d 54%, #2b59e4 92%)',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
        pop: { from: { opacity: 0, transform: 'scale(.85)' }, to: { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        twinkle: { '0%,100%': { opacity: 1, transform: 'scale(1) rotate(0)' }, '50%': { opacity: 0.6, transform: 'scale(1.2) rotate(15deg)' } },
        blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(20px,-16px) scale(1.12)' } },
        wave: { '0%,60%,100%': { transform: 'rotate(0)' }, '10%,30%': { transform: 'rotate(16deg)' }, '20%,40%': { transform: 'rotate(-8deg)' }, '50%': { transform: 'rotate(10deg)' } },
      },
      animation: {
        'fade-up': 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both',
        pop: 'pop .9s cubic-bezier(.2,.8,.2,1) .1s both',
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 2.6s ease-in-out infinite',
        blob: 'blob 9s ease-in-out infinite',
        wave: 'wave 2.4s ease-in-out 1.2s infinite',
      },
    },
  },
  plugins: [],
}
