import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'

const StyledInputElement = StyledInput.extend`
  height: 44px;
`

const TextInput = props => {
  if (props.masked) {
    const { value } = props
    const length = value && value.length > 0 ? value.length : 8
    const maskedValue = new Array(length).join('•')
    return (
      <StyledInput {...props} value={null} defaultValue={null} placeholder={maskedValue} readOnly />
    )
  }
  return <StyledInput {...props} />
}

TextInput.propTypes = {
  /** Hide input, similar to passwords but for other private information. Implies readOnly. */
  masked: PropTypes.bool,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,
  /** Text to display when the input is empty */
  placeholder: PropTypes.string,
  /** The value for the field */
  value: PropTypes.string
}

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null
}

export default TextInput
export { StyledInput }
