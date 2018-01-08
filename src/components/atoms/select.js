import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './_styled-input'

const StyledSelect = StyledInput.withComponent('select').extend`
  height: 40px;
`

const Select = ({ options, ...props }) => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */
  if (props.readOnly) props.disabled = true

  return (
    <StyledSelect {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
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
      defaultSelected: PropTypes.bool
    })
  ).isRequired,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string
}

Select.defaultProps = {
  readOnly: false,
  error: null
}

export default Select
export { StyledSelect }
