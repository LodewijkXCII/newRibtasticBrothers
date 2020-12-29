export default {
  // mode: 'universal',
  target: 'server',

  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'The Ribtastic Brothers - De lekkerste spareribs!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'spareribs, catering, foodtruck, bbq, BBQ, barbeque, barbecue, delivery',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'De beste spareribs van de barbecue voor thuis of een festival. Catering met de speciale BBQ-bakfiets mogelijk in all-in of eigen keuze menu!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700;900&display=swap',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        type: 'text/css',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1e1e1e' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/config.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vuex-persist',
      mode: 'client',
    },
    { src: '~plugins/ga.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Simple usage
    '@nuxtjs/moment',

    // With options
    [
      '@nuxtjs/moment',
      {
        /* module options */
      },
    ],
  ],

  moment: {
    locales: ['nl'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  styleResources: {
    scss: ['./assets/css/*.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
