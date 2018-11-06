/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = () => {
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['transform-object-rest-spread', 'transform-class-properties']
  }
}
