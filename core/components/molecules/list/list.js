import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '@auth0/cosmos-tokens'
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
    <StyledList {...Automation('list')}>
      {props.label ? (
        <StyledLabel>
          <Heading size={4}>{props.label}</Heading>
        </StyledLabel>
      ) : null}
      {React.Children.map(props.children, child => (
        <StyledRow {...Automation('list.item')}>{child}</StyledRow>
      ))}
    </StyledList>
  )
}

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
