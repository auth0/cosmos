const babel = require('babel-core')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

/* Babel transform that goes around each file */
const sources = {}

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

glob.sync(path.join(__dirname, '../src/manage/**/*.js')).map(file => {
  if (file === path.join(__dirname, '../src/manage/dummy-components.js')) return
  babel.transformFileSync(file, options)
})
console.log(sources)

fs.writeFileSync(
  path.join(__dirname, '../src/is-cosmos-ready-yet/sources.json'),
  JSON.stringify(sources),
  'utf8'
)
