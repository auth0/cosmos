import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import Button from '../../atoms/button'
import Tooltip from '../../atoms/tooltip'
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

const marginForButton = props => {
  if (!props.children) return ''

  const isSingleChild = props.children.constructor.name !== 'Array'
  if (isSingleChild || props.compressed) return null

  const property = props.align === 'left' ? 'margin-right' : 'margin-left'
  const trailing = props.align === 'left' ? '&:last-child' : '&:first-child'

  return `
  ${property}: ${spacing.xsmall};

  ${trailing} {
    ${property}: 0;
  }
  `
}

const ButtonGroup = props => (
  <ButtonGroup.Element {...props} {...Automation('button-group')}>
    {props.children}
  </ButtonGroup.Element>
)

ButtonGroup.Element = styled.div`
  display: flex;
  justify-content: ${props => justifyContent[props.align]};

  & > ${Button.Element}, & > ${Tooltip.Trigger} {
    ${marginForButton};
  }

  ${props => (props.compressed ? groupRadiusStyles : null)};
`

const StyledButtonGroup = ButtonGroup.Element

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
