const path = require('path')
const task = require('./task')

/* load config from cosmos-cli */
const configPath = path.join(__dirname, 'configs/webpack.config.js')

task({
  label: 'Building application',
  command: 'webpack',
  params: ['--config', configPath]
})
