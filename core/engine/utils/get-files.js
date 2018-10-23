const glob = require('glob')
const path = require('path')

const getFiles = componentsDir => {
  const javascriptFiles = glob.sync(path.join(componentsDir, '**/*.js'))
  const markdownFiles = glob.sync(path.join(componentsDir, '**/*.md'))

  return { javascriptFiles, markdownFiles }
}

module.exports = getFiles
