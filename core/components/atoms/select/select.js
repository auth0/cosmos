import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { misc } from '@auth0/cosmos-tokens'
import { StyledInput } from '../_styled-input'

const StyledSelect = StyledInput.withComponent('select').extend`
  height: ${misc.input.default.height};
`

const Select = ({ options, ...props }) => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */
  if (props.readOnly) props.disabled = true

  return (
    <StyledSelect {...props} {...Automation('select')}>
      {/* First option will be selected if there is no value passed as a prop */}
      <option disabled hidden selected={!props.value} value="" {...Automation('select.option')}>
        {props.emptyLabel}
      </option>

      {options.map((option, index) => (
        <option key={index} value={option.value} {...Automation('select.option')}>
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
      value: PropTypes.any.isRequired
    })
  ).isRequired,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Value selected by default */
  value: PropTypes.any,
  /** onChange transparently passed to select */
  onChange: PropTypes.func,
  /** String to show when the first empty choice is selected */
  emptyLabel: PropTypes.string
}

Select.defaultProps = {
  readOnly: false,
  emptyLabel: ''
}

export default Select
export { StyledSelect }
