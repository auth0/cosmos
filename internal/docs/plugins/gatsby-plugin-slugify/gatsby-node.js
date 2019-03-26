const interpolate = function(message, args) {
  if (args && args.length > 0) {
    const matchedArray = message.match(/\{\}|\[\{\}\]/g)
    if (matchedArray && matchedArray.length === args.length) {
      args.forEach(arg => {
        message = message.replace(/\{\}|\[\{\}\]/, arg)
      })
    }
  }
  return message
}

exports.onCreateNode = (props, pluginOptions) => {
  const { node, actions } = props
  if (node && node.internal && node.internal.type) {
    const { config = [] } = pluginOptions
    const { createNodeField } = actions
    const slugConfig = config.find(configItem => {
      const result = configItem.internalNodeType === node.internal.type
      if (configItem.path && node.fileAbsolutePath) {
        return result && node.fileAbsolutePath.startsWith(configItem.path)
      }
      return result
    })

    if (slugConfig) {
      const { template, interpolationProps } = slugConfig
      let interpolationValues
      if (Array.isArray(interpolationProps)) {
        interpolationValues = interpolationProps.map(prop => {
          return node[prop]
        })
      } else {
        interpolationValues = [
          interpolationProps.call(null, props, pluginOptions),
        ]
      }

      const slug = interpolate(template, interpolationValues)
      createNodeField({ node, name: "slug", value: slug })
    }
  }
}
