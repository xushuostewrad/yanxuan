module.exports = {
	publicPath:'/wangyi/',
  devServer: {
    proxy: {
      '/wangyi': {
        target: 'http://m.wangyi.com',
        pathRewrite: {
          '^/wangyi': ''
        }
      }
    }
  }
}
