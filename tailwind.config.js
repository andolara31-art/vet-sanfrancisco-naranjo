/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vet: {
          green: '#2E7D32',
          'green-dark': '#1B5E20',
          'green-light': '#4CAF50',
          white: '#FFFFFF',
          gray: '#F5F5F0',
          blue: '#1565C0',
          'blue-dark': '#0D47A1',
          beige: '#FFF8E7',
          text: '#222222',
          'text-soft': '#6a6a6a',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: 'rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px',
        lift: 'rgba(0,0,0,0.08) 0px 4px 12px',
        soft: 'rgba(46,125,50,0.12) 0px 8px 24px',
      },
      borderRadius: {
        card: '20px',
        hero: '32px',
      },
    },
  },
  plugins: [],
}
