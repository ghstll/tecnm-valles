/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        principalText :{
          '0%' :{
            transform : 'translateY(100%)',
          },
          '100%' : {transform : 'translateY(0)',

          }
        },
        slidein : {
          '0%' :{
            transform : 'translateY(100%)',
            opacity : '0'
          },
          '100%' : {transform : 'translateY(0)',
            opacity : '1'

          }
        },
        appear : {
          '0%' :{
            opacity : '0'
          },
          '100%' : {
            opacity : '1'

          }
        }
      },
      fontFamily :{
        'spectral' : ['Spectral','serif'],
      }
    },
  },
  plugins: [],
}