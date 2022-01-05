module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:false,
  theme: {
    extend: {
      height: {
        'res_screen': '60vh',
      },
      colors:{
        amazon_blue:{
          light:"#232F3E",
          DEFAULT:"#131921",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
