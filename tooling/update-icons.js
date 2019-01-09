const fs = require('fs-extra')
const { basename } = require('path')
const glob = require('glob')
const SVGO = require('svgo')
const htmlparser = require('htmlparser2')
const fromPairs = require('lodash.frompairs')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')
const prettier = require('prettier')

/* Ensure meta directory exists */
fs.ensureDirSync('core/components/meta')

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
  const aliases = JSON.parse(fs.readFileSync('core/icons/aliases.json', 'utf8'))
  const lookup = {}

  // Add entries pointing from the actual names of the icons to themselves
  Object.keys(icons).forEach(name => {
    lookup[name] = name
  })

  // Add entries for each of the aliases of the icons, pointing to their actual names
  Object.keys(aliases).forEach(section =>
    Object.keys(aliases[section]).forEach(name => {
      if (!icons[name]) {
        warn('DOCS', `Ignoring aliases defined for a non-existent icon ${name}`)
        return
      }

      aliases[section][name].forEach(alias => {
        lookup[alias] = name
      })
    })
  )

  console.log({ lookup })

  return lookup
}

const buildSvgoProcessor = ({ precision = 3 } = {}) =>
  new SVGO({
    plugins: [
      { removeAttrs: { attrs: '(stroke-width|stroke-linecap|stroke-linejoin)' } },
      { removeDimensions: true },
      { removeStyleElement: true }
    ],
    floatPrecision: precision,
    multipass: true
  })

const run = () => {
  info('DOCS', 'Generating icons')

  // We will use svgo to remove unnecessary data from the SVG file.
  const svgo = buildSvgoProcessor()
  const customPrecisionsData = fs.readFileSync('core/icons/compression-precisions.json')
  const customPrecisions = JSON.parse(customPrecisionsData)

  const processFile = path => {
    const name = basename(path)
      .replace(/^icon-/, '')
      .replace(/\.svg$/, '')

    // Default SVGO processor
    let processor = svgo

    /**
     * If the icon is known to require more float precision
     * when compressing it. Setup a custom processor with more precision for it.
     *
     * See: https://github.com/auth0/cosmos/issues/1077
     */
    if (customPrecisions[name]) {
      processor = buildSvgoProcessor({ precision: customPrecisions[name] })
    }

    const svg = fs.readFileSync(path, 'utf8')
    return processor.optimize(svg, { path }).then(result => {
      const icon = transform(name, result.data)
      return [name, icon]
    })
  }

  const svgFiles = glob.sync('core/icons/**/*.svg')

  Promise.all(svgFiles.map(processFile)).then(data => {
    const icons = fromPairs(data)
    const aliases = buildAliasLookup(icons)

    // Write the transformed path data from the icon SVG files
    fs.writeFileSync(
      'core/components/atoms/icon/icons.json',
      JSON.stringify({ icons }, null, 2) + '\n',
      'utf8'
    )

    // prettify this file
    prettier.format('core/components/atoms/icon/icons.json', { parser: 'babylon' })

    // Write the lookup table for icon names which will be used in the docs
    fs.writeFileSync(
      'core/components/meta/icons.json',
      JSON.stringify({ types: Object.keys(icons).sort(), aliases }, null, 2),
      'utf8'
    )
  })
}

/* watch mode 👀 */
if (process.argv.includes('-w') || process.argv.includes('--watch')) {
  console.log('running in watch mode')
  chokidar
    .watch('core/icons')
    .on('ready', run)
    .on('change', run)
    .on('unlink', run)
} else {
  run()
}
