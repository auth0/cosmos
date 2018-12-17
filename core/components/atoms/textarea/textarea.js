import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'
import { deprecate } from '../../_helpers/custom-validations'
import Automation from '../../_helpers/automation-attribute'

/* Input with actions */
import InputWithActions from '../_input-with-actions'
import { actionShapeWithRequiredIcon } from '../../_helpers/action-shape'

const TextArea = props => {
  const Input = <TextArea.Element rows={props.length} {...props} {...Automation('text-area')} />

  if (!props.actions) return Input
  else {
    /* Input is not a component, just JSX, hence wrapped in {} */
    return <InputWithActions actions={props.actions}>{Input}</InputWithActions>
  }
}

TextArea.Element = StyledInput.withComponent('textarea').extend`
  resize: ${props => (props.resizable ? 'vertical' : 'none')};
  font-size: ${props => (props.code ? '13px' : 'inherit')};
  display: block;
`

const StyledTextArea = TextArea.Element

TextArea.propTypes = {
  /** Length of the textarea in rows */
  length: PropTypes.number,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass hasError to show error state */
  hasError: PropTypes.bool,
  /** @deprecated Pass error string directly to show error state */
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
