const webpack = require('webpack')
const path = require('path')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, '../utils/prop-type-errors.js'),
    'react-hot-loader/patch',
    path.resolve(process.cwd(), './index.js')
  ],
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(process.cwd(), 'public')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@auth0/babel-preset-cosmos/dev']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(['*.js'], { root: path.resolve(process.cwd(), 'public') }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
  ],
  node: {
    fs: 'empty'
  }
}
