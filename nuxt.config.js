module.exports = {
  env: {
    root: process.env.ROOT || 'http://localhost:3030'
  },
  head: {
    title: 'Philip Caleja',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400|Merriweather+Sans:300,300i,400' }
    ]
  },

  css: [
    'normalize.css'
  ],

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~/plugins/globals', ssr: false },
    { src: '~/plugins/screen', ssr: false }
  ],

  modules: [
    '@nuxtjs/google-analytics',
    '~/modules/eslint',
    '~/modules/favicon'
  ],

  'google-analytics': {
    id: 'UA-40892343-1'
  }
}
