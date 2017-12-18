import React from 'react'
import styled from 'styled-components'

import { fonts, spacing, colors } from '../../tokens'

import Input, { StyledInput } from '../atoms/input'
import Textarea, { StyledTextarea } from '../atoms/textarea'
import { Text } from '../atoms/typography'

const Label = styled(Text)`
  box-sizing: border-box;
  display: inline-block;

  vertical-align: top;
  position: relative;
  top: 10px;
  text-align: right;

  font-weight: ${fonts.weight.medium};
`

const Field = styled.div`
  margin: ${spacing.medium} 0;
  ${StyledInput}, ${StyledTextarea} {
    margin-left: ${spacing.large};
  }
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
  ${StyledInput}, ${StyledTextarea}, ${Description}, ${Error} {
    width: 50%;
  }
  ${Description}, ${Error} {
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} 30%;
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

const FormElement = props => (
  <Field>
    <Label>{props.label}</Label>
    <props.fieldComponent
      type="text"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
      error={props.error}
    />
    {props.error ? <Error>{props.error}</Error> : null}
    {props.description ? <Description>{props.description}</Description> : null}
  </Field>
)

Form.Field = props => <FormElement {...props} fieldComponent={Input} />
Form.Textarea = props => <FormElement {...props} fieldComponent={Textarea} />
Form.Select = props => <FormElement {...props} fieldComponent={Input} />

Form.FieldSet = props => (
  <FieldSet>
    <Devider>{props.label}</Devider>
    {props.children}
  </FieldSet>
)

export default Form
