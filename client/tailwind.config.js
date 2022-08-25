/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}","./public/index.css"],
  theme: {
    extend: {},
  },
  plugins: [],
   theme: {
        container: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            }
        }
    }
}
