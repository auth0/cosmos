const onlyOneOf = (props, list) => {
  let matches = []
  list.map(item => {
    if (props[item]) matches.push(item)
    return item
  })
  if (matches.length > 1) return new Error(`Can not use ${matches.join(' + ')} together!`)
}

export default onlyOneOf
