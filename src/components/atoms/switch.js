import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc } from '../../tokens/'

const StyledSwitch = styled.span``

const Checkbox = styled.input`
  width: 0;
  opacity: 0;
`
const Label = styled.label`
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

  &:active {
    &:before {
      width: 30px;
      left: ${props => (props.on ? '0' : '6px')};
    }
  }
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
    this.setState(currentState => ({ on: !currentState.on }))
  }
  render() {
    /*
      The checkbox is controlled by the component state
      and is itself a readOnly component
    */
    return (
      <StyledSwitch>
        <Checkbox type="checkbox" checked={this.state.on} readOnly />
        <Label onClick={this.onToggle.bind(this)} on={this.state.on} />
      </StyledSwitch>
    )
  }
}

Switch.propTypes = {
  /** State of the toggle */
  on: PropTypes.bool,
  /** Locked switch */
  readOnly: PropTypes.bool
}

Switch.defaultProps = {
  on: false,
  readOnly: false
}

export default Switch
