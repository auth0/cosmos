import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'
import uniqueId from '../../_helpers/uniqueId'
import { multiply, subtract } from '../../_helpers/pixel-calc'

import ActionInput from '../../molecules/_action-input'
import TextArea, { StyledTextArea } from '../../atoms/textarea'
import Select from '../../atoms/select'
import Switch from '../../atoms/switch'
import Button from '../../atoms/button'
import { Right, Clear } from '../../_helpers/float'

import StyledLabel from './label'
import StyledDivider from './divider'
import StyledFieldSet from './fieldset'
import StyledError from './error'
import StyledActions from './actions'
import Description from './description'

// Layout

const formWidth = '625px'
const labelWidth = multiply(formWidth, 0.35)

const Field = styled.div`
  margin: ${spacing.small} 0;
  display: flex;
  width: ${formWidth};
`
const LabelLayout = styled.div`
  width: ${labelWidth};
  text-align: right;
  padding-right: ${spacing.medium};
`
const ContentLayout = styled.div`
  width: ${subtract(formWidth, labelWidth)};
`

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
  ${StyledFieldSet} {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  ${Field} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Form = props => <StyledForm>{props.children}</StyledForm>
// TODO: Form will get an layout prop for orientation of labels

const FormElement = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)

  return (
    <Field>
      <LabelLayout>
        <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
      </LabelLayout>
      <ContentLayout>
        <props.fieldComponent id={id} {...props} />
        {props.error ? <StyledError>{props.error}</StyledError> : null}
        {props.description ? <Description>{props.description}</Description> : null}
      </ContentLayout>
    </Field>
  )
}

Form.TextInput = props => <FormElement {...props} fieldComponent={ActionInput} />
Form.TextArea = props => <FormElement {...props} fieldComponent={TextArea} />
Form.Select = props => <FormElement {...props} fieldComponent={Select} />
Form.Switch = props => <FormElement {...props} fieldComponent={Switch} />

Form.Actions = props => {
  return (
    <StyledActions labelWidth={labelWidth}>
      {props.primaryAction && (
        <Button primary onClick={props.primaryAction.method}>
          {props.primaryAction.label}
        </Button>
      )}

      {props.secondaryActions &&
        props.secondaryActions.map((action, index) => {
          return (
            <Button key={index} onClick={action.method}>
              {action.label}
            </Button>
          )
        })}

      {props.destructiveActions && (
        <Right>
          {props.destructiveActions.map((action, index) => (
            <Button key={index} onClick={action.method} destructive>
              {action.label}
            </Button>
          ))}
        </Right>
      )}
      <Clear />
    </StyledActions>
  )
}

Form.FieldSet = props => (
  <StyledFieldSet>
    <StyledDivider>{props.label}</StyledDivider>
    {props.children}
  </StyledFieldSet>
)

export default Form
