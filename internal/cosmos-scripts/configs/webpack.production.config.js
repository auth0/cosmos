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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@auth0/babel-preset-cosmos']
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
  ]
}
