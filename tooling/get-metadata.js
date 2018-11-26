const fs = require('fs')
const yaml = require('yamljs')

const getMetadata = filepath => {
  const contents = fs.readFileSync(filepath, 'utf8')
  if (!contents || !contents.includes('```meta')) return {}

  const raw = contents.split('```meta')[1].split('```')[0]
  return yaml.parse(raw)
}

module.exports = getMetadata
