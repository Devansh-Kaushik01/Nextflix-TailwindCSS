/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens:{
      //   'sm':'375px'
      // },
      width :{
        '900':'900px',
        '1170':'1170px',
      },
      height:{
        '500':'50vh',
        '600':'60vh',
        '800':'80vh',
        '900':'90vh',
        '1200':'120vh',
      }
    },
  },
  plugins: [],
}