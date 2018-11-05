const path = require('path')

//TODO: Read relative path from config
const relativeComponentsDir = './core/components'

const getConfig = () => {
  return {
    componentsDir: path.join(process.cwd(), relativeComponentsDir)
  }
}

module.exports = getConfig
