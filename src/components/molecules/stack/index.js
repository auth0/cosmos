import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  > * {
    flex: 1;
    align-self: center;
    margin: 0 ${spacing.xsmall};
  }
`

const Stack = props => {
  return <StyledStack>{props.children}</StyledStack>
}

Stack.propTypes = {}

Stack.defaultProps = {}

/* Setting name explicitly because List depends on it */
Stack.displayName = 'Stack'

export default Stack
