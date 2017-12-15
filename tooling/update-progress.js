const babel = require('babel-core')
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const chokidar = require('chokidar')

const watch = process.argv.includes('-w') || process.argv.includes('--watch')

let components = []
const insertWithoutDuplication = ({ name, source }) => {
  const exists = components.filter(c => c.name === name && c.source === source)[0]
  if (!exists) components.push({ name, source })
}

/* Babel transform that goes around each file */
const transform = () => {
  return {
    visitor: {
      /* Find JSX elements */
      ImportDeclaration: ({ node }) => {
        node.specifiers.map(s => {
          const name = s.local.name
          const source = node.source.value
          insertWithoutDuplication({ name, source })
        })
      },
      JSXMemberExpression: ({ node }) => {
        const parent = node.object.name
        const child = node.property.name
        const name = parent + '.' + child
        const source = components.filter(c => c.name === parent)[0].source
        insertWithoutDuplication({ name, source })
      }
    }
  }
}

const options = {
  presets: ['react'],
  plugins: ['transform-object-rest-spread', transform]
}

const run = () => {
  components = []
  glob.sync(path.join(__dirname, '../src/manage/**/*.js')).map(file => {
    if (file === path.join(__dirname, '../src/manage/dummy-components.js')) return
    try {
      babel.transformFileSync(file, options)
    } catch (err) {
      console.log(err)
    }
  })

  fs.writeFileSync(
    path.join(__dirname, '../src/is-cosmos-ready-yet/components.json'),
    JSON.stringify(components),
    'utf8'
  )
}

if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch([path.join(__dirname, '../src/manage/**/*.js')], { ignored: ['node_modules'] })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
