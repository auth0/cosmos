/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = () => {
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties'
    ]
  }
}
