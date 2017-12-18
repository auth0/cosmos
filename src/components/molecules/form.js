import React from 'react'
import styled from 'styled-components'

import { fonts, spacing, colors } from '../../tokens'

import Input, { StyledInput } from '../atoms/input'
import Textarea from '../atoms/textarea'
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
  ${StyledInput}, ${Textarea} {
    margin-left: ${spacing.large};
  }
`

const HelperText = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
`

const Error = styled.div`
  font-size: 13px;
  color: ${colors.orange};
`

const StyledForm = styled.form`
  ${Label} {
    width: 25%;
  }
  ${StyledInput}, ${Textarea} {
    width: 50%;
  }
  ${HelperText}, ${Error} {
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} 30%;
  }
`

/**
 * Use forms to collect information from user
 */

const Form = props => <StyledForm>{props.children}</StyledForm>
// TODO: Form will get an layout prop for orientation of labels

const FormAPI = props => (
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
    {props.description ? <HelperText>{props.description}</HelperText> : null}
  </Field>
)

Form.Field = props => <FormAPI {...props} fieldComponent={Input} />
Form.Textarea = props => <FormAPI {...props} fieldComponent={Textarea} />

export default Form
