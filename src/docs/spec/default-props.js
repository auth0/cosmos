const addDefaultValues = propData => {
  /* filter out internal props, they start with _underscore */
  const propNames = Object.keys(propData).filter(key => key[0] !== '_')

  propNames.forEach(name => {
    const { defaultValue } = propData[name]
    propData[name].value = defaultValue ? defaultValue.value : 'null'
  })
  return propData
}

export default addDefaultValues
