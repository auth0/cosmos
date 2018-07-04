const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', path.resolve(process.cwd(), './index.js')],
  output: {
    path: path.resolve(process.cwd(), 'public')
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'public')
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
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
