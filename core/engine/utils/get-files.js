const path = require('path')
const glob = require('glob')

const patterns = {
  md: '**/*.md',
  js: '**/*.*(js|jsx|ts)',
  story: '**/*.story.*(js|jsx|ts)',
  sketch: '**/*.sketch.*(js|jsx|ts)',
  definitions: '**/*.d.ts'
}

const getFiles = componentsDir => {
  const componentFiles = glob.sync(path.join(componentsDir, patterns.js), {
    ignore: [patterns.story, patterns.sketch, patterns.definitions]
  })
  const markdownFiles = glob.sync(path.join(componentsDir, patterns.md))
  const storyFiles = glob.sync(path.join(componentsDir, patterns.story))

  return { componentFiles, markdownFiles, storyFiles }
}

module.exports = getFiles
