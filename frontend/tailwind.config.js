/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        neonBlue: '#00f0ff',
        electricBlue: '#0372fa',
        darkBg: '#0a1020',
      },
      boxShadow: {
        neon: '0 0 16px 4px #00f0ff, 0 0 32px 8px #0372fa',
      },
      backgroundImage: {
        'electric-gradient': 'linear-gradient(135deg, #0a1020 0%, #0372fa 60%, #00f0ff 100%)',
      },
    },
  },
  plugins: [],
}
