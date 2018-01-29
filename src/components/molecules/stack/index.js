import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  > * {
    /*
      We need to decide flex property for child based on it's parent
      More in https://github.com/auth0/cosmos/pull/191
    */
    flex: ${props => (props.consistentWidth ? 1 : 'auto')};
    align-self: center;
    margin: 0 ${spacing.xsmall};
  }
`

const Stack = props => {
  return <StyledStack {...props}>{props.children}</StyledStack>
}

Stack.propTypes = {}

Stack.defaultProps = {}

/* Setting name explicitly because List depends on it */
Stack.displayName = 'Stack'

export default Stack
