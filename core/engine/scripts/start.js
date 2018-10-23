const path = require('path')

//TODO: Read from config
const relativeComponentsDir = './core/components'

const componentsDir = path.join(process.cwd(), relativeComponentsDir)
const files = require('../utils/get-files')(componentsDir)

console.log(files)
