import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import Button from '../../atoms/button'
import { spacing } from '@auth0/cosmos-tokens'

const ButtonGroup = props => (
  <ButtonGroup.Element {...props} {...Automation('button-group')}>
    {React.Children.map(props.children, (child, index) => (
      <ButtonGroup.Child
        key={index}
        first={index === 0}
        last={index === props.children.length - 1}
        compressed={props.compressed}
      >
        {child}
      </ButtonGroup.Child>
    ))}
  </ButtonGroup.Element>
)

const firstButtonStyles = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
const lastButtonStyles = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const middleButtonStyles = css`
  border-radius: 0;
`

ButtonGroup.Child = styled.span`
  > ${Button.Element} {
    ${props => (props.compressed && props.first ? firstButtonStyles : null)};
    ${props => (props.compressed && props.last ? lastButtonStyles : null)};
    ${props => (props.compressed && !props.first && !props.last ? middleButtonStyles : null)};
  }
`

const justifyContent = {
  left: 'flex-start',
  right: 'flex-end'
}

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

ButtonGroup.Element = styled.div`
  display: flex;
  justify-content: ${props => justifyContent[props.align]};

  & > ${ButtonGroup.Child} {
    ${marginForButton};
  }
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
