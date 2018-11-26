const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(process.cwd(), 'public')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
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
  node: {
    fs: 'empty'
  },
  plugins: [
    new CleanWebpackPlugin(['*.js'], { root: path.resolve(process.cwd(), 'public') }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*']
  }
}
