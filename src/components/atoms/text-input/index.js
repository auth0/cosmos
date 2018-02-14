import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'

const StyledInputElement = StyledInput.extend`
  height: 44px;
`

const TextInput = props => <StyledInputElement {...props} />

TextInput.propTypes = {
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func
}

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null
}

export default TextInput
export { StyledInput }
