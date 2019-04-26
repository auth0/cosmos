const getConflictingProps = (propData, propName) => {
  const conflictingProps = []

  /* validation prop types start with _ */
  const validations = Object.keys(propData).filter((key) => key[0] === '_')
  validations.forEach((key) => {
    /*
      we only know how to work with specific cases,
      this list will grow with time

    */

    const { name, raw } = propData[key].type

    if (name === 'custom' && raw.includes('onlyOneOf')) {
      /*
        The raw value looks like this:
        "props => onlyOneOf(props, ['A', 'B', 'C'])"
      */

      /*
        Pull out the array from the raw string
        TODO: Learn regex
      */
      const propNames = raw //    props => onlyOneOf(props, ['A', 'B', 'C'])
        .split('[')[1] //         'A', 'B', 'C'])
        .split(']')[0] //         'A', 'B', 'C'
        .replace(/'/g, '') //     A, B, C
        .split(', ') //           [A, B, C]

      if (propNames.includes(propName)) conflictingProps.push(...propNames)
    }
  })
  return conflictingProps
}

export default getConflictingProps
