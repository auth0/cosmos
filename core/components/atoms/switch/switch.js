import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, fonts, spacing, misc } from '@auth0/cosmos-tokens'

const height = '32px'

const StyledSwitch = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: ${height};
  position: relative;
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
  vertical-align: top;
  line-height: ${height};
  font-size: ${fonts.size.small};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.text.secondary};
  padding-left: ${spacing.small};
`

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { on: props.on }
  }
  onToggle() {
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
    /*
      The checkbox is controlled by the component state
      and is itself a readOnly component
    */
    return (
      <StyledSwitch onClick={this.onToggle.bind(this)} {...Automation('switch')}>
        <Checkbox type="checkbox" checked={this.state.on} readOnly id={this.props.id} />
        <Toggle on={this.state.on} readOnly={this.props.readOnly} />
        <Label>{this.state.on ? onLabel : offLabel}</Label>
      </StyledSwitch>
    )
  }
}

Switch.propTypes = {
  /** Function called on toggle */
  onToggle: PropTypes.func,
  /** State of the toggle */
  on: PropTypes.bool,
  /** Labels to show, import for accessibility */
  accessibleLabels: PropTypes.arrayOf(PropTypes.string),
  /** Locked switch */
  readOnly: PropTypes.bool
}

Switch.defaultProps = {
  onToggle: null,
  on: false,
  accessibleLabels: ['Enabled', 'Disabled'],
  readOnly: false
}

export default Switch
export { StyledSwitch }
