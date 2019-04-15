const fs = require('fs-extra')
const path = require('path')
const readPkg = require('read-pkg')
const { info } = require('prettycli')

/* get version from root package.json */
const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

info('CATCH UP', `Picked up version ${version} from root`)

const directories = [
  'core/babel-preset',
  'core/components',
  'core/components/dist/core/components',
  'internal/cosmos-scripts'
]

/* copy version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})

const dependants = ['internal/docs', 'examples/perf-tests', 'examples/webpack-hello-world']
const packages = ['@auth0/cosmos', '@auth0/babel-preset-cosmos', '@auth0/cosmos-scripts']

/* copy version to all dependants */
dependants.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)

  /* apps should import the same version of components, tokens and babel-preset */
  packages.forEach(package => {
    if (content.dependencies[package]) content.dependencies[package] = version
    if (content.devDependencies[package]) content.devDependencies[package] = version
  })

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})

info('PREPARE', 'Updated version for all packages. Please commit this.')
