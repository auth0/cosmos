const fs = require('fs')
const glob = require('glob')
const { parse, defaultHandlers } = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const path = require('path')
const chokidar = require('chokidar')

const watch = process.argv.includes('-w') || process.argv.includes('--watch')
const componentList = glob.sync('src/components/+(atoms|molecules)/*.js')

const run = () => {
  console.log('Updading docs')
  const metadata = componentList
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
}

if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch(componentList, { ignored: ['node_modules'] })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
