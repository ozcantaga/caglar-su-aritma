/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' anahtarını değiştirerek varsayılan fontu setliyoruz
        sans: ['"SeninFontAdin"', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'], // Özel başlık sınıfı
      },
    },
  },
  plugins: [],
}

