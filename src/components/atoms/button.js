import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from '../../tokens/'
import onlyOneOf from '../_helpers/only-one-of-validator'

const config = {
  default: {
    text: colors.base,
    background: colors.grayLightest,
    border: colors.grayLightest,
    hoverBackground: colors.grayLight,
    hoverBorder: colors.grayLight,
    focusBackground: colors.grayMedium,
    focusBorder: colors.grayMedium
  },
  primary: {
    text: colors.white,
    background: colors.base,
    border: colors.base,
    hoverBackground: colors.grayDark,
    hoverBorder: colors.grayDark,
    focusBackground: colors.grayMedium,
    focusBorder: colors.grayMedium
  },
  transparent: {
    text: colors.base,
    background: colors.white,
    border: colors.base,
    hoverBackground: colors.grayLight,
    hoverBorder: colors.base,
    focusBackground: colors.grayMedium,
    focusBorder: colors.base
  },
  disabled: {
    text: colors.grayMedium,
    background: colors.grayLightest,
    border: colors.grayLightest,
    hoverBackground: colors.grayLightest,
    hoverBorder: colors.grayLightest,
    focusBackground: colors.grayLightest,
    focusBorder: colors.grayLightest
  }
}

const getAttributes = props => {
  if (props.primary) return config.primary
  else if (props.transparent) return config.transparent
  else if (props.disabled) return config.disabled
  else return config.default
}

const StyledButton = styled.button`
  min-width: 92px;
  box-sizing: border-box;

  text-transform: uppercase;
  letter-spacing: 1px;

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  color: ${props => getAttributes(props).text};

  padding: ${spacing.xsmall} ${spacing.small};
  margin: ${spacing.xsmall};
  margin-left: 0;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.25s, background 0.25s;

  &:hover {
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    background: ${props => getAttributes(props).focusBackground};
    border-color: ${props => getAttributes(props).focusBorder};
    outline: none;
  }
`

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>

Button.propTypes = {
  /** Use for primary call to action */
  primary: PropTypes.bool,
  /** Use for secondary call to action */
  transparent: PropTypes.bool,
  /** Disable button that does not validate constraint */
  disabled: PropTypes.bool,

  /** @ignore This is an internal prop only used for validation */
  _type: props => onlyOneOf(props, ['primary', 'transparent', 'disabled'])
}

Button.defaultProps = {
  primary: false,
  transparent: false,
  disabled: false
}

export default Button
