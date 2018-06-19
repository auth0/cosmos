const fs = require('fs-extra')
const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { info, warn, error } = require('prettycli')
const latestVersion = require('latest-version')
const propTypesToTS = require('proptypes-to-ts-declarations')

const { icons } = require('../src/components/atoms/icon/icons.json')
const oneOfResolvers = {
  __ICONNAMES__: Object.keys(icons)
}

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

latestVersion('@auth0/cosmos').then(publishedVersion => {
  /* if the latest version is already published, skip this entire script */
  if (publishedVersion === version) {
    warn(`This version (${version}) is already published.`)
    process.exit(0)
  }

  info('PUBLISH', 'Generating TypeSscript declarations')

  // Generating index.d.ts file
  propTypesToTS('@auth0/cosmos', './src/components/**/*.js', './src/components/index.d.ts', {
    oneOfResolvers
  })

  const directories = ['src/tokens', 'src/babel-preset', 'src/components']

  /* copy root version to all dependencies */
  directories.forEach(directory => {
    const packageJSONPath = directory + '/package.json'
    let content = fs.readJsonSync(packageJSONPath)
    content.version = version

    /* components should import the same version */
    if (directory === 'src/components') {
      content.dependencies['@auth0/cosmos-tokens'] = version
    }

    fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
  })
  info('PUBLISH', 'Copied root version to all packages')

  /* create dist folder */
  fs.removeSync('dist')
  fs.mkdirsSync('dist')
  info('PUBLISH', 'created dist')

  /* copy all packages for publishing */
  directories.forEach(directory => {
    fs.copySync(directory, directory.replace('src', 'dist'))
  })
  info('PUBLISH', 'copied files')

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
