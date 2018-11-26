const fs = require('fs')

module.exports = class ComponentResolverStrategy {
  constructor(path) {
    this.filePath = path
  }
  getFileContents() {
    return fs.readFileSync(this.filePath, 'utf8')
  }

  getMetadata() {
    return {}
  }
}
