import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { deprecate } from '../../_helpers/custom-validations'

import { colors, fonts, spacing, misc } from '@auth0/cosmos-tokens'

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
      if (this.props.onChange) this.props.onChange(!currentState.on)
      else if (this.props.onToggle) this.props.onToggle(!currentState.on)

      return { on: !currentState.on }
    })
  }
  componentWillReceiveProps(newProps) {
    if (newProps.on !== this.state.on) this.setState({ on: newProps.on })
  }
  render() {
    let [onLabel, offLabel] = this.props.accessibleLabels

    const checkbox = (
      <Checkbox type="checkbox" checked={this.state.on} readOnly id={this.props.id} />
    )

    let elements = <React.Fragment>{checkbox}</React.Fragment>

    const label = (
      <Label labelPosition={this.props.labelPosition} key="switch-label">
        <span aria-hidden={this.state.on}>{offLabel}</span>
        <span aria-hidden={!this.state.on}>{onLabel}</span>
      </Label>
    )
    const toggle = <Toggle on={this.state.on} readOnly={this.props.readOnly} key="switch-toggle" />

    if (this.props.labelPosition == 'left') {
      elements = (
        <React.Fragment>
          {checkbox}
          {this.props.hideAccessibleLabels ? null : label}
          {toggle}
        </React.Fragment>
      )
    } else if (this.props.labelPosition == 'right') {
      elements = (
        <React.Fragment>
          {checkbox}
          {toggle}
          {this.props.hideAccessibleLabels ? null : label}
        </React.Fragment>
      )
    }

    /*
      The checkbox is controlled by the component state
      and is itself a readOnly component
    */

    return (
      <Switch.Element onClick={this.onToggle.bind(this)} {...Automation('switch')} {...this.props}>
        {elements}
      </Switch.Element>
    )
  }
}

Switch.Element = styled.span`
  --switch-height: 32px;

  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  height: var(--switch-height);
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
  height: var(--switch-height);
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
  height: var(--switch-height);

  span {
    display: block;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.normal};
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${colors.text.secondary};

    margin-left: ${props => (props.labelPosition == 'left' ? '0' : spacing.small)};
    margin-right: ${props => (props.labelPosition == 'left' ? spacing.small : '0')};

    /*
    In order to make the switch always the same width
    we are setting a fixed height and overlapping the switch labels
    */
    height: var(--switch-height);
    line-height: var(--switch-height);

    &:last-child {
      /* Moves the second label up to overlap the first */
      margin-top: calc(var(--switch-height) * -1);
    }

    &[aria-hidden='true'] {
      visibility: hidden;
    }
    /* if the label is empty, then remove the node so it doesn't create a margin */
    &:empty {
      display: none;
    }
  }
`

const StyledSwitch = Switch.Element

Switch.propTypes = {
  /** @deprecatede:onChange Function called on toggle */
  onToggle: PropTypes.func,
  /** Function called when value changes */
  onChange: PropTypes.func,
  /** State of the toggle */
  on: PropTypes.bool,
  /** Labels to show, import for accessibility */
  accessibleLabels: PropTypes.arrayOf(PropTypes.string),
  /** Hides accessibility labels */
  hideAccessibleLabels: PropTypes.bool,
  /** Locked switch */
  readOnly: PropTypes.bool,
  /** Label on left side */
  labelPosition: PropTypes.oneOf(['right', 'left']),

  /** deprecations */
  _onToggle: props => deprecate(props, { name: 'onToggle', replacement: 'onChange' })
}

Switch.defaultProps = {
  onToggle: null,
  onChange: null,
  on: false,
  accessibleLabels: ['Enabled', 'Disabled'],
  hideAccessibleLabels: false,
  readOnly: false,
  labelPosition: 'right'
}

export default Switch
export { StyledSwitch }
