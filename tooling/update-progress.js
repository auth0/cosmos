const babel = require('babel-core')
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const chokidar = require('chokidar')

const watch = process.argv.includes('-w') || process.argv.includes('--watch')
let sources = {}
/* Babel transform that goes around each file */
const transform = () => {
  return {
    visitor: {
      /* Find JSX elements */
      ImportDeclaration: ({ node }) => {
        node.specifiers.map(s => {
          const source = node.source.value
          if (!sources[source]) sources[source] = 1
          else sources[source]++
        })
      }
    }
  }
}

const options = {
  presets: ['react'],
  plugins: ['transform-object-rest-spread', transform]
}

const run = () => {
  sources = {}
  glob.sync(path.join(__dirname, '../src/manage/**/*.js')).map(file => {
    if (file === path.join(__dirname, '../src/manage/dummy-components.js')) return
    try {
      babel.transformFileSync(file, options)
    } catch (err) {
      console.log(err)
    }
  })
  console.log(sources)

  fs.writeFileSync(
    path.join(__dirname, '../src/is-cosmos-ready-yet/sources.json'),
    JSON.stringify(sources),
    'utf8'
  )
}

if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch([path.join(__dirname, '../src/**/*.js')], { ignored: ['node_modules'] })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
