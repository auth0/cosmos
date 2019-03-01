import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing, misc } from '@auth0/cosmos-tokens'
import uniqueId from '../../../_helpers/uniqueId'
import FormContext from '../form-context'
import Automation from '../../../_helpers/automation-attribute'

import StyledLabel from '../label'
import StyledError from '../error'
import HelpText from '../help-text'
import TextArea from '../../../atoms/textarea'
import Switch from '../../../atoms/switch'
import Checkbox from '../../../atoms/checkbox'
import Radio from '../../../atoms/radio'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import containerStyles from '../../../_helpers/container-styles'

const shouldFieldUseCheckboxStyle = props => {
  if (props.checkbox) return true
  if (props.children) {
    const children = React.Children.toArray(props.children)
    const type = children[0].type
    return type === Checkbox || type === Radio || type === Checkbox.Group
  }
  return false
}

const { Provider, Consumer } = React.createContext({})

const FieldInput = props => {
  const { Component, ...fieldProps } = props
  /*
    old API
    we proxy through all the props to the input element
  */
  if (Component) return <Component {...fieldProps} />

  /*
    New API
    We create a context around the field to pass the field id
  */
  let { children, id } = fieldProps
  return <Provider value={{ formFieldId: id }}>{children}</Provider>
}

const ariaDescribedBy = (helperTextId, errorTextId) => {
  if (errorTextId) {
    return { 'aria-invalid': true, 'aria-errormessage': errorTextId }
  }
  if (helperTextId) {
    return { 'aria-describedby': helperTextId }
  }
}

const applyAriaToFieldChild = (child, inputId, helperTextId, errorTextId) =>
  React.cloneElement(React.Children.only(child), {
    id: inputId,
    ...ariaDescribedBy(helperTextId, errorTextId)
  })

const Field = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)
  const { error, htmlFor, ...fieldProps } = props
  const useCheckboxStyle = shouldFieldUseCheckboxStyle(props)
  const Label = useCheckboxStyle ? Field.CheckboxLabel : StyledLabel
  const FieldSetWrapper = useCheckboxStyle ? Field.FieldSetElement : React.Fragment
  const helperTextId = props.helpText ? id + '-helper-text' : null
  const errorTextId = props.error ? id + '-error-text' : null

  return (
    <FormContext.Consumer>
      {context => (
        // The field element needs to be wrap by a fieldset when it has radios or checkboxes inside
        // to make them accesible.
        // There is a bug due to a browser bug https://github.com/w3c/csswg-drafts/issues/321
        <FieldSetWrapper>
          <Field.Element layout={context.layout} {...Automation('form.field')}>
            <Field.LabelLayout checkbox={useCheckboxStyle} layout={context.layout}>
              <Label htmlFor={id}>{props.label}</Label>
            </Field.LabelLayout>
            <Field.ContentLayout layout={context.layout} {...Automation('form.field.content')}>
              {props.fieldComponent ? (
                <props.fieldComponent
                  id={id}
                  hasError={error ? true : false}
                  {...fieldProps}
                  {...ariaDescribedBy(helperTextId, errorTextId)}
                />
              ) : (
                applyAriaToFieldChild(props.children, id, helperTextId, errorTextId)
              )}
              {(props.error || props.helpText) && (
                <Field.FeedbackContainer>
                  {props.error && <StyledError id={errorTextId}>{props.error}</StyledError>}
                  {props.helpText && <HelpText id={helperTextId}>{props.helpText}</HelpText>}
                </Field.FeedbackContainer>
              )}
            </Field.ContentLayout>
          </Field.Element>
        </FieldSetWrapper>
      )}
    </FormContext.Consumer>
  )
}

Field.Element = styled.div`
  ${containerStyles};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.xsmall};

  &:not(:last-child):not(:only-child) {
    margin-bottom: ${spacing.medium};
  }

  @media (min-width: 768px) {
    grid-gap: ${props => (props.layout === 'label-on-left' ? spacing.medium : spacing.xxsmall)};
    grid-template-columns: ${props => (props.layout === 'label-on-left' ? '0.35fr 0.65fr' : '1fr')};
  }

  ${TextArea.Element} {
    min-height: ${misc.input.default.height};
  }
  ${Switch.Element} {
    /* Adds a space so the label aligns with the switch */
    @media (min-width: 768px) {
      margin-top: ${props => (props.layout === 'label-on-left' ? '6px' : '0')};
    }
  }
`

Field.FieldSetElement = styled.fieldset`
  &:not(:last-child):not(:only-child) {
    margin-bottom: ${spacing.medium};
  }
`
Field.CheckboxLabel = StyledLabel.withComponent('legend')

Field.LabelLayout = styled.div`
  @media (min-width: 768px) {
    text-align: ${props => (props.layout === 'label-on-left' ? 'right' : 'left')};
    padding-top: ${props =>
      !props.checkbox && props.layout === 'label-on-left' ? misc.inputs.padding : '0'};
  }
`
Field.ContentLayout = styled.div``

Field.displayName = 'Form Field'

Field.FeedbackContainer = styled.div`
  margin-top: ${spacing.xsmall};
`

Field.propTypes = {
  /** Form Label */
  label: PropTypes.string.isRequired,
  /** Text that further explains the purpose of the field, or provides more detail */
  helpText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Error message to show in case of failed validation */
  error: PropTypes.string,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(actionShapeWithRequiredIcon),
  /** checkbox alignment */
  checkbox: PropTypes.bool
}

Field.defaultProps = {
  label: '',
  helpText: null,
  error: null
}

Field.ContextConsumer = Consumer
Field.Error = StyledError
export default Field
