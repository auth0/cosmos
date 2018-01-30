import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing } from '../../../tokens'
import { Subheader } from '../../atoms/typography'

const StyledLabel = styled.div`
  padding: ${spacing.small};
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
  const children = React.Children.map(props.children, child => {
    if (child.type.displayName === 'Stack') {
      return React.cloneElement(child, { consistentWidth: true })
    } else return child
  })

  return (
    <StyledList>
      {props.label ? (
        <StyledLabel>
          <Subheader>{props.label}</Subheader>
        </StyledLabel>
      ) : null}
      {children.map((child, index) => <StyledRow key={index}>{child}</StyledRow>)}
    </StyledList>
  )
}

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
