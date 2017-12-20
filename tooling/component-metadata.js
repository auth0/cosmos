const fs = require('fs')
const glob = require('glob')
const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')

/* CLI param for watch mode */
const watch = process.argv.includes('-w') || process.argv.includes('--watch')

/* Get list of js files from atoms and molecules */
const componentList = glob.sync('src/components/+(atoms|molecules)/*.js')

const run = () => {
  info('DOCS', 'Generating metadata')
  const metadata = componentList
    .map(path => {
      try {
        /* append display name handler to handlers list */
        const handlers = docgen.defaultHandlers.concat(createDisplayNameHandler(path))

        /* read file to get source code */
        const code = fs.readFileSync(path, 'utf8')

        /* parse the component code to get metadata */
        const data = docgen.parse(code, null, handlers)

        /* add filepath to metadata */
        data.filepath = path

        return data
      } catch (err) {
        /* warn if there was a problem with getting metadata */
        warn('Could not parse metadata for ' + path)
      }
    })
    /*
      filter out null values,
      this protects against components that don't have metadata yet
    */
    .filter(meta => meta)

  /*
    Write the file in docs folder
    TODO: Rethink tooling for docs which works across packages
  */
  fs.writeFileSync('src/docs/metadata.json', JSON.stringify({ metadata }, null, 2), 'utf8')
}

/* watch mode 👀 */
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
