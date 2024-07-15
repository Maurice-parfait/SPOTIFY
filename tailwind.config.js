/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily :{
        poppins : "Poppins"
      },

      gridTemplateColumns :{
        mains: "1.3fr 5fr"
      }
    },
  },
  plugins: [ require ( 'tailwind-scrollbar' )],
}

