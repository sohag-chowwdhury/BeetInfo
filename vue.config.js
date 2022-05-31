const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
  lintOnSave: false,
  publicPath: '/',
  runtimeCompiler: true,
  devServer: {
    host: 'localhost'
  },
  pwa: {
    name: 'Betbeetle',
    short_name: 'Betbeetle',
    categories: ['betting', 'crypto', 'games', 'defi'],
    display: 'standalone',
    start_url: './',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js',
        exclude: [
            /\.htaccess$/
        ]
      }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/'],
      useRenderEvent: false,
      headless: true,
      onlyProduction: false,
      maxConcurrentRoutes: 4,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace(/<link rel="stylesheet" type="text\/css" (.*?)>/g, '<link rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" $1>')
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      },
      minify: {
        collapseWhitespace: true
      }
    }
  },
  configureWebpack: {
    devtool: '',
    plugins: [
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|json|txt|html|ico|svg)$/,
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
        new EncodingPlugin({
            encoding: 'utf8'
        }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 10000,
        maxSize: 200000,
      }
    }
  }
}
