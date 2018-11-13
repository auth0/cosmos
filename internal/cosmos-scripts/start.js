const execa = require('execa')

const buildDirectory = 'public'
const exec = execa.shell(`serve ${buildDirectory}`)

exec.stdout.pipe(process.stdout)
exec.stderr.pipe(process.stderr)
