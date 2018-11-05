const task = require('./task')
const configPath = require('./utils/config-loader')('development')

task({
  label: 'Running in dev mode',
  command: 'webpack-dev-server',
  params: ['--config', configPath, '--open', '--hot', '--inline'],
  watch: true
})
