import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Link, { StyledLink } from '../link'
import Text from '../text'
import Paragraph, { StyledParagraph } from '../paragraph'
import FreeText from '../../_helpers/free-text'
import { deprecate } from '../../_helpers/custom-validations'
import Automation from '../../_helpers/automation-attribute'

const ReadMoreLink = styled(Link)`
  color: ${props => colors.alert[props.type].text};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  margin-left: ${spacing.xxsmall};
`

class Alert extends React.Component {
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
        <Alert.Element type={this.props.type} {...Automation('alert')}>
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
  }
`

Alert.Element = styled.div`
  padding: ${spacing.small} ${spacing.small};
  background-color: ${props => colors.alert[props.type].background};
  border-radius: 3px;
  position: relative;
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
    padding: ${spacing.small} ${spacing.small};
  }
`

Alert.propTypes = {
  /** Style of alert to show */
  type: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger']).isRequired,

  /** Title text (in bold) */
  title: PropTypes.string,

  /** @deprecated Details */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Link to documentation */
  link: PropTypes.string,

  /** Allow user to dismiss this alert */
  dismissible: PropTypes.bool,

  /** Function to call on dismissal */
  onDismiss: PropTypes.func,

  /** Automatically dismiss after N seconds */
  dismissAfterSeconds: PropTypes.number,

  _error: props => deprecate(props, { name: 'text', replacement: 'children' })
}

Alert.defaultProps = {
  type: 'default',
  dismissible: true
}

export default Alert
