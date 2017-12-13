const babel = require('babel-core')
const fs = require('fs')
const glob = require('glob')

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

glob.sync('../src/manage/**/*.js').map(file => {
  if (file === '../src/manage/dummy-components.js') return
  babel.transformFileSync(file, options)
})

console.log(sources)
