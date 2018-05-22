const parseType = type => {
  if (type.name === 'shape') {
    return getShape(type.value)
  } else if (type.name === 'arrayOf') {
    if (type.value.name === 'shape') return `arrayOf(${getShape(type.value.value)})`
    else return type.name
  } else if (type.name === 'enum') {
    return 'one of:'
  } else if (type.name === 'custom') {
    return type.raw
  } else {
    return type.name
  }
}

const getShape = value => {
  const shape = {}

  Object.keys(value).forEach(key => {
    shape[key] = value[key].name
  })

  return JSON.stringify(shape, null, 2)
}

export default parseType
