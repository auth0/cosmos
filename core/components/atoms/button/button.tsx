import * as React from 'react'
import styled from '../../styled'
import { colors, spacing, fonts, misc } from '../../tokens'
import Icon, { __ICONNAMES__ } from '../icon'
import Spinner from '../spinner'
import Tooltip from '../tooltip'
import Automation from '../../_helpers/automation-attribute'

export interface IButtonAppearance {
  text: string
  icon: string
  background: string
  border: string
  hoverBackground: string
  hoverBorder: string
  hoverText?: string
  focusBackground: string
  focusBorder: string
  focusText?: string
  activeBackground?: string
  activeBorder?: string
  loadingInverse?: boolean
}

export interface IButtonAppearanceSet {
  default: IButtonAppearance
  primary: IButtonAppearance
  secondary: IButtonAppearance
  cta: IButtonAppearance
  destructive: IButtonAppearance
  link: IButtonAppearance
}

const appearances: IButtonAppearanceSet = {
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
    lineHeight: misc.button.large.height,
    minWidth: '96px',
    padding: spacing.medium
  },
  default: {
    lineHeight: misc.button.default.height,
    minWidth: '96px',
    padding: spacing.small
  },
  compressed: {
    lineHeight: misc.button.compressed.height,
    minWidth: 'auto',
    padding: spacing.small
  },
  small: {
    lineHeight: misc.button.small.height,
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

export type ButtonSize = 'default' | 'large' | 'small' | 'compressed'
export type ButtonAppearance = 'default' | 'primary' | 'secondary' | 'cta' | 'link' | 'destructive'
export type ButtonIconAlign = 'left' | 'right'
export type ButtonTarget = '_blank' | '_self' | '_parent' | '_top'
export type ButtonType = 'submit' | 'button' | 'reset'

export interface IButtonProps {
  /** HTML ID of the component */
  id?: string
  /** The size of the button */
  size?: ButtonSize
  /** The visual style used to convey the button's purpose */
  appearance?: ButtonAppearance
  /** Name of icon */
  icon?: string
  /** Name of icon */
  iconAlign?: ButtonIconAlign
  /** Tooltip to show when the user hovers over the button */
  label?: string
  /** The URL to navigate to when the button is clicked */
  href?: string
  /** Specifies where to open the navigated document */
  target?: ButtonTarget
  /** Disables the button|changing the visual style and make it unable to be pressed */
  disabled?: boolean
  /** Loading state when waiting for an action to complete */
  loading?: boolean
  /** Successful state when action is completed successfuly */
  success?: boolean
  /** Type of button */
  type?: ButtonType
  /** Handler to be called when the button is clicked */
  onClick?: Function
  /** Content of the button */
  children?: JSX.Element | string
  /** @internal */
  labelDefaultVisible?: boolean
}

const ButtonContent = props => {
  let content: JSX.Element[] = []

  let icon = props.success ? 'check' : props.icon
  const iconNode = icon ? (
    <Icon key="icon" size={16} name={icon} color={getAttributes(props).icon} />
  ) : null

  // Button left icon or loading
  if (props.loading)
    content.push(<Spinner key="spinner" inverse={getAttributes(props).loadingInverse} />)
  else if (iconNode && props.iconAlign === 'left') content.push(iconNode)

  // Button text
  if (props.text) content.push(<Button.Text key="text">{props.text}</Button.Text>)

  // Button right icon
  if (iconNode && props.iconAlign === 'right') content.push(iconNode)

  const Element = props.href ? Button.LinkElement : Button.Element

  return <Element {...props}>{content}</Element>
}

const Button = ({ children, ...props }: IButtonProps) => {
  let button = <ButtonContent {...Automation('button')} {...props} text={children} />

  // If a label was specified, wrap the Button in a Tooltip.
  if (props.label) {
    return (
      <Tooltip content={props.label} defaultVisible={props.labelDefaultVisible}>
        {button}
      </Tooltip>
    )
  }

  return button
}

Button.Element = styled.button`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  min-width: ${props => getAttributes(props).minWidth};
  min-height: ${props => getAttributes(props).lineHeight};
  line-height: ${props => getAttributes(props).lineHeight};

  /* Safari button margins reset */
  /* See https://github.com/google/material-design-lite/issues/4008 */
  margin-top: 0;
  margin-left: 0;

  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};

  background: ${props => getAttributes(props).background};
  border: 1px solid ${props => getAttributes(props).border};
  border-radius: ${misc.radius};

  color: ${props => getAttributes(props).text};

  padding: 0 ${props => getAttributes(props).padding};

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled || props.loading || props.success ? 'none' : null)};
  transition: border-color ${misc.animationDuration}, background ${misc.animationDuration};

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
  line-height: normal;
  /* Sub-pixel position adjustment */
  /* See: https://github.com/auth0/cosmos/pull/947 */
  /* See: https://github.com/auth0/cosmos/pull/1045 */
  margin-top: 1px;
`

Button.LinkElement = styled(Button.Element.withComponent('a'))`
  text-decoration: none;
`

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
