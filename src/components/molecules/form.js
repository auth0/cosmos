import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../tokens'

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

  padding-right: ${spacing.small};
`

const Field = styled.div`
  margin: ${spacing.medium} 0;
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
    width: 30%;
  }
  ${StyledInput}, ${Textarea} {
    width: 70%;
  }
  ${HelperText}, ${Error} {
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} 30%;
  }
`

const Form = props => <StyledForm {...props} />

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

export { Form }
