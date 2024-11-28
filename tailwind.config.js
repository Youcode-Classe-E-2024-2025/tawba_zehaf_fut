/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/script.js',
    './css/input.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/illustration.jpg')"
      }
    },
  },
}
plugins: []
