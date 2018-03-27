const fs = require('fs')
const glob = require('glob')
const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')
const camelCase = require('lodash.camelcase')
const path = require('path')
const readPkg = require('read-pkg')

/* CLI param for watch mode */
const watch = process.argv.includes('-w') || process.argv.includes('--watch')
const debug = process.argv.includes('-d') || process.argv.includes('--debug')
let warning = 0

/* Get list of js and md files from atoms and molecules */
const javascriptFiles = glob.sync('src/components/+(atoms|molecules)/**/*.js')
let markdownFiles = glob.sync('src/components/+(atoms|molecules)/**/*.md')

/* get version from root package.json */
const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

const run = () => {
  info('DOCS', 'Generating metadata')
  let metadata = javascriptFiles
    .map(path => {
      try {
        /* skip secondary files in molecules */
        if (path.includes('molecules') && !path.includes('index.js')) return

        /* append display name handler to handlers list */
        const handlers = docgen.defaultHandlers.concat(createDisplayNameHandler(path))

        /* read file to get source code */
        const code = fs.readFileSync(path, 'utf8')

        /* parse the component code to get metadata */
        const data = docgen.parse(code, null, handlers)

        if (data.props) {
          /* remove redundant quotes from default value of type string */
          Object.values(data.props).forEach(prop => {
            if (prop.defaultValue) {
              if (typeof prop.defaultValue.value === 'string') {
                prop.defaultValue.value = prop.defaultValue.value.replace(/^'(.*)'$/, '$1')
              }
            }
          })

          /* remove redundant quotes from enum values in prop types */
          Object.values(data.props).forEach(prop => {
            if (prop.type.name === 'enum') {
              prop.type.value.forEach(element => {
                element.value = element.value.replace(/^'(.*)'$/, '$1')
              })
            }
          })
        }

        /* add filepath to metadata */
        data.filepath = path

        /* get documentation file path */
        const directoryName = path.split('/').splice(-2, 1)[0]
        const documentationPath = path.replace('index.js', `${directoryName}.md`)

        /* add documentation if exists */
        if (fs.existsSync(documentationPath)) {
          data.documentation = fs.readFileSync(documentationPath, 'utf8')
          /* remove from markdown files list (useful later) */
          markdownFiles = markdownFiles.filter(path => path !== documentationPath)
        } else if (debug) {
          warn('documentation not found for ' + path)
        } else {
          warning++
        }

        /* add lazy hint for documentation */
        data.implemented = true
        data.internal = path.includes('_')

        return data
      } catch (err) {
        /* warn if there was a problem with getting metadata */
        if (debug) warn(`Could not parse metadata for ${path}: ${err.stack || err}`)
        else warning++
      }
    })
    /*
      filter out null values,
      this protects against components that don't have metadata yet
    */
    .filter(meta => meta)

  /* Add documentation files that are not implemented yet */
  markdownFiles.map(path => {
    const data = {}

    /* attach content of documentation file */
    data.documentation = fs.readFileSync(path, 'utf8')

    /* attach temporary filepath */
    data.filepath = path

    /* infer display name from path */
    data.displayName = camelCase(
      path
        .split('/')
        .pop()
        .replace('.md', '')
    )

    /* add lazy hint for documentation */
    data.implemented = false

    metadata.push(data)
  })

  /*
    Write the file in docs folder
    TODO: Rethink tooling for docs which works across packages
  */
  fs.writeFileSync('src/docs/metadata.json', JSON.stringify({ metadata, version }, null, 2), 'utf8')

  if (warning) {
    warn(`${warning} components could use some docs love, run in --debug mode for more info`)
  }
}

/* watch mode 👀 */
if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch('src/components', { ignored: ['node_modules'] })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
