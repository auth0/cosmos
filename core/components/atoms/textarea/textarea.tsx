import * as React from 'react'
import styled from '../../styled'

import { StyledInput } from '../_styled-input'
import Automation from '../../_helpers/automation-attribute'
import Form from '../../molecules/form'

/* Input with actions */
import InputWithActions from '../_input-with-actions'
import { ActionWithIcon } from '../../_helpers/action-shape'

export interface ITextAreaProps {
  /** HTML ID of the component */
  id?: string
  /** Length of the textarea in rows */
  length?: number
  /** Make input readOnly if it does not validate constraint */
  readOnly?: boolean
  /** Use when the expected input is code */
  code?: boolean
  /** Pass hasError to show error state */
  hasError?: boolean
  /** @deprecated:hasError Pass error string directly to show error state */
  error?: string
  /** Allow resizing of the textarea */
  resizable?: boolean
  /** onChange transparently passed to the input */
  onChange?: Function
  /** Placeholder for the input component */
  placeholder?: string
  /** Actions to be attached to the input */
  actions?: (JSX.Element | ActionWithIcon)[]
  onClick?: Function
}

const TextArea = (props: ITextAreaProps) => {
  const Input = (
    <Form.Field.ContextConsumer>
      {(context) => (
        <TextArea.Element
          rows={props.length}
          id={props.id || context.formFieldId}
          {...props}
          {...Automation('text-area')}
        />
      )}
    </Form.Field.ContextConsumer>
  )

  if (!props.actions.length) return Input
  else {
    /* Input is not a component, just JSX, hence wrapped in {} */
    return <InputWithActions actions={props.actions}>{Input}</InputWithActions>
  }
}

TextArea.Element = styled(StyledInput.withComponent('textarea'))`
  resize: ${(props) => (props.resizable ? 'vertical' : 'none')};
  font-size: ${(props) => (props.code ? '13px' : 'inherit')};
  display: block;
`

export const StyledTextArea = TextArea.Element

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
