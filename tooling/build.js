const fs = require('fs-extra')
const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { Signale } = require('signale')

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

const directories = ['core/tokens', 'core/babel-preset', 'core/components']

const sign = new Signale();
const prebuild = sign.scope('pre-build')
const log = sign.scope('cosmos')

/* copy root version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  /* components should import the same version of tokens */
  if (directory === 'core/components') {
    content.dependencies['@auth0/cosmos-tokens'] = version
  }

  /* scripts should import the same version of preset */
  if (directory === 'internal/cosmos-scripts') {
    content.dependencies['@auth0/babel-preset-cosmos'] = version
  }

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})
prebuild.success('Copied root version to all packages')

/* create dist folder */
fs.removeSync('dist')
prebuild.success('Removed dist folder')
fs.mkdirsSync('dist')
prebuild.success('Created dist folder')

/* transpile tokens & components */
try {
  log.time('cosmos-transpilation');
  execa.shellSync(`./node_modules/.bin/tsc --project ./core/`)
  log.timeEnd('cosmos-transpilation')
  log.success('Transpiled components and tokens')
} catch (err) {
  log.error(err)
  process.exit(1)
}

/* generate type definitions */
try {
  log.time('typedef-generation');
  execa.shellSync(
    `./node_modules/.bin/tsc --declaration  --emitDeclarationOnly --allowJs false --project ./core/`
  )
  log.timeEnd('typedef-generation')
  log.success('Generated type definitions')
} catch (err) {
  log.error(err)
  process.exit(1)
}
