const webpack = require('webpack')

module.exports = (storybookBaseConfig, configType) => {
  const plugins = storybookBaseConfig.plugins

  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { SKETCH: process.env.SKETCH }
    })
  )
  const newConfig = {
    ...storybookBaseConfig
  }

  // Export bundles as libraries so we can access them on page scope.
  newConfig.output.library = '[name]'

  return newConfig
}
