const execa = require('execa')
const path = require('path')
const readPkg = require('read-pkg')
const { info, warn } = require('prettycli')
const latestVersion = require('latest-version')

const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

latestVersion('@auth0/cosmos').then(publishedVersion => {
  /* if the latest version is already published, skip this entire script */
  if (publishedVersion === version) {
    warn(`This version (${version}) is already published.`)
    process.exit(0)
  }

  const directories = [
    'core/tokens',
    'core/babel-preset',
    'core/components'
    // 'internal/cosmos-scripts'
  ]

  /* copy .npmrc to each package */
  directories.forEach(directory => {
    execa.shellSync(`cp .npmrc ${directory.replace('core', 'dist')}/`)
  })

  /* publish all components */
  try {
    directories.forEach(directory => {
      const dir = directory.replace('core', 'dist/core')
      execa.shellSync(`cd ${dir} && npm publish`)
      info('PUBLISH', `published ${dir}`)
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})
