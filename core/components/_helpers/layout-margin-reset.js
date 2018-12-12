import React from 'react'
import { css } from '@auth0/cosmos/styled'

export const LAYOUT_CHILDREN_CLASS_NAME = 'cosmos-layout-child'

export const applyLayoutChildClass = children =>
  React.Children.map(children, child =>
    React.cloneElement(child, { className: LAYOUT_CHILDREN_CLASS_NAME })
  )

/**
 * Applies the margin reset depending on the prop value that comes
 * from the parent component.
 *
 * Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
 * This is a fix that will last until we remove margins from components.
 */
const applyMarginReset = (propName = 'marginReset') => props => {
  const propValue = props[propName]
  const matchingValue = propValue === 'reset' ? '0' : false

  if (matchingValue)
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
  return ''
}

export default applyMarginReset
