import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: ${props => (props.compressed ? 'start' : 'space-between')};
  > * {
    flex: ${props => (props.compressed ? 'none' : 1)};
    align-self: center;
    margin-right: ${props => (props.compressed ? 0 : spacing.xsmall)};
  }
  > *:last-child {
    margin-right: 0;
  }
`

const Stack = props => {
  return <StyledStack {...props}>{props.children}</StyledStack>
}

Stack.propTypes = {
  /** Use compressed for stacking elements without margin between them */
  compressed: PropTypes.bool
}

Stack.defaultProps = {
  compressed: false
}

export default Stack
