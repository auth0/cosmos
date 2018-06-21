const fs = require('fs-extra')
const glob = require('glob')
const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')
const camelCase = require('lodash.camelcase')
const propTypesToTS = require('proptypes-to-ts-declarations')
const getMetadata = require('./get-metadata')
const { icons } = require('@auth0/cosmos/atoms/icon/icons.json')

/* CLI param for watch mode */
const watch = process.argv.includes('-w') || process.argv.includes('--watch')
const debug = process.argv.includes('-d') || process.argv.includes('--debug')
let warning = 0

/* Ensure meta directory exists */
fs.ensureDirSync('src/components/meta')

/* Get list of js and md files from atoms and molecules */
const javascriptFiles = glob.sync('src/components/+(atoms|molecules)/**/*.js')
let markdownFiles = glob.sync('src/components/+(atoms|molecules)/**/*.md')

const run = () => {
  info('DOCS', 'Generating metadata')
  let metadata = javascriptFiles
    .filter(path => !path.includes('story.js')) // ignore story files
    .filter(path => !path.includes('sketch.js')) // ignore sketch files
    .filter(path => !path.includes('.d.ts')) // ignore typescript definitions
    .map(path => {
      try {
        /* ignore secondary files */
        const directoryName = path.split('/').splice(-2, 1)[0]
        if (!path.includes(`${directoryName}.js`)) return

        /* append display name handler to handlers list */
        const handlers = docgen.defaultHandlers.concat(createDisplayNameHandler(path))

        /* read file to get source code */
        const code = fs.readFileSync(path, 'utf8')

        /* parse the component code to get metadata */
        const data = docgen.parse(code, null, handlers)

        /* make modifications to prop types to improve documentation */
        if (data.props) {
          Object.values(data.props).forEach(prop => {
            /* remove redundant quotes from default value of type string */
            if (prop.defaultValue) {
              if (typeof prop.defaultValue.value === 'string') {
                prop.defaultValue.value = prop.defaultValue.value.replace(/^'(.*)'$/, '$1')
              }
            }

            if (prop.type.name === 'enum' && prop.type.value === '__ICONNAMES__') {
              /* create an array of all the icons with an empty string as first element */
              prop.type.value = [{ value: '' }].concat(Object.keys(icons).map(value => ({ value })))
            }

            /* remove redundant quotes from enum values in prop types */
            if (prop.type.name === 'enum' && Array.isArray(prop.type.value)) {
              prop.type.value.forEach(element => {
                element.value = element.value.replace(/^'(.*)'$/, '$1')
              })
            }

            /* add required field for custom shapes */
            if (prop.type.name === 'custom' && prop.type.raw.includes('.isRequired')) {
              prop.required = true
              prop.type.raw = prop.type.raw.replace('.isRequired', '')
            }
          })
        }

        /* add filepath to metadata */
        data.filepath = path

        /* get documentation file path */
        const documentationPath = path.replace('.js', '.md')

        /* add documentation if exists */
        if (fs.existsSync(documentationPath)) {
          data.documentation = fs.readFileSync(documentationPath, 'utf8')
          /* remove from markdown files list (useful later) */
          markdownFiles = markdownFiles.filter(path => path !== documentationPath)
          /* pull meta from docs */
          data.meta = getMetadata(documentationPath)
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
  fs.writeFileSync(
    'src/components/meta/metadata.json',
    JSON.stringify({ metadata }, null, 2),
    'utf8'
  )

  // Write a version of the Changelog to a place where we can access it later.
  // TODO: Consider parsing the Markdown and storing this in a more structured format
  // so we can display it more intelligently in the docs?
  info('DOCS', 'Generating changelog')
  const changelog = fs.readFileSync('changelog.md', 'utf8')
  fs.writeFileSync(
    'src/components/meta/changelog.json',
    JSON.stringify({ changelog }, null, 2),
    'utf8'
  )

  // Write typescript definitions to index.d.ts.
  info('DOCS', 'Generating TypeScript definitions')
  propTypesToTS('@auth0/cosmos', './src/components/**/*.js', './src/components/meta/index.d.ts', {
    oneOfResolvers: {
      __ICONNAMES__: Object.keys(icons)
    }
  })

  if (warning) {
    warn(`${warning} components could use some docs love, run in --debug mode for more info`)
  }
}

/* watch mode 👀 */
if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch('src/components', {
      ignored: ['node_modules', 'src/components/meta']
    })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
