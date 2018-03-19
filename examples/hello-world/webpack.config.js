const webpack = require('webpack')
// import { resolve } from 'path'

module.exports = {
  mode: 'production',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ]
  }
}
