/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/proposal-object-rest-spread', '@babel/proposal-class-properties']
}
