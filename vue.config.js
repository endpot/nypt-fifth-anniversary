const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'url',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }

}
