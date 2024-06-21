/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        ipadmini: {min:'768px', max:'819px'},
  
        ipadair: {min:'820px', max:'1023px'},
  
        ipadpro: {min:'1024px', max:'1279px'},
  
        laptop: {min:'1280px'},
      },

      height:{
        fullest:"100vh"
      },

      width:{
        fullest:"100%"
      }
    },
  },
  plugins: [],
}