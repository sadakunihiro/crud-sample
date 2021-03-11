export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // server side rendering
  ssr: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.VUE_APP_API_URL
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}