import { shapeForDocs } from '@auth0/cosmos/_helpers/action-shape'

const parseType = type => {
  if (type.name === 'shape') {
    return 'shape ' + getShape(type.value)
  } else if (type.name === 'arrayOf') {
    if (type.value.name === 'shape') return `arrayOf(${getShape(type.value.value)})`
    if (type.value.name === 'custom') return `arrayOf(${replaceRaw(type.value.raw)})`
    else return type.name
  } else if (type.name === 'enum') {
    return 'one of:'
  } else if (type.name === 'custom') {
    return replaceRaw(type.raw)
  } else if (type.name === 'union') {
    return 'one of: ' + getArray(type.value).join(' or ')
  } else {
    return type.name
  }
}

const replaceRaw = value => {
  if (['actionShape', 'actionShapeWithRequiredIcon'].includes(value)) {
    return JSON.stringify(shapeForDocs, null, 2)
  } else return value
}

const getShape = value => {
  const shape = {}

  Object.keys(value).forEach(key => {
    shape[key] = value[key].name
  })

  return JSON.stringify(shape, null, 2)
}

const getArray = value => {
  return value.map(v => parseType(v))
}

export default parseType
