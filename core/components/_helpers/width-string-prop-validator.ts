/**
 * Checks the string is a valid width.
 * @param {object} props
 * @param {string} propName
 * @param {string} componentName
 */
function widthString(props, propName: string, componentName: string) {
  function buildError(reason = 'The value should be a positive number plus the unit.') {
    const lines = [
      `The "${propName}" prop's value of the ${componentName} is invalid.`,
      reason,
      'Example: 200px, 40%.'
    ]

    return new Error(lines.join('\n'))
  }

  const prop = props[propName]
  if (!prop) return undefined // No prop type errors

  const expression = new RegExp(/(-?)([0-9]+(\.?)[0-9]+)(px|%)/)
  if (!expression.test(prop)) return buildError()

  const [text, sign, strNumber, unit] = prop.match(expression)
  const number = parseFloat(strNumber)

  const isNegativeNumber = sign === '-'
  const isRelativeWidthMoreThan100 = number > 100 && unit === '%'

  if (isNegativeNumber) return buildError('The number must be positive.')
  if (isRelativeWidthMoreThan100) return buildError('Relative widths are allowed up to 100%.')

  return undefined // No prop type errors
}

export default widthString
