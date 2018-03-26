const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: {
    'just-react': './just-react.js',
    'with-cosmos': './with-cosmos.js',
    'with-part-cosmos': './with-part-cosmos.js',
    'with-styled': './with-styled.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['auth0-cosmos/babel']
        }
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()]
}
