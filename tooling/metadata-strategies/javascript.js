const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const deprecationHandler = require('react-docgen-deprecation-handler')
const ComponentResolverStrategy = require('./base')

module.exports = class JavaScriptResolverStrategy extends ComponentResolverStrategy {
  getMetadata() {
    /* append display name handler to handlers list */
    const handlers = docgen.defaultHandlers
      .concat(createDisplayNameHandler(this.filePath))
      .concat(deprecationHandler)

    /* read file to get source code */
    const code = this.getFileContents()

    /* parse the component code to get metadata */
    const data = docgen.parse(code, null, handlers)
    return data
  }
}
