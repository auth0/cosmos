const getPropString = propData => {
  let propString = ''

  /* filter out internal props, they start with _underscore */
  const propNames = Object.keys(propData).filter(key => key[0] !== '_')

  propNames.forEach(name => {
    if (propData[name].type.name === 'bool' && propData[name].value === 'true') {
      propString += ` ${name}`
    } else if (propData[name].type.name === 'string' && propData[name].value !== 'null') {
      propString += ` ${name}="${propData[name].value}"`
    } else if (!['null', 'false'].includes(propData[name].value)) {
      propString += ` ${name}={${propData[name].value}}`
    }
  })

  return propString
}

export default getPropString
