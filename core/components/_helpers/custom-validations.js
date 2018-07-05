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

export { onlyOneOf, sumOfElements, numberOfValues }
