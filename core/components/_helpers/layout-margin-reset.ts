import * as React from 'react'
import { css } from '../styled'

export const LAYOUT_CHILDREN_CLASS_NAME = 'cosmos-layout-child'

export const applyLayoutChildClass = (children: JSX.Element) =>
  React.Children.map(children, (child) => {
    if (!child) { return null }
    return React.cloneElement(child, { className: LAYOUT_CHILDREN_CLASS_NAME })
  })

/**
 * Applies the margin reset depending on the prop value that comes
 * from the parent component.
 *
 * Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
 * This is a fix that will last until we remove margins from components.
 */
const applyMarginReset = (propName = 'disableMarginReset') => (props) => {
  const propValue = props[propName]
  const matchingValue = propValue !== 'undefined' ? '0' : null

  if (matchingValue) {
    return css`
      .cosmos-layout-child > * {
        margin: ${matchingValue};
      }

      .cosmos-layout-child > * > *:last-child {
        margin-bottom: ${matchingValue};
      }

      .cosmos-layout-child > * > *:first-child {
        margin-top: ${matchingValue};
      }
    `
  }
  return ''
}

export default applyMarginReset
