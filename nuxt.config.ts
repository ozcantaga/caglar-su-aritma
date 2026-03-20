// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr:true,
  nitro:{
preset:'static'
  },

  vite: {
   optimizeDeps: {
     include: [
       '@vue/devtools-core',
       '@vue/devtools-kit',
     ],
   },
 },

  // SEO & meta ayarları
app: {
    head: {
      title: 'Çağlar Su Arıtma | Saf Suyun Mimarı',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap' }
      ]
    },
    
  },

  // Nuxt devtools aktif
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['@/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})