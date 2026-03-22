// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  nitro: {
    preset: 'static'
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },

app: {
    head: {
      title: 'Pazarcık Çağlar Su Arıtma | En İyi Su Arıtma Cihazları ve Servisi',
      htmlAttrs: {
        lang: 'tr'
      },
      meta: [
        { name: 'google-site-verification', content: 'google-site-verification=FK59ISLA9p1KN26s3n73Ooyac5g0hWbIgbEJZPDE6Lc' }
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pazarcık Çağlar Su Arıtma: Pazarcık ve Kahramanmaraş bölgesinde kaliteli su arıtma cihazları, filtre değişimi ve teknik servis hizmetleri için hemen ulaşın.' },
        { name: 'keywords', content: 'pazarcık su arıtma, çağlar su arıtma, pazarcık su arıtma cihazı, filtre değişimi pazarcık, su arıtma servisi' },
        // Sosyal Medya Paylaşım Görselleri
        { property: 'og:title', content: 'Pazarcık Çağlar Su Arıtma' },
        { property: 'og:image', content: 'https://pazarciksuaritma.com/images/hero.png' },
        { property: 'og:url', content: 'https://pazarciksuaritma.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pazarcık Çağlar Su Arıtma",
            "image": "https://pazarciksuaritma.com/images/hero.png",
            "@id": "https://pazarciksuaritma.com",
            "url": "https://pazarciksuaritma.com",
            "telephone": "+905536032090",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bağdınısağır Mah. 1061 SK. Dogaka Çarşısı",
              "addressLocality": "Pazarcık",
              "addressRegion": "Kahramanmaraş",
              "postalCode": "46700",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.4851,
              "longitude": 37.2952
            },
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Su Arıtma Cihazları",
                "url": "https://pazarciksuaritma.com/products"
              },
              {
                "@type": "WebPage",
                "name": "Musluk Modelleri",
                "url": "https://pazarciksuaritma.com/products?category=musluk"
              },
              {
                "@type": "WebPage",
                "name": "İletişim",
                "url": "https://pazarciksuaritma.com/contact"
              }
            ]
          })
        } as any
      ]
    }
  },

  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
