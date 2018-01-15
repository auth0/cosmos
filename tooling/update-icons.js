const fs = require('fs')
const { basename } = require('path')
const glob = require('glob')
const SVGO = require('svgo')
const htmlparser = require('htmlparser2')
const fromPairs = require('lodash.frompairs')
const chokidar = require('chokidar')
const { info, warn } = require('prettycli')

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

  const process = path => {
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
  const aliases = JSON.parse(fs.readFileSync('src/icons/aliases.json', 'utf8'))

  Promise.all(svgFiles.map(process)).then(data => {
    const metadata = {
      icons: fromPairs(data),
      aliases
    }
    fs.writeFileSync(
      'src/components/atoms/icon/icons.json',
      JSON.stringify(metadata, null, 2),
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
