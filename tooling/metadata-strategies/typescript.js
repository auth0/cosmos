const path = require('path')
const { parse: parseTypeScript } = require('react-docgen-typescript')
const ComponentResolverStrategy = require('./base')

module.exports = class TypeScriptResolverStrategy extends ComponentResolverStrategy {
  getMetadata() {
    const absPath = path.resolve(this.filePath)
    return parseTypeScript(absPath)[0]
  }
}
