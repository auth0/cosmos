import React from 'react'
import styled from 'styled-components'

import { fonts, spacing, colors } from '../../tokens'
import uniqueId from '../_helpers/uniqueId'

import Input, { StyledInput } from '../atoms/input'
import TextArea, { StyledTextArea } from '../atoms/textarea'
import Select, { StyledSelect } from '../atoms/select'
import Switch from '../atoms/switch'

const Label = styled.label`
  box-sizing: border-box;
  display: block;
  min-height: 40px;
  line-height: 40px;
  font-weight: ${fonts.weight.medium};
  text-align: right;
  padding-right: ${spacing.small};

  min-height: 40px;
  vertical-align: top;
  padding-top: 10px;
`


// Layout
const Field = styled.div`
  margin: ${spacing.medium} 0;
  display: flex;
  width: 625px;
`
const LabelLayout = styled.div`
  width: 35%;
  text-align: right;
  padding-right: ${spacing.medium}
`
const ContentLayout = styled.div`
  width: 65%;
`

const Description = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
  margin-top: ${spacing.xsmall};
`

const Error = styled.div`
  font-size: 13px;
  color: ${colors.orange};
  margin-top: ${spacing.xsmall};
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
  ${StyledTextArea} {
    /* browsers give textareas an annoying alignment
    that needs to be overwritten :/ */
    vertical-align: top;
    /* resize should not happen horizontally inside a form */
    min-height: 40px;
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
      <LabelLayout>
        <Label htmlFor={id}>{props.label}</Label>
      </LabelLayout>
      <ContentLayout>
        <props.fieldComponent id={id} {...props} />
        {props.error ? <Error>{props.error}</Error> : null}
        {props.description ? <Description>{props.description}</Description> : null}
      </ContentLayout>
    </Field>
  )
}

Form.TextInput = props => <FormElement {...props} fieldComponent={Input} />
Form.TextArea = props => <FormElement {...props} fieldComponent={TextArea} />
Form.Select = props => <FormElement {...props} fieldComponent={Select} />
Form.Switch = props => <FormElement {...props} fieldComponent={Switch} />

Form.FieldSet = props => (
  <FieldSet>
    <Devider>{props.label}</Devider>
    {props.children}
  </FieldSet>
)

export default Form
