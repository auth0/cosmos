const fs = require('fs-extra')
const path = require('path')
const readPkg = require('read-pkg')
const { info } = require('prettycli')

/* get version from root package.json */
const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

info('PREPARE', `Picked up version ${version} from root`)

const directories = ['src/tokens', 'src/babel-preset', 'src/components', 'src/codemods']

/* copy version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  /* components should import the same version of tokens and babel-preset */
  if (directory === 'src/components') {
    content.dependencies['@auth0/cosmos-tokens'] = version
    content.dependencies['@auth0/babel-preset-cosmos'] = version
    content.dependencies['@auth0/cosmos-codemods'] = version
  }

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})
info('PREPARE', 'Updated version for all packages')
