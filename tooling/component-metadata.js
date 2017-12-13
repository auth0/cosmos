const fs = require('fs')
const glob = require('glob')
const { parse, defaultHandlers } = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')

const metadata = glob
  .sync('src/components/atoms/*.js')
  .map(path => ({
    filepath: path,
    source: fs.readFileSync(path, 'utf8')
  }))
  .map(({ source, filepath }) => {
    try {
      const handlers = defaultHandlers.concat(createDisplayNameHandler(filepath))
      return parse(source, null, handlers)
    } catch (err) {
      console.log('Could not parse component:' + filepath)
    }
  })
  .filter(meta => meta)

fs.writeFileSync('src/docs/metadata.json', JSON.stringify({ metadata }, null, 2), 'utf8')
