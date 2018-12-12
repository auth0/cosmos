import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing } from '@auth0/cosmos-tokens'
import { sumOfElements, numberOfValues } from './custom-validations'

const alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
}

const justifyContent = {
  fill: 'space-between',
  'space-between': 'space-between',
  left: 'flex-start',
  right: 'flex-end'
}

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: ${props => alignItems[props.alignVertical]};
  justify-content: ${props => justifyContent[props.align]};
  line-height: inherit;
  > * {
    flex: ${props => (props.align === 'fill' ? 1 : 'none')};
    margin-right: ${props => (props.align === 'fill' ? spacing.xsmall : 0)};
  }
  > *:last-child {
    margin-right: 0;
  }
`

const StackedItem = styled.div`
  flex-basis: ${props => props.width}%;
  line-height: inherit;
`

/*
  wrap children in col
  flex-basis makes flex redundant, have one
  accept widths on parent = Stack
*/

const Stack = props => {
  let children
  if (props.align === 'fill' || props.align === 'space-between') {
    children = React.Children.map(props.children, (child, index) => {
      let width = 0
      if (props.widths) width = `${props.widths[index]}` || 0

      return <StackedItem width={width}>{child}</StackedItem>
    })
  } else {
    children = props.children
  }

  return (
    <StyledStack {...props} align={props.align}>
      {children}
    </StyledStack>
  )
}

Stack.propTypes = {
  /** Use align for stacking elements without margin between them */
  align: PropTypes.oneOf(['fill', 'left', 'right', 'space-between']),
  /** Vertically align */
  alignVertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  /** Element widths in % */
  widths: PropTypes.arrayOf(PropTypes.number),

  /* internal props only used for validation */
  /* sum of width values should be 100% */
  _sum: props => sumOfElements(props.widths, 100),
  /* the number of widths should match number of children */
  _numberOfValues: props => numberOfValues(props.widths, React.Children.count(props.children))
}

Stack.defaultProps = {
  align: 'fill',
  alignVertical: 'center'
}

export default Stack
