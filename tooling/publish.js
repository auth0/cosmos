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

  /* publish all components */
  try {
    execa.shellSync(`cp .npmrc core/components/dist/core/components/`)
    execa.shellSync(`cd core/components/dist/core/components && npm publish`)
    info('PUBLISH', `published @auth0/cosmos`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})
