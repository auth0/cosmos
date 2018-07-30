const path = require('path')
const webpack = require('webpack')
const { getConfig } = require('@auth0/cosmos-engine')

let config = getConfig('development')

/* Pass a hint to cosmos to disable resets */
config.plugins.push(
  new webpack.EnvironmentPlugin({
    COSMOS_DISABLE_RESETS: true
  })
)

module.exports = config
