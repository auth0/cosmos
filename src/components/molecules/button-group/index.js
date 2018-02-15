import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Button from '../../atoms/button'
import { spacing } from '../../../tokens'

const iconsOnlyStyles = css`
  ${Button.Element}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${Button.Element}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ${Button.Element}:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`

const Wrapper = styled.div`
  ${Button.Element} {
    margin-right: ${props => (props.iconsOnly ? 0 : spacing.small)};
  }

  ${props => (props.iconsOnly ? iconsOnlyStyles : null)};
`

const ButtonGroup = props => {
  let iconsOnly = true

  React.Children.forEach(props.children, child => {
    if (child.props.children) iconsOnly = false
  })

  return <Wrapper iconsOnly={iconsOnly}>{props.children}</Wrapper>
}

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

ButtonGroup.defaultProps = {}

export default ButtonGroup
