var webpackConf = require('./webpack.config.js')
delete webpackConf.entry
webpackConf.devtool = 'inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: ['./test/index.js'],
    colors: true,
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
