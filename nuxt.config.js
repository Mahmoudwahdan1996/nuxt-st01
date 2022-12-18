export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss","@/assets/fonts/stylesheet.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"@/plugins/vuetify.js"  },
  ],
  vuetify: {
    treeShake: true,
    theme: {
      dark: false,
      light: true,
    },
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/vuetify",

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],

 
  // Build Configuration: https://go.nuxtjs.dev/config-build
 build: {
    // You can extend webpack config here
    // config.resolve.alias['~'] = './store_submodules'
    // Run ESLint on save
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/,
        });
      }
    },
  },
}
