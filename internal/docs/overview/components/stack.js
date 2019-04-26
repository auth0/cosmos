import React from 'react'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos/tokens'

const justifyContent = {
  fill: 'space-between',
  left: 'flex-start',
  right: 'flex-end'
}

const StyledStack = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: bottom;
  justify-content: ${(props) => justifyContent[props.align]};

  > * {
    flex: ${(props) => (props.align === 'fill' ? 1 : 'none')};
    align-self: center;
    margin-right: ${(props) => (props.align === 'fill' ? spacing.xsmall : 0)};
  }
  > *:last-child {
    margin-right: 0;
  }
`

const StackedItem = styled.div`
  flex-basis: ${(props) => props.width}%;
  display: flex;
  justify-content: center;
`

/*
  wrap children in col
  flex-basis makes flex redundant, have one
  accept widths on parent = Stack
*/

const Stack = (props) => {
  let children
  if (props.align === 'fill') {
    children = React.Children.map(props.children, (child, index) => {
      let width = 0
      if (props.widths) width = `${props.widths[index]}` || 0

      return (
        <StackedItem key={index} width={width}>
          {child}
        </StackedItem>
      )
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

Stack.defaultProps = {
  align: 'fill'
}

export default Stack
