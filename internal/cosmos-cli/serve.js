const execa = require('execa')

const buildDirectory = 'public'
const exec = execa.shell(`./node_modules/.bin/serve ${buildDirectory}`)

exec.stdout.pipe(process.stdout)
exec.stderr.pipe(process.stderr)
