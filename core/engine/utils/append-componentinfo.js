const fs = require('fs-extra')
const docgen = require('react-docgen')
const { createDisplayNameHandler } = require('react-docgen-displayname-handler')
const deprecationHandler = require('react-docgen-deprecation-handler')

const getComponentInfo = filePath => {
  /* read file to get source code */
  const code = fs.readFileSync(filePath, 'utf8')

  /* append addition handlers to docgen default */
  const handlers = docgen.defaultHandlers
    .concat(createDisplayNameHandler(filePath))
    .concat(deprecationHandler)

  /* parse the component code to get metadata */
  let info = {}
  try {
    info = docgen.parse(code, null, handlers)
  } catch (error) {
    // TODO: Find a nice way to report errors
  }

  return info
}

const appendComponentInfo = component => {
  const componentInfo = getComponentInfo(component.filePath)
  return Object.assign(component, componentInfo)
}

module.exports = appendComponentInfo
