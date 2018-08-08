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

// core/engine/package.json

const dependants = [
  'internal/docs',
  'core/engine',
  'examples/manage',
  'examples/webpack-hello-world'
]
const packages = ['@auth0/cosmos', '@auth0/cosmos-tokens', '@auth0/babel-preset-cosmos']

/* copy version to all dependants */
dependants.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)

  /* apps should import the same version of components, tokens and babel-preset */
  packages.forEach(package => {
    if (content.dependencies[package]) content.dependencies[package] = version
  })

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})

info('PREPARE', 'Updated version for all packages. Please commit this.')
