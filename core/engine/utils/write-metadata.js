const fs = require('fs-extra')
const path = require('path')
const getConfig = require('./get-config')

const { componentsDir } = getConfig()
const directoryName = '.meta'

const writeMetadata = metadata => {
  const metadataDirectoryPath = path.join(componentsDir, directoryName)
  const metadataFilePath = path.join(metadataDirectoryPath, './metadata.json')

  /* Ensure meta directory exists */
  fs.ensureDirSync(metadataDirectoryPath)
  fs.writeFileSync(metadataFilePath, JSON.stringify({ metadata }, null, 2), 'utf8')
}

module.exports = writeMetadata
