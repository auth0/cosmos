import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'

const List = props => {
  return (
    <List.Element
      {...Automation('list')}
      margin={{ top: 'large', bottom: 'large', left: 0, right: 0 }}
    >
      {props.label ? (
        <List.Label>
          <Heading size={4} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
            {props.label}
          </Heading>
        </List.Label>
      ) : null}
      {React.Children.map(props.children, child => (
        <List.Row {...Automation('list.item')}>{child}</List.Row>
      ))}
    </List.Element>
  )
}

List.Element = styled.ul`
  ${containerStyles};
`

List.Label = styled.div`
  padding: ${spacing.xsmall};
`

List.Row = styled.li`
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  &:hover {
    background: ${colors.list.backgroundHover};
  }
`

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
