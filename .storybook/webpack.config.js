const webpack = require('webpack')

module.exports = storybookBaseConfig => {
  const plugins = storybookBaseConfig.plugins

  // plugins.push(
  //   new webpack.DefinePlugin({
  //     'process.env': { SKETCH: process.env.SKETCH }
  //   })
  // )
  plugins.push(
    new webpack.EnvironmentPlugin({
      COSMOS_DISABLE_RESETS: true
    })
  )
  const newConfig = { ...storybookBaseConfig }

  // Export bundles as libraries so we can access them on page scope.
  newConfig.output.library = '[name]'

  return newConfig
}
