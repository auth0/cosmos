const main = require('./')

/**
 * Add babel's module resolver plugin to replace all
 * '@auth0/cosmos' occurrences to './core/components'
 */
module.exports = () => ({
  ...main,
  plugins: [
    ...main.plugins,
    // [
    //   'babel-plugin-module-resolver',
    //   {
    //     alias: {
    //       '@auth0/cosmos': './core/components'
    //     }
    //   }
    // ]
  ]
})
