import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './input'

const StyledSelect = StyledInput.withComponent('select').extend`
  height: 40px;
`
/**
 * Use select when you want to limit the input options
 */

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
