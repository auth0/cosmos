import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon, { StyledIcon } from './icon'
import { colors } from '../../tokens'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  ${StyledIcon} {
    line-height: 1em;
  }
`

const Content = styled.div`
  margin-top: 1em;
`

const EmptyState = props => {
  return (
    <Wrapper>
      <Icon type={props.icon} size={100} color={colors.grayMedium} />
      <Content>{props.children}</Content>
    </Wrapper>
  )
}

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  icon: PropTypes.string.isRequired
}

export default EmptyState
