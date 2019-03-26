// @ts-ignore noImplicitReturn
const onlyOneOf = (props, list: string[]) => {
  let matches: string[] = []
  list.forEach(item => {
    if (props[item]) matches.push(item)
  })
  if (matches.length > 1) return new Error(`Can not use ${matches.join(' + ')} together!`)
}

// @ts-ignore noImplicitReturn
const sumOfElements = (elements, expectedSum) => {
  if (!elements) return undefined // No prop type errors
  const sum = elements.reduce((a, b) => a + b, 0)
  if (sum !== expectedSum) return new Error(`The sum of values should be ${expectedSum}!`)
}

// @ts-ignore noImplicitReturn
const numberOfValues = (elements, expectedCount) => {
  if (!elements) return undefined // No prop type errors
  if (elements.length !== expectedCount) {
    return new Error(`Expected ${expectedCount} values, found ${elements.length}!`)
  }
}

// @ts-ignore noImplicitReturn
const deprecate = (props, { name, oldAPI, replacement }) => {
  let message = `Hi 👋, '${oldAPI || name}' prop will be deprecated in 1.0.0`
  if (replacement) message += ` You might want to use '${replacement}' instead.`
  if (props[name]) return new Error(message)
}

export { onlyOneOf, sumOfElements, numberOfValues, deprecate }
