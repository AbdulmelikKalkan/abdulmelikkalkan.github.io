/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: { max: '639px' },
      bar: {min: '639px'}
    },
    extend: {
      colors: {
        dbg: '#010409',
        dsbg: '#0D1117',
        sbg: '#f6f8fa',
        hdsbg: '#161b22'
      }
    }
  },
  plugins: [],
  important: true
}
