const path = require('path')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = (baseConfig, env, config) => {
  config.node = {
    ...baseConfig.node,
    ...config.node,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
  config.output.library = '[name]'
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  })
  config.resolve.extensions.push('.ts', '.tsx', 'js', 'json')
  config.resolve.plugins = [new TsConfigPathsPlugin()]

  return config
}
