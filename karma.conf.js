var webpackConf = require('./webpack.config.js')
delete webpackConf.entry
webpackConf.devtool = 'inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: ['./test/index.js'],
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
