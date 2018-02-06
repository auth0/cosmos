import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '../../../tokens/'

const StyledActions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledItem = styled.li`
  display: inline-block;
  margin-right: ${spacing.xsmall};
  &:last-child {
    margin-right: 0;
  }
`

const Actions = props => {
  const children = React.Children.map(props.children, child => {
    return <StyledItem>{child}</StyledItem>
  })

  return <StyledActions>{children}</StyledActions>
}

Actions.propTypes = {}

Actions.defaultProps = {}

export default Actions
