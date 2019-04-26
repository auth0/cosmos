/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

module.exports = {
  presets: ['env', 'react', 'es2015', 'stage-2'],
  plugins: ['transform-object-rest-spread', 'transform-class-properties']
}
