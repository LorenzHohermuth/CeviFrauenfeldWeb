/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    
    extend: {
      colors: {
        'cevi':{
          white: '#ffffff',
          grayWhite: '#f2f2f2',
          gray: '#474747',
          blue: '#000080',
          red: '#EA1C20',
          whiteRed: '#E85658',
          black: '000000'
        },
      },
      fontSize:{
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontWeight: {
        'cbold': 649,
      },
      borderRadius: {
        '2xl': '1rem'
      },
    },
  },
  plugins: [],
}