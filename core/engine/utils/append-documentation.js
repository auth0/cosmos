const fs = require('fs-extra')

const getDocumentation = filePath => {
  /* Convention: documentation file should have the same but .md as extension*/
  const documentationPath = filePath.replace('.js', '.md')

  if (fs.existsSync(documentationPath)) {
    return fs.readFileSync(documentationPath, 'utf8')
  } else {
    return null
  }
}

/* Append documentation from md file */
const appendDocumentation = component => {
  component.documentation = getDocumentation(component.filePath)
  return component
}

module.exports = appendDocumentation
