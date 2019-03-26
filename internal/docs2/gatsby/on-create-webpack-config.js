const path = require("path")
const webpack = require("webpack")
module.exports = ({ actions, stage, loaders }) => {
  const { setWebpackConfig } = actions
  if (stage === "build-html") {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /@auth0\/cosmos-fonts/, // TODO: hack for SSR, fix me
            use: loaders.null(),
          },
        ],
      },
    })
  }

  setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
