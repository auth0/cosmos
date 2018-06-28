const path = require('path')
const execa = require('execa')
const argv = require('yargs').argv

/* load config from cosmos-cli */
const configPath = path.join(__dirname, 'configs/webpack.config.js')

/* silent unless asked to be verbose */
const logLevel = argv.verbose ? 'verbose' : 'errors-only'

const exec = execa.shell(`webpack --config ${configPath} --display=${logLevel}`)

exec.stdout.pipe(process.stdout)
exec.stderr.pipe(process.stderr)
