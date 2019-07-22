import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import containerStyles from "../../_helpers/container-styles";
import FreeText from "../../_helpers/free-text";
import { rootProps } from "../../_helpers/root-props";
import styled, { css } from "../../styled";
import { colors, fonts, spacing } from "../../tokens";
import Icon, { __ICONNAMES__ } from "../icon";
import Link, { StyledLink } from "../link";
import Text from "../text";

export type IAlertElementProps = Partial<IAlertProps>
export type IAlertAppearance = 'default' | 'information' | 'success' | 'warning' | 'danger'

export interface IAlertProps {
  /** HTML ID of the component */
  id?: string
  appearance?: IAlertAppearance
  icon?: string
  title?: string | React.ReactNode
  /** @deprecated:children  */
  text?: string
  /** @deprecated:children  */
  link?: string
  dismissible?: boolean
  onDismiss?: () => void
  dismissAfterSeconds?: number
}

export interface IAlertState {
  visible: boolean
}

const ReadMoreLink = styled(Link)`
  color: ${props => colors.alert[props.appearance].text};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  margin-left: ${spacing.xxsmall};
`

class Alert extends React.Component<IAlertProps, IAlertState> {
  static defaultProps = {
    appearance: 'default',
    dismissible: true
  }

  static Element: any
  timer: any

  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  componentDidMount() {
    if (this.props.dismissAfterSeconds) {
      /* timer to auto dismiss the component */
      this.timer = window.setTimeout(this.dismiss, this.props.dismissAfterSeconds * 1000)
    }
  }

  componentWillUnmount() {
    /*
      clear timer on unmount
      we need to do this in case the user dismisses
      the alert before the timer gets to it
      otherwise we would try to setState on an unmounted
      component
    */
    if (this.timer) window.clearTimeout(this.timer)
  }

  dismiss = () => {
    this.setState({ visible: false })
    if (typeof this.props.onDismiss === 'function') this.props.onDismiss()
  }

  render() {
    const appearance = this.props.appearance

    if (this.state.visible) {
      return (
        <Alert.Element
          appearance={appearance}
          dismissible={this.props.dismissible}
          data-cosmos-appearance={appearance}
          {...Automation('alert')}
          {...rootProps(this.props)}
        >
          {this.props.icon && <Icon name={this.props.icon} color={iconColorMap[appearance]} />}
          <span>
            <Text type="strong">{this.props.title}</Text> <FreeText {...this.props} />
            {this.props.link && (
              <ReadMoreLink appearance="default" href={this.props.link} target="_blank">
                Read more
              </ReadMoreLink>
            )}
          </span>
          {this.props.dismissible && (
            <Cross onClick={this.dismiss} {...Automation('alert.dismiss')} />
          )}
        </Alert.Element>
      )
    } else return null
  }
}

const Cross = styled.a`
  cursor: pointer;
  font-size: 1.5em;
  line-height: 1;
  &:after {
    content: '×';
    font-weight: ${fonts.weight.bold};
  }
`

const styledForCross = css`
  padding-right: ${spacing.large};
`

Alert.Element = styled.div<IAlertElementProps>`
  ${containerStyles};
  padding: ${spacing.small} ${spacing.small};
  ${props => props.dismissible && styledForCross};

  background-color: ${props => colors.alert[props.appearance].background};
  color: ${props => colors.alert[props.appearance].text};
  border-radius: 3px;
  position: relative;
  display: flex;
  ${Icon.Element} {
    margin-right: 12px;
    position: relative;
    top: 1px;
    path {
      fill: ${props => colors.alert[props.appearance].text};
    }
  }
  ${StyledLink} {
    color: ${props => colors.alert[props.appearance].text};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  ${Cross} {
    position: absolute;
    right: 0;
    top: 0;
    color: ${props => colors.alert[props.appearance].text};
    opacity: 0.3;
    padding: ${spacing.small} ${spacing.small};
    &:hover {
      opacity: 0.5;
    }
  }
`

/*
  Icon only accepts colors from colors.base
  This is a map between alert types and base colors
*/
const iconColorMap = {
  default: 'default',
  information: 'blueDarker',
  success: 'greenDarker',
  warning: 'yellow',
  danger: 'redDarker'
}

export default Alert
