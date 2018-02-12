import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'

const StyledTextArea = StyledInput.withComponent('textarea').extend`
  resize: ${props => (props.resizable ? 'vertical' : 'none')};
  white-space: ${props => (props.code ? 'pre' : 'normal')};
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
  resizable: PropTypes.bool
}

TextArea.defaultProps = {
  length: 5,
  readOnly: false,
  code: false,
  error: null,
  resizable: true
}

export default TextArea
export { StyledTextArea }
