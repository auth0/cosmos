const fs = require('fs')
const glob = require('glob')
const { parse, defaultHandlers } = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')

const getComponentMetadata = () =>
  glob
    .sync('src/components/atoms/*.js')
    .map(path => ({
      filepath: path,
      source: fs.readFileSync(path, 'utf8')
    }))
    .map(({ source, filepath }) => {
      try {
        const handlers = defaultHandlers.concat(createDisplayNameHandler(filepath))
        const data = parse(source, null, handlers)
        data.path = filepath
        return data
      } catch (err) {
        console.log('Could not parse component:' + filepath)
      }
    })
    .filter(meta => meta)

module.exports = getComponentMetadata
