import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, spacing } from '@auth0/cosmos-tokens'

const CheckMark = styled.span``
const Label = styled.span``

const StyledRadio = styled.label`
  position: relative;
  cursor: pointer;
  padding-left: ${spacing.medium};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  pointer-events: ${props => (props.readOnly ? 'none' : null)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  ${Label} {
    opacity: ${props => (props.readOnly ? 0.5 : null)};
  }

  ${CheckMark} {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
    background-color: ${props =>
      props.readOnly ? colors.radio.backgroundDisabled : colors.radio.background};
    border: 1px solid
      ${props => (props.readOnly ? colors.radio.borderDisabled : colors.radio.border)};
    box-shadow: inset 0 1px 2px 0
      ${props => (props.readOnly ? colors.radio.shadowDisabled : colors.radio.shadow)};
    border-radius: 50%;
  }

  &:hover input ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${colors.radio.shadow};
  }

  input:checked ~ ${CheckMark} {
    background-color: ${colors.radio.backgroundSelected};
    border: 1px solid ${colors.radio.borderSelected};
  }

  ${CheckMark}:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ ${CheckMark}:after {
    display: block;
  }

  ${CheckMark}:after {
    background-color: ${colors.base.white};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 ${colors.radio.shadow};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

class Radio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.props.readOnly) return
    console.log('radio selected', e.currentTarget.value)
    this.setState({
      isChecked: e.currentTarget.value
    })
  }

  render() {
    return (
      <StyledRadio readOnly={this.props.readOnly}>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          defaultChecked={this.state.isChecked === this.props.value}
          onChange={this.handleChange}
          readOnly
        />
        <CheckMark />
        <Label>{this.props.children}</Label>
      </StyledRadio>
    )
  }
}

Radio.propTypes = {
  /** Name for input radio */
  name: PropTypes.string,
  /** Value for input radio */
  value: PropTypes.string,
  /** Disable and lock input radio */
  readOnly: PropTypes.bool,
  /** Selected input radio */
  isChecked: PropTypes.bool,
  /** Callback when input radio is selected */
  onChange: PropTypes.func
}

Radio.defaultProps = {
  name: null,
  readOnly: false,
  isChecked: false
}

export default Radio
export { StyledRadio }
