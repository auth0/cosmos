import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from '../../tokens/'

const Checkbox = styled.input`
  width: 0;
  opacity: 0;
`
const Toggle = styled.span`
  display: inline-block;
  width: 55px;
  height: 32px;
  border-radius: 21px;
  background: ${props => (props.on ? colors.green : colors.grayLight)};
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
    background: ${colors.white};
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
  line-height: 32px;
  padding-left: ${spacing.small};
`

/**
 * Use Switch for boolean inputs
 */

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { on: props.on }
  }
  onToggle() {
    if (this.props.readOnly) return
    this.setState(currentState => {
      this.props.onToggle(!currentState.on)
      return { on: !currentState.on }
    })
  }
  render() {
    let [onLabel, offLabel] = this.props.accessibleLabels
    /*
      The checkbox is controlled by the component state
      and is itself a readOnly component
    */
    return (
      <span onClick={this.onToggle.bind(this)}>
        <Checkbox type="checkbox" checked={this.state.on} readOnly />
        <Toggle on={this.state.on} readOnly={this.props.readOnly} />
        <Label>{this.state.on ? onLabel : offLabel}</Label>
      </span>
    )
  }
}

Switch.propTypes = {
  /** Function called on toggle */
  onToggle: PropTypes.func.isRequired,
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
  accessibleLabels: ['ENABLED', 'DISABLED'],
  readOnly: false
}

export default Switch
