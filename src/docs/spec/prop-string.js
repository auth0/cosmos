const getPropString = propData => {
  let propString = ''

  /* filter out internal props, they start with _underscore */
  const propNames = Object.keys(propData).filter(key => key[0] !== '_')

  /*
    react-docgen gives us values as string instead of booleans
    this can lead to strange values getting into props

    we parse these values to decide what to put in
  */
  propNames.forEach(name => {
    /*
      Case 1: Falsy boolean
      These should be ignored: primary="false" / name="null"
     */
    if (['null', 'false'].includes(propData[name].value)) {
      return false
    }

    /*
      Case 2: Truthy boolean
      We only need to drop the key
      Example: primary="true" results in <Button primary>
    */
    if (propData[name].type.name === 'bool' && propData[name].value === 'true') {
      propString += ` ${name}`
      return true
    }

    /*
      Case 3: Numbers
      Numbers are wrapped in in {}
      Example: <Icon size={20}>
    */

    if (propData[name].type.name === 'number') {
      propString += ` ${name}={${propData[name].value}}`
      return true
    }

    /*
      Case 4: Strings
      They should be printed wrapped in double quotes "string"
      Example: <Button icon="copy">
    */

    if (typeof propData[name].value === 'string') {
      propString += ` ${name}="${propData[name].value}"`
      return true
    }

    /*
      Default case:
      If something reaches here, we probably don't know what to do with yet.
      Wrapping the value in {} is a safe output
    */
    if (propData[name].value) {
      propString += ` ${name}={${propData[name].value}}`
      return true
    }
  })

  return propString
}

export default getPropString
