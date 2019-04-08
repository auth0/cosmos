const fs = require('fs-extra')
const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { Signale } = require('signale')

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))
const watch = process.argv.includes('-w') || process.argv.includes('--watch')

const directories = ['core/babel-preset', 'core/components']

const sign = new Signale();
const prebuild = sign.scope('pre-build')
const postbuild = sign.scope('post-build')
const log = sign.scope('cosmos')

/* copy root version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  /* scripts should import the same version of preset */
  if (directory === 'internal/cosmos-scripts') {
    content.dependencies['d@auth0/babel-preset-cosmos'] = version
  }

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})
prebuild.success('Copied root version to all packages')

/* create dist folder */
fs.removeSync('core/components/dist')
prebuild.success('Removed dist folder')

fs.mkdirSync('core/components/dist/core/components/atoms/icon/', { recursive: true })
fs.copyFileSync('core/components/atoms/icon/icons.json', 'core/components/dist/core/components/atoms/icon/icons.json')
fs.copyFileSync('core/components/package.json', 'core/components/dist/core/components/package.json')
postbuild.success('Copied icons definition file')

/* transpile tokens & components */
try {
  if (!watch) {
    log.time('cosmos-transpilation');
  } else {
    log.info('Package build started in watch mode');
  }
  execa.shellSync(`./node_modules/.bin/tsc ${watch ? '-w' : ''} --declaration --project ./core/`)
  if (!watch) {
    log.timeEnd('cosmos-transpilation')
    log.success('Transpiled components and tokens')
  }
} catch (err) {
  log.error(err)
  process.exit(1)
}