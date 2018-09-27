import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { subtract } from '../../_helpers/pixel-calc'
import { colors, spacing, fonts, misc } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../icon'
import Spinner, { StyledSpinner } from '../spinner'
import Tooltip from '../tooltip'
import Automation from '../../_helpers/automation-attribute'

const appearances = {
  default: {
    text: colors.button.default.text,
    icon: colors.button.default.icon,
    background: colors.button.default.background,
    border: colors.button.default.border,
    hoverBackground: colors.button.default.backgroundHover,
    hoverBorder: colors.button.default.borderHover,
    focusBackground: colors.button.default.backgroundFocus,
    focusBorder: colors.button.default.borderFocus,
    activeBackground: colors.button.default.backgroundActive,
    activeBorder: colors.button.default.borderActive,
    loadingInverse: false
  },
  primary: {
    text: colors.button.primary.text,
    icon: colors.button.primary.icon,
    background: colors.button.primary.background,
    border: colors.button.primary.border,
    hoverBackground: colors.button.primary.backgroundHover,
    hoverBorder: colors.button.primary.borderHover,
    focusBackground: colors.button.primary.backgroundFocus,
    focusBorder: colors.button.primary.borderFocus,
    activeBackground: colors.button.primary.backgroundActive,
    activeBorder: colors.button.primary.borderActive,
    loadingInverse: true
  },
  secondary: {
    text: colors.button.secondary.text,
    icon: colors.button.secondary.icon,
    background: colors.button.secondary.background,
    border: colors.button.secondary.border,
    hoverBackground: colors.button.secondary.backgroundHover,
    hoverBorder: colors.button.secondary.borderHover,
    focusBackground: colors.button.secondary.backgroundFocus,
    focusBorder: colors.button.secondary.borderFocus,
    activeBackground: colors.button.secondary.backgroundActive,
    activeBorder: colors.button.secondary.borderActive,
    loadingInverse: false
  },
  cta: {
    text: colors.button.cta.text,
    icon: colors.button.cta.icon,
    background: colors.button.cta.background,
    border: colors.button.cta.border,
    hoverBackground: colors.button.cta.backgroundHover,
    hoverBorder: colors.button.cta.borderHover,
    focusBackground: colors.button.cta.backgroundFocus,
    focusBorder: colors.button.cta.borderFocus,
    activeBackground: colors.button.cta.backgroundActive,
    activeBorder: colors.button.cta.borderActive,
    loadingInverse: true
  },
  destructive: {
    text: colors.button.destructive.text,
    icon: colors.button.destructive.icon,
    background: colors.button.destructive.background,
    border: colors.button.destructive.border,
    hoverBackground: colors.button.destructive.backgroundHover,
    hoverBorder: colors.button.destructive.borderHover,
    focusBackground: colors.button.destructive.backgroundFocus,
    focusBorder: colors.button.destructive.borderFocus,
    activeBackground: colors.button.destructive.backgroundActive,
    activeBorder: colors.button.destructive.borderActive,
    loadingInverse: true
  },
  link: {
    text: colors.button.link.text,
    icon: colors.button.link.icon,
    background: 'transparent',
    border: 'transparent',
    hoverText: colors.button.link.hover,
    hoverBackground: 'transparent',
    hoverBorder: 'transparent',
    focusText: colors.button.link.focus,
    focusBackground: 'transparent',
    focusBorder: 'transparent',
    loadingInverse: false
  }
}

const states = {
  success: {
    text: colors.button.success.text,
    icon: colors.button.success.icon,
    background: colors.button.success.background,
    border: colors.button.success.border,
    hoverBackground: colors.button.success.backgroundHover,
    hoverBorder: colors.button.success.borderHover,
    focusBackground: colors.button.success.backgroundFocus,
    focusBorder: colors.button.success.borderFocus,
    activeBackground: colors.button.success.backgroundActive,
    activeBorder: colors.button.success.borderActive
  }
}

const sizes = {
  large: {
    lineHeight: subtract(misc.button.large.height, '2px'),
    minWidth: '96px',
    padding: spacing.medium
  },
  default: {
    lineHeight: subtract(misc.button.default.height, '2px'),
    minWidth: '96px',
    padding: spacing.small
  },
  compressed: {
    lineHeight: subtract(misc.button.compressed.height, '2px'),
    minWidth: 'auto',
    padding: spacing.small
  },
  small: {
    lineHeight: subtract(misc.button.small.height, '2px'),
    minWidth: 'auto',
    padding: spacing.xsmall
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
    styles.activeBackground = styles.hoverBackground
    styles.border = styles.hoverBorder
    styles.focusBorder = styles.hoverBorder
    styles.activeBorder = styles.hoverBorder
  }

  // If the button contains only an icon and no text, override some of the styles.
  if (props.icon && !props.text) {
    styles.padding = spacing.xsmall
    styles.minWidth = '36px'
    styles.icon = colors.button.link.icon
  }

  return styles
}

const ButtonContent = props => {
  let content = []

  let icon = props.success ? 'check' : props.icon

  if (props.text) {
    content.push(<Button.Text key="text">{props.text}</Button.Text>)
  }

  if (props.loading) {
    content.unshift(<Spinner key="spinner" inverse={getAttributes(props).loadingInverse} />)
  } else if (icon) {
    const iconNode = <Icon key="icon" size={16} name={icon} color={getAttributes(props).icon} />

    if (props.iconAlign === 'left') content.unshift(iconNode)
    else content.push(iconNode)
  }

  const Element = props.href ? Button.LinkElement : Button.Element

  return <Element {...props}>{content}</Element>
}

const Button = ({ children, ...props }) => {
  let button = <ButtonContent {...props} text={children} {...Automation('button')} />

  // If a label was specified, wrap the Button in a Tooltip.
  if (props.label) {
    return <Tooltip content={props.label}>{button}</Tooltip>
  }

  return button
}

Button.Element = styled.button`
  min-height: ${props => getAttributes(props).lineHeight};
  line-height: ${props => getAttributes(props).lineHeight};
  box-sizing: border-box;

  text-transform: uppercase;
  white-space: nowrap;
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
  pointer-events: ${props => (props.disabled || props.loading || props.success ? 'none' : null)};
  transition: border-color ${misc.animationDuration}, background ${misc.animationDuration};

  display: flex;
  align-items: center;

  > *:not(:last-child):not(:only-child) {
    margin-right: ${props => (props.text ? spacing.xsmall : 0)};
  }

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

  &:active {
    background: ${props => getAttributes(props).activeBackground};
    border-color: ${props => getAttributes(props).activeBorder};
    outline: none;
  }
`

Button.Text = styled.span`
  display: inline-block;
  vertical-align: middle;
`

Button.LinkElement = Button.Element.withComponent('a').extend`
  display: table;
  text-decoration: none;

  ${Button.Text} {
    display: table-cell;
  }

  ${Icon.Element} {
    display: table-cell;
    vertical-align: middle;
    padding-right: ${props => (props.text ? spacing.xsmall : 0)};
  }
`

Button.propTypes = {
  /** The size of the button */
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),

  /** The visual style used to convey the button's purpose */
  appearance: PropTypes.oneOf(['default', 'primary', 'secondary', 'cta', 'link', 'destructive']),

  /** Name of icon */
  icon: PropTypes.oneOf(__ICONNAMES__),

  /** Name of icon */
  iconAlign: PropTypes.oneOf(['left', 'right']),

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
  iconAlign: 'left',
  disabled: false,
  loading: false,
  success: false
}

export default Button
