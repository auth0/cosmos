import * as React from 'react'
import styled from '../../styled'

import { misc } from '../../tokens'
import { StyledInput } from '../_styled-input'

/* Helpers */
import Automation from '../../_helpers/automation-attribute'
import { deprecate } from '../../_helpers/custom-validations'

/* Input with actions */
import InputWithActions from '../_input-with-actions'
import Form from '../../molecules/form'
import { actionShapeWithRequiredIcon, ActionWithIcon } from '../../_helpers/action-shape'

export type TextInputSize = 'default' | 'large' | 'small' | 'compressed'

//exclude types from the InputHTMLAttributes
export declare const {
  defaultValue,
  value,
  size,
  ...inputAttributes
}: React.InputHTMLAttributes<HTMLInputElement>
export type InputAttributes = typeof inputAttributes

export interface ITextInputProps extends Partial<InputAttributes> {
  /** Hide input similar to passwords but for other private information. Implies readOnly. */
  masked?: boolean
  /** Use when the expected input is code */
  code?: boolean
  /** Pass hasError to show error state */
  hasError?: boolean
  /** @deprecated:hasError Pass error string directly to show error state */
  error?: string
  /** The default value for the field */
  defaultValue?: string
  /** The current value for the field */
  value?: string
  /** The size of the input. */
  size?: TextInputSize
  /** Actions to be attached to the input */
  actions?: (React.ReactNode | ActionWithIcon)[]
  label?: string
}

const TextInput = (props: ITextInputProps) => {
  let { defaultValue, placeholder, readOnly, ...restOfTheProps } = props

  /*
    override placeholder and readOnly for masked

    masked is like a readOnly field but with the values replaced with *
    (like password, but without the value underneath)
  */
  if (props.masked) {
    const length = props.defaultValue ? props.defaultValue.length : 8
    placeholder = new Array(length).join('•')
    readOnly = true
    defaultValue = null
  }

  /*
    the input element can get it's id from multiple sources
    1. the user might provide it on the element
    2. if this element is part of a form field, the field will pass one

    the user's id takes preference over the field's
  */

  const Input = (
    <Form.Field.ContextConsumer>
      {context => (
        <TextInput.Element
          {...Automation('text-input')}
          id={props.id || context.formFieldId}
          defaultValue={defaultValue}
          placeholder={placeholder}
          readOnly={readOnly}
          {...restOfTheProps}
        />
      )}
    </Form.Field.ContextConsumer>
  )

  if (!props.actions.length) return Input
  else {
    /* Input is not a component, just JSX, hence wrapper in {} */
    return (
      <InputWithActions actions={props.actions} size={props.size}>
        {Input}
      </InputWithActions>
    )
  }
}

TextInput.Element = styled(StyledInput)`
  height: ${props => misc.input[props.size].height};
`

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
  actions: []
}

export default TextInput
export { StyledInput }
