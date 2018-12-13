import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, fonts, spacing, misc } from '@auth0/cosmos-tokens'

const height = '32px'

class Switch extends React.Component {
  static displayName = 'Switch'
  constructor(props) {
    super(props)
    this.state = { on: props.on }
  }
  onToggle(e) {
    e.preventDefault()
    e.stopPropagation()

    if (this.props.readOnly) return
    this.setState(currentState => {
      if (this.props.onToggle) this.props.onToggle(!currentState.on)
      return { on: !currentState.on }
    })
  }
  componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on })
  }
  render() {
    let [onLabel, offLabel] = this.props.accessibleLabels
    let elements = [
      <Checkbox
        type="checkbox"
        checked={this.state.on}
        readOnly
        id={this.props.id}
        key="switch-checkbox"
      />
    ]
    const label = (
      <Label labelPosition={this.props.labelPosition} key="switch-label">
        {this.state.on ? onLabel : offLabel}
      </Label>
    )
    const toggle = <Toggle on={this.state.on} readOnly={this.props.readOnly} key="switch-toggle" />

    if (this.props.labelPosition == 'left') {
      if (!this.props.hideAccessibleLabels) elements.push(label)
      elements.push(toggle)
    } else if (this.props.labelPosition == 'right') {
      elements.push(toggle)
      if (!this.props.hideAccessibleLabels) elements.push(label)
    }

    /*
      The checkbox is controlled by the component state
      and is itself a readOnly component
    */

    return (
      <Switch.Element onClick={this.onToggle.bind(this)} {...Automation('switch')}>
        {elements}
      </Switch.Element>
    )
  }
}

Switch.Element = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  height: ${height};
  position: relative;

  input:focus ~ ${Toggle} {
    box-shadow: 0 0 0 2px ${colors.base.blue};
  }
`

const Checkbox = styled.input`
  width: 0;
  opacity: 0;
  position: absolute;
`
const Toggle = styled.span`
  display: inline-block;
  width: 55px;
  height: ${height};
  border-radius: 21px;
  background: ${props => (props.on ? colors.base.green : colors.base.grayLight)};
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 6px;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background: ${colors.base.white};
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25), 0 4px 11px 0 rgba(0, 0, 0, 0.08),
      -1px 3px 3px 0 rgba(0, 0, 0, 0.14);
    transition: transform ${misc.animationDuration} ease, width ${misc.animationDuration},
      left ${misc.animationDuration};
    transform: translateX(${props => (props.on ? '20px' : 0)});
  }

  ${props =>
    props.readOnly
      ? css`
          opacity: 0.4;
        `
      : css`
          &:active {
            &:before {
              width: 30px;
              left: ${props => (props.on ? '0' : '6px')};
            }
          }
        `};
`

const Label = styled.label`
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.normal};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.text.secondary};
  margin-left: ${props => (props.labelPosition == 'left' ? '0' : spacing.small)};
  margin-right: ${props => (props.labelPosition == 'left' ? spacing.small : '0')};

  /* if the label is empty, then remove the node so it doesn't create a margin */
  &:empty {
    display: none;
  }
`

const StyledSwitch = Switch.Element

Switch.propTypes = {
  /** Function called on toggle */
  onToggle: PropTypes.func,
  /** State of the toggle */
  on: PropTypes.bool,
  /** Labels to show, import for accessibility */
  accessibleLabels: PropTypes.arrayOf(PropTypes.string),
  /** Hides accessibility labels */
  hideAccessibleLabels: PropTypes.bool,
  /** Locked switch */
  readOnly: PropTypes.bool,
  /** Label on left side */
  labelPosition: PropTypes.oneOf(['right', 'left'])
}

Switch.defaultProps = {
  onToggle: null,
  on: false,
  accessibleLabels: ['Enabled', 'Disabled'],
  hideAccessibleLabels: false,
  readOnly: false,
  labelPosition: 'right'
}

export default Switch
export { StyledSwitch }
