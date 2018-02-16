import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing } from '../../../tokens'
import Header from '../../atoms/header'

const StyledLabel = styled.div`
  padding: ${spacing.xsmall};
`

const StyledRow = styled.div`
  border-top: 1px solid ${colors.base.grayLight};
  padding: ${spacing.xsmall};
  &:hover {
    background: ${colors.base.grayLightest};
  }
`

const StyledList = styled.div`
  margin: ${spacing.large} 0;
`

const List = props => {
  return (
    <StyledList>
      {props.label ? (
        <StyledLabel>
          <Header size={4}>{props.label}</Header>
        </StyledLabel>
      ) : null}
      {React.Children.map(props.children, child => <StyledRow>{child}</StyledRow>)}
    </StyledList>
  )
}

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
