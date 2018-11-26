import * as React from 'react'
import styled, { css } from 'styled-components'
import { fonts, colors, spacing } from '@auth0/cosmos-tokens'
import Link, { StyledLink } from '../link'
import Text from '../text'
import Paragraph, { StyledParagraph } from '../paragraph'
import FreeText from '../../_helpers/free-text'
import Automation from '../../_helpers/automation-attribute'
import Icon, { __ICONNAMES__ } from '../icon'

const ReadMoreLink = styled(Link)`
  color: ${props => colors.alert[props.type].text};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  margin-left: ${spacing.xxsmall};
`

interface IAlertProps {
  /**
   * Style of alert to show
   * */
  type: 'default' | 'information' | 'success' | 'warning' | 'danger'

  /**
   * Name of the icon
   * */
  icon?: string

  /**
   * Title text (in bold)
   * */
  title?: string

  /**
   * @deprecated Details
   * */
  text: React.ReactNode

  /**
   * Link to documentation
   * */
  link?: string

  /**
   * Allow user to dismiss this alert
   * */
  dismissible?: boolean

  /**
   * Function to call on dismissal
   * */
  onDismiss?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Automatically dismiss after N seconds
   * */
  dismissAfterSeconds?: number
}

class Alert extends React.Component<IAlertProps> {
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
    if (this.state.visible) {
      return (
        <Alert.Element
          type={this.props.type}
          dismissible={this.props.dismissible}
          {...Automation('alert')}
        >
          {this.props.icon && <Icon name={this.props.icon} color={iconColorMap[this.props.type]} />}
          <Paragraph>
            <Text type="strong">{this.props.title}</Text> <FreeText {...this.props} />
            {this.props.link && (
              <ReadMoreLink type="default" href={this.props.link} target="_blank">
                Read more
              </ReadMoreLink>
            )}
          </Paragraph>
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

Alert.Element = styled.div`
  padding: ${spacing.small} ${spacing.small};
  ${props => props.dismissible && styledForCross};

  background-color: ${props => colors.alert[props.type].background};
  border-radius: 3px;
  position: relative;
  display: flex;
  ${Icon.Element} {
    margin-right: 12px;
    position: relative;
    top: 1px;
    path {
      fill: ${props => colors.alert[props.type].text};
    }
  }
  ${StyledParagraph} {
    margin: 0;
    color: ${props => colors.alert[props.type].text};
  }
  ${StyledLink} {
    color: ${props => colors.alert[props.type].text};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
  ${Cross} {
    position: absolute;
    right: 0;
    top: 0;
    color: ${props => colors.alert[props.type].text};
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

Alert.defaultProps = {
  type: 'default',
  dismissible: true
}

export default Alert
