const task = require('../utils/task')
const configPath = require('../utils/config-loader')('production')

task({
  label: 'Building application',
  command: 'webpack',
  params: ['--config', configPath]
})
