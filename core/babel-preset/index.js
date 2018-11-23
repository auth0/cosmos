/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['@babel/env', 'react', 'es2015', '@babel/preset-typescript'],
  plugins: ['transform-object-rest-spread', 'transform-class-properties']
}
