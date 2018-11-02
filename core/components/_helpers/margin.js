import { spacing } from '@auth0/cosmos-tokens'

const directions = ['top', 'bottom', 'left', 'right']

const margin = ({ margin = {} }) => {
  let styles = ''

  directions.map(direction => {
    if (typeof margin[direction] !== 'undefined') {
      let rawValue = margin[direction]
      let value

      /*
        if the value is a string, it's either a token (xsmall)
        or has units (8em)

        if it's a number, we assume it's pixels and pass it through
      */
      if (typeof rawValue === 'string') {
        if (spacing[rawValue]) value = spacing[rawValue]
        else value = rawValue
      } else {
        value = rawValue
      }

      // syntax: margin-top: margin.top
      styles += `margin-${direction}: ${value};`
    }
  })
  return styles
}

export default margin
