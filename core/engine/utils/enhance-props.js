const enhanceProps = component => {
  /* make modifications to prop types to improve documentation */
  if (component.props) {
    Object.values(component.props).forEach(prop => {
      /* remove redundant quotes from default value of type string */
      if (prop.defaultValue) {
        if (typeof prop.defaultValue.value === 'string') {
          prop.defaultValue.value = prop.defaultValue.value.replace(/^'(.*)'$/, '$1')
        }
      }
      /* remove redundant quotes from enum values in prop types */
      if (prop.type.name === 'enum' && Array.isArray(prop.type.value)) {
        prop.type.value.forEach(element => {
          element.value = element.value.replace(/^'(.*)'$/, '$1')
        })
      }
      /* add required field for custom shapes */
      if (prop.type.name === 'custom' && prop.type.raw.includes('.isRequired')) {
        prop.required = true
        prop.type.raw = prop.type.raw.replace('.isRequired', '')
      }
      // way too cosmos specific:
      // if (prop.type.name === 'enum' && prop.type.value === '__ICONNAMES__') {
      //   /* create an array of all the icons with an empty string as first element */
      //   prop.type.value = [{ value: '' }].concat(Object.keys(icons).map(value => ({ value })))
      // }
      //
      // if (prop.type.name === 'enum' && prop.type.value === '__COLORS__') {
      //   /* create an array of all the base colors */
      //   prop.type.value = Object.keys(colors.base).map(value => ({ value }))
      // }
    })
  }
  return component
}
module.exports = enhanceProps
