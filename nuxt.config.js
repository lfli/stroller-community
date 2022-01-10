export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '童车社群',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '童车社群' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/video.js@7.10.2/dist/video-js.min.css' }
    ],
    script: [
      { src: 'https://unpkg.com/video.js@7.10.2/dist/video.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    { src: '@/plugins/rem.js', ssr: false },
    { src: '@/plugins/video.js', ssr: false },
    { src: '@/plugins/vue-socials.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  router: {
    middleware: 'i18n'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'http://47.99.122.43:3000',
      pathRewrite: {
        '/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 16, //（数字，函数） 根元素字体大小
          unitPrecision: 5, //（数字）允许REM单位增长的十进制数字
          replace: true, // （布尔值）替换包含rems的规则，而不添加后备
          mediaQuery: true, // （布尔值）允许在媒体查询中转换px
          minPixelValue: 0, // （数字）设置要替换的最小像素值
          selectorBlackList: [], // 忽略转换正则匹配项
          propList: ['*'], // 可以从px转换为rem的属性，匹配正则
          exclude: /node_modules/ // （字符串，正则表达式，函数）要忽略并保留为px的文件路径
        }
      }
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(m4a|ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }
  }
}
