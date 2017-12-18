import React from 'react'
import styled from 'styled-components'

import { fonts, spacing, colors } from '../../tokens'
import uniqueId from '../_helpers/uniqueId'

import Input, { StyledInput } from '../atoms/input'
import TextArea, { StyledTextArea } from '../atoms/textarea'

const Label = styled.label`
  box-sizing: border-box;
  display: inline-block;
  min-height: 40px;
  padding-right: ${spacing.small};
  line-height: 40px;
  text-align: right;
  vertical-align: top;
  font-weight: ${fonts.weight.medium};
`

const Field = styled.div`
  margin: ${spacing.medium} 0;
`

const Description = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
`

const Error = styled.div`
  font-size: 13px;
  color: ${colors.orange};
`

const FieldSet = styled.fieldset`
  border: none;
`

const Devider = styled(Label)`
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid ${colors.grayLightest};
  padding-bottom: ${spacing.small};
  margin-bottom: ${spacing.large};
`

const StyledForm = styled.form`
  ${Label} {
    width: 25%;
  }
  ${StyledInput}, ${StyledTextArea} {
    width: 50%;
    margin-left: ${spacing.small};
  }
  ${StyledTextArea} {
    /* browsers give textareas an annoying alignment
    that needs to be overwritten :/ */
    vertical-align: top;
    /* resize should not happen horizontally inside a form */

    min-height: 40px;
  }
  ${Description}, ${Error} {
    width: 50%;
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} calc(${spacing.small} + 25%);
  }
  ${Devider} {
    width: 100%;
  }
`

/**
 * Use forms to collect information from user
 */

const Form = props => <StyledForm>{props.children}</StyledForm>
// TODO: Form will get an layout prop for orientation of labels

const FormElement = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)

  return (
    <Field>
      <Label htmlFor={id}>{props.label}</Label>
      <props.fieldComponent id={id} {...props} />
      {props.error ? <Error>{props.error}</Error> : null}
      {props.description ? <Description>{props.description}</Description> : null}
    </Field>
  )
}

Form.TextInput = props => <FormElement {...props} fieldComponent={Input} />
Form.TextArea = props => <FormElement {...props} fieldComponent={TextArea} />
// Form.Select = props => <FormElement {...props} fieldComponent={Input} />

Form.FieldSet = props => (
  <FieldSet>
    <Devider>{props.label}</Devider>
    {props.children}
  </FieldSet>
)

export default Form
