const fs = require('fs-extra')
const path = require('path')
const readPkg = require('read-pkg')
const { info } = require('prettycli')

/* get version from root package.json */
const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

info('CATCH UP', `Picked up version ${version} from root`)

const directories = ['core/tokens', 'core/babel-preset', 'core/components']

/* copy version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  /* components should import the same version of tokens and babel-preset */
  if (directory === 'core/components') {
    content.dependencies['@auth0/cosmos-tokens'] = version
  }

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})
info('PREPARE', 'Updated version for all packages. Please commit this.')
