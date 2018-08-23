/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['env', 'react', 'es2015'],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    'babel-plugin-styled-components'
  ]
}
