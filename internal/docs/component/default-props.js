const addDefaultValues = (propData) => {
  /* filter out internal props, they start with _underscore */
  const propNames = Object.keys(propData).filter((key) => key[0] !== '_')

  propNames.forEach((name) => {
    const { defaultValue } = propData[name]
    propData[name].value = defaultValue ? defaultValue.value : 'null'
  })
  return propData
}

const getDefaultValue = (propData) => {
  if (propData.defaultValue && propData.defaultValue.value !== 'null') {
    return propData.defaultValue.value
  }
}

export default addDefaultValues
export { getDefaultValue }
