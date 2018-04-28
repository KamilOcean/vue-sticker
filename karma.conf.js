var webpackConf = require('./webpack.config.js')
delete webpackConf.entry
webpackConf.devtool = 'inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'chai'],
    reporters: ['spec'],
    files: ['./test/index.js'],
    colors: true,
    autoWatch: false,
    singleRun: true,
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
