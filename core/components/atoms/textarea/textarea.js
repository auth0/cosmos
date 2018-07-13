import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'
import { deprecate } from '../../_helpers/custom-validations'

const StyledTextArea = StyledInput.withComponent('textarea').extend`
  resize: ${props => (props.resizable ? 'vertical' : 'none')};
  font-size: ${props => (props.code ? '13px' : 'inherit')};
`

const TextArea = props => <StyledTextArea rows={props.length} {...props} />

TextArea.propTypes = {
  /** Length of the textarea in rows */
  length: PropTypes.number,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string,
  /** Allow resizing of the textarea */
  resizable: PropTypes.bool,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,

  /** deprecate error string prop */
  _error: props => deprecate(props, { name: 'error', replacement: 'hasError' })
}

TextArea.defaultProps = {
  length: 3,
  readOnly: false,
  code: false,
  error: null,
  resizable: true,
  onChange: null
}

export default TextArea
export { StyledTextArea }
