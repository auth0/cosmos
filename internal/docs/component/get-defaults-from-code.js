const REGEX_DEFAULTS_STR = /\s*defaults=(\{\s*){2}([\s\S]+?)(\s*\}){2}/

const getDefaultString = code => {
  const matches = code.match(REGEX_DEFAULTS_STR)
  return matches ? matches[2].trim() : null
}

const getDefaultsFromCode = code => {
  let values = {}

  // code ~ <Component defaults={{key1: "value1", key2: "value2"}}/>

  if (!REGEX_DEFAULTS_STR.test(code)) return values

  const defaultsString = getDefaultString(code)
  // string ~ key1: "value1", key2: "value2"

  defaultsString.split(',').forEach(pair => {
    // Split on the first ":" only (value may be a URL)
    const [key, value] = pair.split(/:(.+)/)
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

  const strippedCode = code.replace(REGEX_DEFAULTS_STR, '')
  // strippedCode ~ <Component />

  return strippedCode
}

export { getDefaultsFromCode, stripDefaultsFromDocs }
