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

/*
  In compressed mode, the buttons stick together,
  so only the first and last corners should be rounded.

  With a tooltip, the button is wrapped with Tooltip.Trigger
  followed by a Tooltip.Element

  This makes rounder corners break and is fixed by adding
  very Tooltip specific code here
*/
const groupRadiusStyles = css`
  ${Button.Element}:first-child:not(:last-child),
  ${Tooltip.Trigger}:first-child > ${Button.Element} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${Button.Element}:last-child:not(:first-child),
  ${Tooltip.Trigger}:nth-last-child(2) > ${Button.Element} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ${Button.Element}:not(:first-child):not(:last-child),
  ${Tooltip.Trigger}:not(:first-child):not(:nth-last-child(2)) > ${Button.Element} {
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

  & > ${Button.Element} {
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
