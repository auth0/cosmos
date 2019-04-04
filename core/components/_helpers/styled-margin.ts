import { spacing } from '../tokens'
const directions = ['top', 'bottom', 'left', 'right']

/**
 * Calculates the margin based on props.margin
 * @param {object} props
 * @return {string} css
 */

const margin = props => {
  const margin = props.margin || {}

  if (!props.margin) return ''

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
        value = rawValue + 'px'
      }

      styles += `margin-${direction}: ${value} !important;`
    }
  })
  return styles
}
export default margin
