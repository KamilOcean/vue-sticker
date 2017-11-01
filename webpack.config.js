var path = require('path')
var merge = require('webpack-merge')

var config = {
  module: {
    rules: [
      {
          test: /\.(js|vue)$/,
          enforce: 'pre',
          use: [
              'eslint-loader'
          ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: './dist/vue-sticker.min.js',
      libraryTarget: 'window',
      library: 'VueSticker'
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/VueSticker.vue'),
    output: {
      filename: './dist/vue-sticker.js',
      libraryTarget: 'umd',
      library: 'vue-sticker',
      umdNamedDefine: true
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/demo/main.js'),
    output: {
      path: path.resolve(__dirname, './demo'),
      publicPath: '/demo/',
      filename: 'main.js'
    }
  })
]
