// Configuration for your app.
const parsed = require('dotenv').load()
const envVars = parsed['parsed']
module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'vuelidate',
      'db',
      'i18n',
      'axios',
      'vuex-router-sync',
      'bootstrap'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'fontawesome'
    ],
    supportIE: false,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      env: {
        SC2_APP: envVars['SC2_APP'],
        SC2_CALLBACK: envVars['SC2_CALLBACK']
      },
      scopeHoisting: true,
      // vueRouterMode: 'hash',
      vueRouterMode: 'history',
      // publicPath: '',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })
        cfg.resolve.alias['lodash'] = 'lodash-es'
      }
    },
    devServer: {
      // https: true,
      port: 8080,
      open: false // no auto browser.
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      iconSet: 'fontawesome',
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutFooter',
        'QTabs',
        'QTab',
        'QDatetimePicker',
        'QDatetime',
        'QDatetime',
        'QTabPane',
        'QRouteTab',
        'QLayoutDrawer',
        'QChip',
        'QBtnDropdown',
        'QList',
        'QSelect',
        'QListHeader',
        'QItem',
        'QPopover',
        'QInput',
        'QPullToRefresh',
        'QField',
        'QFab',
        'QFabAction',
        'QTooltip',
        'QPageSticky',
        'QScrollArea',
        'QInfiniteScroll',
        'QSpinnerDots',
        'QItemMain',
        'QAjaxBar',
        'QItemSeparator',
        'QItemSide',
        'QItemTile',
        'QPageContainer',
        'QPage',
        'QSearch',
        'QToolbar',
        'QToolbarTitle',
        'QSlideTransition',
        'QBtn',
        'QScrollArea',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QBtnToggle'
      ],
      directives: [
        'Ripple',
        'CloseOverlay'
      ],
      // Quasar plugins
      plugins: [
        'Dialog',
        'Notify',
        'AddressbarColor'
      ]
    },
    animations: 'all', //
    // animations: [],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#673AB7',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      id: 'io.utopian.app'
    },
    electron: {
      extendWebpack (cfg) { },
      packager: { }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.2'
  }
}
