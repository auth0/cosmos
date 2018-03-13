import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, fonts, misc } from 'auth0-cosmos-tokens'
import Icon from '../icon'
import Spinner from '../spinner'
import Tooltip from '../tooltip'

const appearances = {
  default: {
    text: colors.button.defaultText,
    icon: colors.button.defaultIcon,
    background: colors.button.defaultBackground,
    border: colors.button.defaultBorder,
    hoverBackground: colors.button.defaultBackgroundHover,
    hoverBorder: colors.button.defaultBorderHover,
    focusBackground: colors.button.defaultBackgroundFocus,
    focusBorder: colors.button.defaultBorderFocus
  },
  primary: {
    text: colors.button.primaryText,
    icon: colors.button.primaryIcon,
    background: colors.button.primaryBackground,
    border: colors.button.primaryBorder,
    hoverBackground: colors.button.primaryBackgroundHover,
    hoverBorder: colors.button.primaryBorderHover,
    focusBackground: colors.button.primaryBackgroundFocus,
    focusBorder: colors.button.primaryBorderFocus
  },
  transparent: {
    text: colors.button.transparentText,
    icon: colors.button.transparentIcon,
    background: colors.button.transparentBackground,
    border: colors.button.transparentBorder,
    hoverBackground: colors.button.transparentBackgroundHover,
    hoverBorder: colors.button.transparentBorderHover,
    focusBackground: colors.button.transparentBackgroundFocus,
    focusBorder: colors.button.transparentBorderFocus
  },
  link: {
    text: colors.button.linkText,
    icon: colors.button.linkIcon,
    background: 'transparent',
    border: 'transparent',
    hoverText: colors.button.linkHover,
    hoverBackground: 'transparent',
    hoverBorder: 'transparent',
    focusText: colors.button.linkFocus,
    focusBackground: 'transparent',
    focusBorder: 'transparent'
  },
  destructive: {
    text: colors.button.destructiveText,
    icon: colors.button.destructiveIcon,
    background: colors.button.destructiveBackground,
    border: colors.button.destructiveBorder,
    hoverBackground: colors.button.destructiveBackgroundHover,
    hoverBorder: colors.button.destructiveBorderHover,
    focusBackground: colors.button.destructiveBackgroundFocus,
    focusBorder: colors.button.destructiveBorderFocus
  }
}

const states = {
  success: {
    text: colors.button.successText,
    icon: colors.button.successIcon,
    background: colors.button.successBackground,
    border: colors.button.successBorder,
    hoverBackground: colors.button.successBackgroundHover,
    hoverBorder: colors.button.successBorderHover,
    focusBackground: colors.button.successBackgroundFocus,
    focusBorder: colors.button.successBorderFocus
  }
}

const getAttributes = props => {
  if (props.success) return { ...states.success }

  const baseStyles = appearances[props.appearance]
    ? appearances[props.appearance]
    : appearances.default
  const styles = { ...baseStyles }

  /* overwrite for loading state */
  if (props.loading) {
    styles.background = styles.hoverBackground
    styles.focusBackground = styles.hoverBackground
    styles.border = styles.hoverBorder
    styles.focusBorder = styles.hoverBorder
  }

  return styles
}

const ButtonWithIcon = ({ children, ...props }) => (
  <Button.Element {...props} onlyIcon>
    <Icon size={16} name={props.icon} color={colors.button.linkIcon} />
  </Button.Element>
)

const ButtonWithText = ({ children, ...props }) => (
  <Button.Element {...props}>
    <Button.Content>{children}</Button.Content>
  </Button.Element>
)

const ButtonWithIconAndText = ({ children, ...props }) => (
  <Button.Element {...props}>
    <Icon size={16} name={props.icon} color={getAttributes(props).icon} />
    <Button.Content>{children}</Button.Content>
  </Button.Element>
)

const ButtonContent = ({ children, ...props }) => {
  if (props.icon && children) {
    return <ButtonWithIconAndText {...props}>{children}</ButtonWithIconAndText>
  } else if (props.icon && !children) return <ButtonWithIcon {...props}>{children}</ButtonWithIcon>
  else return <ButtonWithText {...props}>{children}</ButtonWithText>
}

const Button = ({ children, ...props }) => {
  let content

  if (props.success)
    content = <Icon size={16} color={colors.base.white} name="check" type="success" />
  else if (props.loading) content = <Spinner inverse={props.primary} />
  else content = children

  if (props.label) {
    return (
      <Tooltip content={props.label}>
        <ButtonContent {...props}>{content}</ButtonContent>
      </Tooltip>
    )
  }

  return <ButtonContent {...props}>{content}</ButtonContent>
}

Button.Element = styled.button`
  min-width: ${props => (props.onlyIcon ? '36px' : '96px')};
  box-sizing: border-box;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  color: ${props => getAttributes(props).text};

  padding: ${spacing.xsmall} ${props => (props.onlyIcon ? 0 : spacing.small)};

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color ${misc.animationDuration}, background ${misc.animationDuration};

  ${Icon.Element} {
    color: ${props => getAttributes(props).text};
  }

  &:hover {
    color: ${props => getAttributes(props).hoverText || getAttributes(props).text};
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorder};
  }

  &:focus {
    background: ${props => getAttributes(props).focusBackground};
    border-color: ${props => getAttributes(props).focusBorder};
    outline: none;
  }
`

Button.Content = styled.span`
  display: inline-block;
  vertical-align: middle;
`

Button.propTypes = {
  /** The visual style used to convey the button's purpose */
  appearance: PropTypes.oneOf(['default', 'primary', 'transparent', 'destructive', 'link']),

  /** Name of icon */
  icon: PropTypes.string,

  /** Tooltip to show when the user hovers over the button */
  label: PropTypes.string,

  /** Disables the button, changing the visual style and make it unable to be pressed */
  disabled: PropTypes.bool,

  /** Loading state when waiting for an action to complete */
  loading: PropTypes.bool,

  /** Successful state when action is completed successfuly */
  success: PropTypes.bool
}

Button.defaultProps = {
  appearance: 'default',
  icon: null,
  disabled: false,
  loading: false,
  success: false
}

export default Button
