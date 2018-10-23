const path = require('path')

const componentsDir = path.join(process.cwd(), './core/componentsDir')

const files = require('../utils/get-files')(componentsDir)

console.log(files)
