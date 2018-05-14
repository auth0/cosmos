const fs = require('fs')
const { basename } = require('path')
const glob = require('glob')
const SVGO = require('svgo')
const htmlparser = require('htmlparser2')
const fromPairs = require('lodash.frompairs')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')
const prettier = require('prettier')

const prettierConfig = { singleQuote: true, semi: false }

const transform = (name, svg) => {
  const icon = { paths: [] }

  const parser = new htmlparser.Parser({
    onopentag: (name, attribs) => {
      switch (name) {
        case 'svg':
          icon.width = Number(attribs.width)
          icon.height = Number(attribs.height)
          break
        case 'path':
          icon.paths.push(attribs.d)
          break
      }
    }
  })

  try {
    parser.write(svg)
    parser.end()
  } catch (err) {
    warn('DOCS', `Error while parsing SVG data for icon ${name}: ${err}`)
    return null
  }

  return icon
}

const buildAliasLookup = icons => {
  const aliases = JSON.parse(fs.readFileSync('src/icons/aliases.json', 'utf8'))
  const lookup = {}

  // Add entries pointing from the actual names of the icons to themselves
  Object.keys(icons).forEach(name => {
    lookup[name] = name
  })

  // Add entries for each of the aliases of the icons, pointing to their actual names
  Object.keys(aliases).forEach(name => {
    if (!icons[name]) {
      warn('DOCS', `Ignoring aliases defined for a non-existent icon ${name}`)
      return
    }
    aliases[name].forEach(alias => {
      lookup[alias] = name
    })
  })

  return lookup
}

const run = () => {
  info('DOCS', 'Generating icons')

  // We will use svgo to remove unnecessary data from the SVG file.
  const svgo = new SVGO({
    plugins: [
      { removeAttrs: { attrs: '(stroke-width|stroke-linecap|stroke-linejoin)' } },
      { removeDimensions: true },
      { removeStyleElement: true }
    ],
    multipass: true
  })

  const processFile = path => {
    const name = basename(path)
      .replace(/^icon-/, '')
      .replace(/\.svg$/, '')
    const svg = fs.readFileSync(path, 'utf8')
    return svgo.optimize(svg, { path }).then(result => {
      const icon = transform(name, result.data)
      return [name, icon]
    })
  }

  const svgFiles = glob.sync('src/icons/**/*.svg')

  Promise.all(svgFiles.map(processFile)).then(data => {
    const icons = fromPairs(data)
    const aliases = buildAliasLookup(icons)

    // Write the transformed path data from the icon SVG files
    fs.writeFileSync(
      'src/components/atoms/icon/icons.json',
      JSON.stringify({ icons }, null, 2) + '\n',
      'utf8'
    )

    // Write the array of icons for prop type validation
    const iconNames = Object.keys(icons)
    iconNames.unshift('') // add empty string for null case
    const code = `
      const iconNames = ${JSON.stringify(iconNames)}

      export default iconNames
    `
    fs.writeFileSync(
      'src/components/atoms/icon/icon-names.js',
      prettier.format(code, prettierConfig),
      'utf8'
    )

    // Write the lookup table for icon names which will be used in the docs
    fs.writeFileSync(
      'src/docs/icons.json',
      JSON.stringify({ types: Object.keys(icons).sort(), aliases }, null, 2),
      'utf8'
    )
  })
}

/* watch mode 👀 */
if (process.argv.includes('-w') || process.argv.includes('--watch')) {
  console.log('running in watch mode')
  chokidar
    .watch('src/icons')
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
