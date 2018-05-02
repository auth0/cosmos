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

const justifyContent = {
  horizontal: `margin-right: ${spacing.medium}`,
  vertical: `margin-bottom: ${spacing.small}`
}

const StyledRadioGroup = styled.div`
  ${StyledRadio} {
    display: ${props => (props.align === 'horizontal' ? 'inline-block' : 'table')};
    ${props => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`

const Radio = props => (
  <StyledRadio readOnly={props.readOnly}>
    <input
      type="radio"
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      readOnly
    />
    <CheckMark />
    <Label>{props.children}</Label>
  </StyledRadio>
)

Radio.propTypes = {
  /** The name for the radio */
  name: PropTypes.string.isRequired,
  /** The value for the radio */
  value: PropTypes.string.isRequired,
  /** If true, the radio will be disabled */
  readOnly: PropTypes.bool,
  /** If true, the radio will be selected */
  checked: PropTypes.bool,
  /** Callback function which is called when the user selects the radio */
  onChange: PropTypes.func
}

Radio.defaultProps = {
  readOnly: false,
  checked: false
}

const RadioGroup = props => (
  <StyledRadioGroup {...props}>
    {React.Children.map(props.children, child => {
      if (child.type === Radio)
        return React.cloneElement(child, {
          name: props.name,
          checked: props.value === child.props.value,
          readOnly: props.readOnly,
          onChange: props.handleChange
        })
      return child
    })}
  </StyledRadioGroup>
)

RadioGroup.propTypes = {
  /** The visual alignment of the radio group */
  align: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The value of the currently-selected radio */
  value: PropTypes.string
}

RadioGroup.defaultProps = {
  align: 'vertical'
}

Radio.Group = RadioGroup

export default Radio
export { StyledRadio, StyledRadioGroup }
