
const title = 'Quang ND – Fullstack web developer'
const description = 'A little about myself and my work. If you are interested, contact me to know more'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },

      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      // { hid: 'og:image', property: 'og:image', content: DEFAULT_SUMMARY_IMG },
      { hid: 'og:description', property: 'og:description', content: description },

      { hid: 'twitter:title', name: 'twitter:title', content: title },
      // { hid: 'twitter:image', name: 'twitter:image', content: DEFAULT_SUMMARY_IMG },
      { hid: 'twitter:description', name: 'twitter:description', content: description }
      // { hid: 'twiiter:card', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap' }
    ]
  },

  generate: {
    routes: [
      '/project/unisoft-online-exam',
      '/project/manga-mutiny',
      '/project/octotree',
      '/project/octotree-pro',
      '/project/ny-real-estate'
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/fa',
    '@/plugins/transition',
    { src: '@/plugins/screenWidth', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  server: {
    port: 9000
  }
}
