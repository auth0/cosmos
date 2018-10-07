const onlyOneOf = (props, list) => {
  let matches = []
  list.map(item => {
    if (props[item]) matches.push(item)
    return item
  })
  if (matches.length > 1) return new Error(`Can not use ${matches.join(' + ')} together!`)
}

const sumOfElements = (elements, expectedSum) => {
  if (!elements) return
  const sum = elements.reduce((a, b) => a + b, 0)
  if (sum !== expectedSum) return new Error(`The sum of values should be ${expectedSum}!`)
}

const numberOfValues = (elements, expectedCount) => {
  if (!elements) return
  if (elements.length !== expectedCount) {
    return new Error(`Expected ${expectedCount} values, found ${elements.length}!`)
  }
}

const deprecate = (props, ...deprecatedProps) => {
  for (let i = 0; i < deprecatedProps.length; i++) {
    const { name, replacement, type, typeReplacement } = deprecatedProps[i];

    let nameWithType = `'${name}' prop`;
    if (type) nameWithType += ` with type '${type}'`;
    let message = `Hi 👋, ${nameWithType} will be deprecated in 1.0.0.`
    if (replacement || typeReplacement) {
      let replacementOrType = `'${replacement}'`;
      if (typeReplacement) replacementOrType = `type '${typeReplacement}'`

      message += ` You might want to use ${replacementOrType} instead.`
    }
    const hasDeprecatedProp = type ? typeof props[name] === type : props[name];
    if (hasDeprecatedProp) return new Error(message)
  }
}

export { onlyOneOf, sumOfElements, numberOfValues, deprecate }
