import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { css } from 'styled-components'

import { misc } from '@auth0/cosmos-tokens'
import { StyledInput } from '../_styled-input'

const disabledOpacity = 0.5
const PLACEHOLDER_VALUE = '__select_placeholder'

const disabledState = props =>
  props.disabled
    ? css`
        opacity: ${disabledOpacity};
      `
    : null

const StyledSelect = StyledInput.withComponent('select').extend`
  height: ${misc.input.default.height};
  ${disabledState}
`

const Select = ({ options, ...props }) => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */
  if (props.readOnly) props.disabled = true
  if (!(props.value || props.defaultValue)) props.value = PLACEHOLDER_VALUE

  return (
    <StyledSelect {...props} {...Automation('select')}>
      {/* First option will be selected if there is no value passed as a prop */}
      <option disabled hidden value={PLACEHOLDER_VALUE} {...Automation('select.option')}>
        {props.placeholder}
      </option>

      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          readOnly={option.disabled}
          disabled={option.disabled}
          {...Automation('select.option')}
        >
          {option.text}
        </option>
      ))}
    </StyledSelect>
  )
}

Select.propTypes = {
  /** Options to render inside select */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      disabled: PropTypes.bool
    })
  ),
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Value selected by default */
  value: PropTypes.any,
  /** onChange transparently passed to select */
  onChange: PropTypes.func,
  /** String to show when the first empty choice is selected */
  placeholder: PropTypes.string
}

Select.defaultProps = {
  disabled: false,
  placeholder: ''
}

export default Select
export { StyledSelect }
