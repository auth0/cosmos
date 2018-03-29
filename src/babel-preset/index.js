/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['react'],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    ['@quickbaseoss/babel-plugin-styled-components-css-namespace', { cssNamespace: 'cosmos' }]
  ]
}
