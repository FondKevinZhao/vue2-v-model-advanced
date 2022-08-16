module.exports = {
  lintOnSave: false,
  devServer: {
    // proxy: 'https://www.qyer.com'
    proxy: {
      '/api': {
        target: 'https://www.qyer.com', // 相当于：https://www.qyer.com/api，咱们不需要后面的/api
        changeOrigin: true,
        ws: true, // https
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}