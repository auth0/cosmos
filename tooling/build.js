const fs = require('fs-extra')
const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { info, warn, error } = require('prettycli')
const latestVersion = require('latest-version')

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

const directories = ['core/tokens', 'core/babel-preset', 'core/components']

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
info('BUILD', 'Copied root version to all packages')

/* create dist folder */
fs.removeSync('dist')
info('BUILD', 'Removed dist folder')
fs.mkdirsSync('dist')
info('BUILD', 'Created dist folder')

/* copy all packages for publishing */
directories.forEach(directory => {
  fs.copySync(directory, directory.replace('core', 'dist').replace('internal', 'dist'))
})
info('BUILD', 'Copied files to dist')

const presetPath = path.resolve(__dirname, '../dist/babel-preset/index.js')

/* transpile components */
try {
  execa.shellSync(
    `./node_modules/.bin/babel --presets=${presetPath} core/components -d dist/components`
  )
  info('BUILD', 'Transpiled components')
} catch (err) {
  console.log(err)
  process.exit(1)
}

/* transpile tokens */
try {
  execa.shellSync(`./node_modules/.bin/babel --presets=${presetPath} core/tokens -d dist/tokens`)
  info('BUILD', 'Transpiled tokens')
} catch (err) {
  console.log(err)
  process.exit(1)
}
