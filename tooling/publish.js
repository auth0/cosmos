const fs = require('fs-extra')
const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { info, warn, error } = require('prettycli')
const latestVersion = require('latest-version')

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

latestVersion('@auth0/cosmos').then(publishedVersion => {
  /* if the latest version is already published, skip this entire script */
  if (publishedVersion === version) {
    warn(`This version (${version}) is already published.`)
    process.exit(0)
  }

  /* create dist folder */
  fs.removeSync('dist')
  fs.mkdirsSync('dist')
  info('PUBLISH', 'created dist')

  const directories = ['src/tokens', 'src/babel-preset', 'src/components', 'src/codemods']

  /* copy tokens and preset for publishing */
  directories.forEach(directory => {
    fs.copySync(directory, directory.replace('src', 'dist'))
  })
  info('PUBLISH', 'copied files')

  /* ensure version is same in all packages */
  directories.forEach(directory => {
    const packageJSONPath = directory.replace('src', 'dist') + '/package.json'
    let content = fs.readJsonSync(packageJSONPath)
    if (content.version !== version) {
      error('Versions do not match! Please run yarn prepare before publishing')
    }
  })

  const presetPath = path.resolve(__dirname, '../dist/babel-preset/index.js')

  /* transpile components */
  try {
    execa.shellSync(
      `./node_modules/.bin/babel --presets=${presetPath} src/components -d dist/components`
    )
    info('PUBLISH', 'transpiled components')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  /* transpile tokens */
  try {
    execa.shellSync(`./node_modules/.bin/babel --presets=${presetPath} src/tokens -d dist/tokens`)
    info('PUBLISH', 'transpiled tokens')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  /* copy .npmrc to each package */
  directories.forEach(directory => {
    execa.shellSync(`cp .npmrc ${directory.replace('src', 'dist')}/`)
  })

  /* publish all components */
  try {
    directories.forEach(directory => {
      const dir = directory.replace('src', 'dist')
      execa.shellSync(`cd ${dir} && npm publish`)
      info('PUBLISH', `published ${dir}`)
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})
