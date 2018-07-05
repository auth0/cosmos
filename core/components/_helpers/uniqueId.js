const id = (prefix = '') => {
  prefix = prefix.toLowerCase().replace(/ /g, '_')

  const hash = Math.random()
    .toString(36)
    .substring(5)

  return prefix + '-' + hash
}

export default id
