const path = require('path')
const task = require('./task')

/* load config from cosmos-cli */
const configPath = path.join(__dirname, 'configs/webpack.config.js')

const contentPath = 'public'
task('Running in dev mode', 'webpack-dev-server', ['--config', configPath, '--open'])
