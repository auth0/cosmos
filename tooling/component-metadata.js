const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const deprecationHandler = require('react-docgen-deprecation-handler')

const chokidar = require('chokidar')
const { info, warn } = require('prettycli')
const camelCase = require('lodash.camelcase')
// const getMetadata = require('./get-metadata')
const { icons } = require('@auth0/cosmos/atoms/icon/icons.json')
const colors = require('@auth0/cosmos-tokens/colors')

const META_DIR = 'internal/docs/.tmp'
/* CLI param for watch mode */
const watch = process.argv.includes('-w') || process.argv.includes('--watch')
const debug = process.argv.includes('-d') || process.argv.includes('--debug')
let warning = 0

/* Ensure meta directory exists */
fs.ensureDirSync(META_DIR)

/* Get list of js and md files from atoms and molecules */
const javascriptFiles = glob.sync('core/components/+(atoms|molecules|layouts)/**/*.js')
let markdownFiles = glob.sync('core/components/+(atoms|molecules|layouts)/**/*.md')

const run = () => {
  info('DOCS', 'Generating metadata')
  let metadata = javascriptFiles
    .filter(filepath => !filepath.includes('story.js')) // ignore story files
    .filter(filepath => !filepath.includes('.d.ts')) // ignore typescript definitions
    .map(filepath => {
      try {
        /* ignore secondary files */
        const directoryName = filepath.split('/').splice(-2, 1)[0]
        const componentFileName = directoryName.replace('_', '') + '.js'

        /* if component file does not exist, move on*/
        if (!filepath.includes(componentFileName)) return

        /* append display name handler to handlers list */
        const handlers = docgen.defaultHandlers
          .concat(createDisplayNameHandler(filepath))
          .concat(deprecationHandler)

        /* read file to get source code */
        const code = fs.readFileSync(filepath, 'utf8')

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

            if (prop.type.name === 'enum' && prop.type.value === '__COLORS__') {
              /* create an array of all the base colors */
              prop.type.value = Object.keys(colors.base).map(value => ({ value }))
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
          data.props = JSON.stringify(data.props)
        }
        delete data.methods
        /* add filepath to metadata */
        data.filepath = filepath

        /* get documentation file path */
        const documentationPath = filepath.replace('.js', '.md')

        /* add documentation if exists */
        if (fs.existsSync(documentationPath)) {
          const documentation = fs.readFileSync(documentationPath, 'utf8')
          const documentationFile = path.join(META_DIR, documentationPath)
          fs.ensureFileSync(documentationFile)
          fs.outputFileSync(documentationFile, documentation)
          data.documentationFile = documentationPath
          /* remove from markdown files list (useful later) */
          markdownFiles = markdownFiles.filter(filepath => filepath !== documentationPath)
          // /* pull meta from docs */
          // data.meta = getMetadata(documentationPath)
        } else if (debug) {
          warn('documentation not found for ' + filepath)
        } else {
          warning++
        }

        /* add lazy hint for documentation */
        data.implemented = true
        data._internal = filepath.includes('_')

        return data
      } catch (err) {
        /* warn if there was a problem with getting metadata */
        if (debug) warn(`Could not parse metadata for ${filepath}: ${err.stack || err}`)
        else warning++
      }
    })
    /*
      filter out null values,
      this protects against components that don't have metadata yet
    */
    .filter(meta => meta)

  /* Add documentation files that are not implemented yet */
  markdownFiles.map(filepath => {
    const data = {}

    /* attach content of documentation file */
    data.documentation = fs.readFileSync(filepath, 'utf8')

    /* attach temporary filepath */
    data.filepath = filepath

    /* infer display name from path */
    data.displayName = camelCase(
      filepath
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

  fs.writeFileSync(`${META_DIR}/component.json`, JSON.stringify(metadata, null, 2), 'utf8')
  fs.copyFileSync('core/icons/aliases.json', `${META_DIR}/aliases.json`)
  info('DOCS', 'Generating changelog')
  fs.copyFileSync('changelog.md', `${META_DIR}/changelog.md`)
  if (warning) {
    warn(`${warning} components could use some docs love, run in --debug mode for more info`)
  }
}

/* watch mode 👀 */
if (watch) {
  console.log('running in watch mode')
  chokidar
    .watch('core/components', {
      ignored: ['node_modules', 'core/components/meta']
    })
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
