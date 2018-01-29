import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '../../../tokens'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  > * {
    flex: 1;
    margin: 0 ${spacing.xsmall};
  }
`

const Stack = props => {
  return <StyledStack>{props.children}</StyledStack>
}

Stack.propTypes = {
  /** components to stack horizontally */
  children: PropTypes.arrayOf(PropTypes.element)
}

Stack.defaultProps = {}

export default Stack
