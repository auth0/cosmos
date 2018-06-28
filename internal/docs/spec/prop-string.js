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
      Example: disabled="true" results in <Button disabled>
    */
    if (propData[name].type.name === 'bool' && propData[name].value === 'true') {
      propString += ` ${name}`
      return true
    }

    /*
      Case 3: Array
      Arrays should be wrapped in {}
      Example: <Switch accessibleLabels={['ON', 'OFF']}>
    */

    if (propData[name].type.name === 'arrayOf') {
      propString += ` ${name}={${propData[name].value}}`
      return true
    }

    /*
      Case 4: Numbers
      Numbers are wrapped in {}
      Example: <Icon size={20}>
    */

    if (propData[name].type.name === 'number') {
      propString += ` ${name}={${propData[name].value}}`
      return true
    }

    /*
      Case 5: Strings
      They should be printed wrapped in double quotes "string"
      Example: <Button icon="copy">
    */

    if (propData[name].type.name === 'string' && propData[name].value.length > 0) {
      propString += ` ${name}="${propData[name].value}"`
      return true
    }

    /*
      Case 6: Enum
      The value for enum should be printed depending on their value
      Currently supports number and string
      Example: <From layout="label-on-left">, <Header size={2}>
    */

    if (propData[name].type.name === 'enum') {
      if (propData[name].value === 'number') {
        propString += ` ${name}={${propData[name].value}}`
        return true
      } else if (typeof propData[name].value === 'string' && propData[name].value.length > 0) {
        propString += ` ${name}="${propData[name].value}"`
        return true
      }
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
