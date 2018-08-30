import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Automation from '../../_helpers/automation-attribute'

import Button from '../../atoms/button'
import { spacing } from '@auth0/cosmos-tokens'

const justifyContent = {
  left: 'flex-start',
  right: 'flex-end'
}

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
  display: flex;
  justify-content: ${props => justifyContent[props.align]};

  // Adjust tooltip offset when used inside button groups
  & .cosmos-tooltip {
    left: ${props => (props.align === 'left' ? '40%' : '58%')};
  }

  ${Button.Element} {
    ${props => (props.align === 'left' ? 'margin-right' : 'margin-left')}: ${props =>
    props.compressed ? 0 : spacing.xsmall};
  }

  ${props => (props.compressed ? groupRadiusStyles : null)};
`

const ButtonGroup = props => <StyledButtonGroup {...props} {...Automation('button-group')}>{props.children}</StyledButtonGroup>

ButtonGroup.propTypes = {
  /** Make Buttons are ordered with the correct space between them  */
  align: PropTypes.oneOf(['left', 'right']),
  /** Make Buttons stick to each other */
  compressed: PropTypes.bool,
  /** Should container only Buttons */
  children: PropTypes.node
}

ButtonGroup.defaultProps = {
  compressed: false,
  align: 'left'
}

export default ButtonGroup
export { StyledButtonGroup }
