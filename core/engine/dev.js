const path = require('path')
const task = require('./task')

/* load config from cosmos-cli */
const configPath = path.join(__dirname, 'configs/webpack.dev.config.js')

task({
  label: 'Running in dev mode',
  command: 'webpack-dev-server',
  params: ['--config', configPath, '--open', '--hot', '--inline'],
  watch: true
})
