const getDefaultProps = propList => {
  const defaultProps = []
  propList.map(property => {
    const defaultOption = property.options.filter(option => option.default)[0]
    return defaultProps.push({
      name: property.name,
      value: defaultOption.value
    })
  })
  return defaultProps
}

export default getDefaultProps
