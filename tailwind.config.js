/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        NunitoSans: ['Nunito Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Gemito: ['Geom']
      }
    },
  },
  plugins: [],
}
