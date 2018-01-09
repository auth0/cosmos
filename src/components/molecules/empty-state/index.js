import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon, { StyledIcon } from '../../atoms/icon'
import { Heading1 } from '../../atoms/typography'
import { colors, spacing } from '../../../tokens'

const EmptyState = props => {
  return (
    <EmptyState.Wrapper>
      <Heading1>{props.title}</Heading1>
      <Icon type={props.icon} size={100} color={colors.grayMedium} />
      <EmptyState.Content>{props.children}</EmptyState.Content>
    </EmptyState.Wrapper>
  )
}

EmptyState.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  ${StyledIcon} {
    line-height: 1em;
  }
`

EmptyState.Content = styled.div`
  margin-top: ${spacing.xsmall};
`

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default EmptyState
