import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Button from '../../atoms/button'
import { spacing } from '../../../tokens'

const groupRadiusStyles = css`
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

const StyledButtonGroup = styled.div`
  display: inline-block;

  ${Button.Element} {
    margin-right: ${props => (props.compressed ? 0 : spacing.xsmall)};
  }

  ${props => (props.compressed ? groupRadiusStyles : null)};
`

const ButtonGroup = props => <StyledButtonGroup {...props}>{props.children}</StyledButtonGroup>

ButtonGroup.propTypes = {
  /** Make Buttons stick to each other */
  compressed: PropTypes.bool,
  /** Should container only Buttons */
  children: PropTypes.arrayOf(PropTypes.element)
}

ButtonGroup.defaultProps = {
  compressed: false
}

export default ButtonGroup
export { StyledButtonGroup }
