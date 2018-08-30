import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

const CheckMark = styled.span``
const Label = styled.span``

const StyledCheckboxOption = styled.label`
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
    border-radius: 2px;
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
    width: 4px;
    height: 8px;
    border: solid ${colors.base.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 20%;
    top: 50%;
  }
`

const justifyContent = {
  horizontal: `margin-right: ${spacing.medium}`,
  vertical: `margin-bottom: ${spacing.small}`
}

const StyledCheckbox = styled.div`
  ${StyledCheckboxOption} {
    display: ${props => (props.align === 'horizontal' ? 'inline-block' : 'table')};
    ${props => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`

const Checkbox = props => (
  <StyledCheckboxOption readOnly={props.readOnly} {...Automation('checkbox')}>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      onChange={props.onChange}
      readOnly
    />
    <CheckMark />
    <Label>{props.children}</Label>
  </StyledCheckboxOption>
)

const CheckboxGroup = props => (
  <StyledCheckbox {...props} {...Automation('checkbox.group')}>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        name: props.name,
        defaultChecked: props.selected.indexOf(child.props.value) > -1,
        checked: props.checked,
        readOnly: props.readOnly || child.props.readOnly,
        onChange: props.onChange
      })
    })}
  </StyledCheckbox>
)

Checkbox.propTypes = {
  /** The direction in which the options should be laid out */
  align: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The name of the checkbox */
  name: PropTypes.string.isRequired,
  /** The value of the currently-selected option */
  selected: PropTypes.arrayOf(PropTypes.string),
  /** If true, all options in the group will be disabled */
  readOnly: PropTypes.bool,
  /** Callback function which is called when the user selects an option */
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  align: 'vertical'
}

Checkbox.Group = CheckboxGroup

export default Checkbox
export { StyledCheckbox, StyledCheckboxOption }
