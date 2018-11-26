/*
  This file contains the babel plugins that
  are recommended for usage with cosmos
*/

const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare(api => {
  api.assertVersion(7)

  return {
    presets: [
      [require('@babel/preset-env'), { modules: false }],
      require('@babel/preset-typescript'),
      require('@babel/preset-react')
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread')
    ]
  }
})
