const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@auth0/babel-preset-cosmos']
        }
      }
    ]
  }
}
