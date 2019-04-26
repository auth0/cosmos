const fs = require('fs')
const path = require('path')

const configPath = (mode) => {
  /* load custom config from application root */
  const customConfigPath = path.resolve(process.cwd(), `./webpack.${mode}.config.js`)
  const exists = fs.existsSync(customConfigPath)

  /* load config from cosmos-cli */
  const cosmosConfigPath = path.join(__dirname, `../configs/webpack.${mode}.config.js`)

  if (exists) {
    console.log('Using config from application root')
    return customConfigPath
  } else return cosmosConfigPath // default
}

module.exports = configPath
