import React from 'react'
import styled from 'styled-components'

import ActionInput from '../../molecules/_action-input'
import TextArea, { StyledTextArea } from '../../atoms/textarea'
import Select from '../../atoms/select'
import Switch from '../../atoms/switch'

import Field from './field'
import Actions from './actions'

import StyledDivider from './divider'
import StyledFieldSet from './fieldset'

const StyledForm = styled.form`
  ${StyledTextArea} {
    /* browsers give textareas an annoying alignment
    that needs to be overwritten :/ */
    vertical-align: top;
    /* resize should not happen horizontally inside a form */
    min-height: 44px;
    /* TO-DO: Tokenize this value as it's related to the other heights of components. */
  }
  ${StyledDivider} {
    width: 100%;
  }
`

const Form = props => <StyledForm>{props.children}</StyledForm>
// TODO: Form will get an layout prop for orientation of labels

Form.TextInput = props => <Field {...props} fieldComponent={ActionInput} />
Form.TextArea = props => <Field {...props} fieldComponent={TextArea} />
Form.Select = props => <Field {...props} fieldComponent={Select} />
Form.Switch = props => <Field {...props} fieldComponent={Switch} />

Form.Actions = Actions

Form.FieldSet = props => (
  <StyledFieldSet>
    <StyledDivider>{props.label}</StyledDivider>
    {props.children}
  </StyledFieldSet>
)

export default Form
