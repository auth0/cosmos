/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const onCreateWebpackConfig = require("./gatsby/on-create-webpack-config")
const createPages = require("./gatsby/create-pages")
exports.onCreateWebpackConfig = onCreateWebpackConfig
exports.createPages = createPages
