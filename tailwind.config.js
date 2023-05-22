/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "my-color": "#3A7A84",
        "my-color1": "#F2F0EC"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

