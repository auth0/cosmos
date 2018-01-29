import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing } from '../../../tokens'
import { Subheader } from '../../atoms/typography'

const StyledRow = styled.div`
  border-bottom: 1px solid ${colors.base.grayLight};
  padding: ${spacing.xsmall};
`

const StyledList = styled.div`
  margin: ${spacing.large} 0;
`

const List = props => {
  return (
    <StyledList>
      {props.label ? (
        <StyledRow>
          <Subheader>{props.label}</Subheader>
        </StyledRow>
      ) : null}
      {props.children.map((child, index) => <StyledRow key={index}>{child}</StyledRow>)}
    </StyledList>
  )
}

List.propTypes = {
  /** header for list */
  label: PropTypes.string
}

List.defaultProps = {}

export default List
