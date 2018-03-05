import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing } from 'auth0-cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'

const StyledLabel = styled.div`
  padding: ${spacing.xsmall};

  ${StyledHeading[4]} {
    margin: 0;
  }
`

const StyledRow = styled.div`
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  &:hover {
    background: ${colors.list.backgroundHover};
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
          <Heading size={4}>{props.label}</Heading>
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
