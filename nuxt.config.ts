import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: false,
  target: 'static',
  app: {
    baseURL: '/launcher-content/'
  },
  
  nitro: {
    output: {
      publicDir: 'telega-site'
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: {
    global: true
  }
})
