import React from 'react'
import PropTypes from 'prop-types'

import { misc } from '@auth0/cosmos-tokens'
import { StyledInput } from '../_styled-input'
import { deprecate } from '../../_helpers/custom-validations'

const TextInput = ({ defaultValue, type, ...props }) => {
  if (props.masked) {
    const length = defaultValue ? defaultValue.length : 8
    const maskedValue = new Array(length).join('•')
    return <TextInput.Element type={type} {...props} placeholder={maskedValue} readOnly />
  }
  return <TextInput.Element type={type} defaultValue={defaultValue} {...props} />
}

TextInput.Element = StyledInput.extend`
  height: ${props => misc.input[props.size].height};
`

TextInput.propTypes = {
  /** Hide input, similar to passwords but for other private information. Implies readOnly. */
  masked: PropTypes.bool,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass hasError to show error state */
  hasError: PropTypes.bool,
  /** (DEPRECATED) Pass error string directly to show error state */
  error: PropTypes.string,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,
  /** Text to display when the input is empty */
  placeholder: PropTypes.string,
  /** The default value for the field */
  defaultValue: PropTypes.string,
  /** The (HTML) type for the input. */
  type: PropTypes.string,
  /** The size of the input. */
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),

  /** deprecate error string prop */
  _error: props => deprecate(props, { name: 'error', replacement: 'hasError' })
}

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default'
}

export default TextInput
export { StyledInput }
