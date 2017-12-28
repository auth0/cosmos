const parse = a => {
  /* Explicitly convert to string, so that we can except numbers as well */
  a = a.toString()
  const value = parseFloat(a)
  const unit = a.replace(value, '')
  return { value, unit }
}

const validate = (a, b) => {
  const unitA = parse(a).unit
  const unitB = parse(b).unit

  /* If there are units but they don't match it's bad */
  if (unitA && unitB && unitA !== unitB) {
    console.log('Invalid operation, units should be the same')
    return false
  }
  return true
}

const add = (a, b) => {
  if (!validate(a, b)) return
  const unit = parse(a).unit
  const value = parse(a).value + parse(b).value

  return value + unit
}

const subtract = (a, b) => {
  if (!validate(a, b)) return
  const unit = parse(a).unit
  const value = parse(a).value - parse(b).value

  return value + unit
}

const multiply = (a, b) => {
  if (!validate(a, b)) return
  const unit = parse(a).unit
  const value = parse(a).value * parse(b).value

  return value + unit
}

export { add, subtract, multiply }
