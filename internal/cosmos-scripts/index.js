/* This file contains helpers that can be imported by the application */

const path = require('path')

const getConfig = mode => {
  const configPath = path.join(__dirname, `./configs/webpack.${mode}.config.js`)
  return require(configPath)
}

module.exports = { getConfig }
