const getDefaultString = code => {
  const string = code
    .split('defaults={{')[1]
    .split('}}>')[0]
    .split('}} ')[0]

  return string
}

const getDefaultsFromCode = code => {
  let values = {}

  // code ~ <Component defaults={{key1: "value1", key2: "value2"}}/>

  if (!code.includes('defaults')) return values

  const string = getDefaultString(code)
  // string ~ key1: "value1", key2: "value2"

  string.split(',').forEach(pair => {
    const [key, value] = pair.split(':')
    values[key.trim()] = JSON.parse(value.trim())
  })
  // values ~ { key1: "value1", key2: "value2" }

  return values
}

const stripDefaultsFromDocs = code => {
  // code ~ <Component defaults={{key1: "value1", key2: "value2"}}/>

  if (!code.includes('defaults')) return code

  const string = getDefaultString(code)
  // string ~ key1: "value1", key2: "value2"

  const strippedCode = code.replace(` defaults={{${string}}}`, '')
  // strippedCode ~ <Component />

  return strippedCode
}

export { getDefaultsFromCode, stripDefaultsFromDocs }
