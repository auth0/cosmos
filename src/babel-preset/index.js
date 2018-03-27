/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['react', ['env', { targets: { browsers: ['last 2 versions'] } }]],
  plugins: ['transform-object-rest-spread', 'transform-class-properties']
}
