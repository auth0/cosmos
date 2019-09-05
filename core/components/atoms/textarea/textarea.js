import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { StyledInput } from '../_styled-input'
import { deprecate } from '../../_helpers/custom-validations'
import Automation from '../../_helpers/automation-attribute'

/* Input with actions */
import InputWithActions from '../_input-with-actions'
import { actionShapeWithRequiredIcon } from '../../_helpers/action-shape'

const TextArea = props => {
  const Input = <TextArea.Element rows={props.length} {...props} {...Automation('text-area')} />

  if (!props.actions.length) return Input
  else {
    /* Input is not a component, just JSX, hence wrapped in {} */
    return <InputWithActions actions={props.actions}>{Input}</InputWithActions>
  }
}

TextArea.Element = styled(StyledInput.withComponent('textarea'))`
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
  /** @deprecated:hasError Pass error string directly to show error state */
  error: PropTypes.string,
  /** Allow resizing of the textarea */
  resizable: PropTypes.bool,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,
  /** Actions to be attached to the input */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(actionShapeWithRequiredIcon)
  ]),

  /** deprecate error string prop */
  _error: props => deprecate(props, { name: 'error', replacement: 'hasError' })
}

TextArea.defaultProps = {
  length: 3,
  readOnly: false,
  code: false,
  error: null,
  resizable: true,
  onChange: null,
  actions: []
}

export default TextArea
export { StyledTextArea }
