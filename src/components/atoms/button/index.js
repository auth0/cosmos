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
  secondary: {
    text: colors.button.secondaryText,
    icon: colors.button.secondaryIcon,
    background: colors.button.secondaryBackground,
    border: colors.button.secondaryBorder,
    hoverBackground: colors.button.secondaryBackgroundHover,
    hoverBorder: colors.button.secondaryBorderHover,
    focusBackground: colors.button.secondaryBackgroundFocus,
    focusBorder: colors.button.secondaryBorderFocus
  },
  cta: {
    text: colors.button.ctaText,
    icon: colors.button.ctaIcon,
    background: colors.button.ctaBackground,
    border: colors.button.ctaBorder,
    hoverBackground: colors.button.ctaBackgroundHover,
    hoverBorder: colors.button.ctaBorderHover,
    focusBackground: colors.button.ctaBackgroundFocus,
    focusBorder: colors.button.ctaBorderFocus
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

const sizes = {
  default: {
    lineHeight: '37px',
    minWidth: '96px',
    padding: spacing.small
  },
  large: {
    lineHeight: '45px',
    minWidth: '96px',
    padding: spacing.small
  },
  small: {
    lineHeight: '29px',
    minWidth: 'auto',
    padding: spacing.xsmall
  },
  compressed: {
    lineHeight: '33px',
    minWidth: 'auto',
    padding: spacing.small
  }
}

const getAttributes = props => {
  // Get the styles for the button's selected appearance.
  const appearanceStyles = appearances[props.appearance]
    ? appearances[props.appearance]
    : appearances.default

  // Get the styles for the button's selected size.
  const sizeStyles = sizes[props.size] ? sizes[props.size] : sizes.default

  // Merge the two style hashes together to create the base styles.
  let styles = { ...appearanceStyles, ...sizeStyles }

  // If the success state is set, override some of the styles.
  if (props.success) {
    styles = { ...styles, ...states.success }
  }

  // If the loading state is set, override some of the styles.
  if (props.loading) {
    styles.background = styles.hoverBackground
    styles.focusBackground = styles.hoverBackground
    styles.border = styles.hoverBorder
    styles.focusBorder = styles.hoverBorder
  }

  // If the button contains only an icon and no text, override some of the styles.
  if (props.icon && !props.text) {
    styles.padding = 0
    styles.minWidth = '36px'
  }

  return styles
}

const ButtonContent = props => {
  let content

  if (props.icon && props.text) {
    // The button contains both an icon and text.
    content = [
      <Icon key="icon" size={16} name={props.icon} color={getAttributes(props).icon} />,
      <Button.Text key="text">{props.text}</Button.Text>
    ]
  } else if (props.icon && !props.text) {
    // The button contains just an icon.
    content = <Icon size={16} name={props.icon} color={colors.button.linkIcon} />
  } else {
    // The button contains just text.
    content = <Button.Text>{props.text}</Button.Text>
  }

  const Element = props.href ? Button.LinkElement : Button.Element

  return <Element {...props}>{props.override || content}</Element>
}

const Button = ({ children, ...props }) => {
  let override

  // Some of the state properties will override the content of the button.
  if (props.success) {
    override = <Icon size={16} color={colors.base.white} name="check" type="success" />
  } else if (props.loading) {
    override = <Spinner inverse={props.primary} />
  }

  let button = <ButtonContent {...props} text={children} override={override} />

  // If a label was specified, wrap the Button in a Tooltip.
  if (props.label) {
    return <Tooltip content={props.label}>{button}</Tooltip>
  }

  return button
}

Button.Element = styled.button`
  display: inline-block;
  line-height: ${props => getAttributes(props).lineHeight};
  min-width: ${props => getAttributes(props).minWidth};
  box-sizing: border-box;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  color: ${props => getAttributes(props).text};

  padding: 0 ${props => getAttributes(props).padding};

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

Button.LinkElement = Button.Element.withComponent('a')

Button.Text = styled.span`
  display: inline-block;
  vertical-align: middle;
`

Button.propTypes = {
  /** The size of the button */
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),

  /** The visual style used to convey the button's purpose */
  appearance: PropTypes.oneOf(['default', 'primary', 'secondary', 'cta', 'link', 'destructive']),

  /** Name of icon */
  icon: PropTypes.string,

  /** Tooltip to show when the user hovers over the button */
  label: PropTypes.string,

  /** The URL to navigate to when the button is clicked */
  href: PropTypes.string,

  /** Specifies where to open the navigated document */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),

  /** Disables the button, changing the visual style and make it unable to be pressed */
  disabled: PropTypes.bool,

  /** Loading state when waiting for an action to complete */
  loading: PropTypes.bool,

  /** Successful state when action is completed successfuly */
  success: PropTypes.bool
}

Button.defaultProps = {
  size: 'default',
  appearance: 'default',
  icon: null,
  disabled: false,
  loading: false,
  success: false
}

export default Button
