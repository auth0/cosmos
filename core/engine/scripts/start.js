const path = require('path')
const getConfig = require('../utils/get-config')
const getFiles = require('../utils/get-files')
const appendComponentInfo = require('../utils/append-componentinfo.js')
const enhanceProps = require('../utils/enhance-props.js')
const appendDocumentation = require('../utils/append-documentation.js')
const writeMetadata = require('../utils/write-metadata.js')
const { componentsDir } = getConfig()

/* Get all relevant files */
const files = getFiles(componentsDir)

/* Convert filePath into component object */
const convertToComponentObject = filePath => {
  return { filePath: filePath }
}

/* Generate component metadata: pipe down each function */
let metadata = files.componentFiles
  .map(convertToComponentObject) /* 1. Convert filePath into component object */
  .map(appendComponentInfo) /* 2. Append component info using react-docgen */
  .map(enhanceProps) /* 3. Enhance prop data to improve documentation */
  .map(appendDocumentation) /* 4. Append documentation from md file */

/* Write metadata into file */
writeMetadata(metadata)
