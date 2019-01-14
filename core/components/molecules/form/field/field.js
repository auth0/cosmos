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
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import containerStyles from '../../../_helpers/container-styles'

const Field = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)
  const { error, ...fieldProps } = props
  const Label = props.checkbox ? Field.CheckboxLabel : StyledLabel
  const FieldSetWrapper = props.checkbox ? Field.FieldSetElement : React.Fragment

  return (
    <FormContext.Consumer>
      {context => (
        <FieldSetWrapper>
          <Field.Element layout={context.layout} {...Automation('form.field')}>
            <Field.LabelLayout checkbox={props.checkbox} layout={context.layout}>
              <Label htmlFor={id}>{props.label}</Label>
            </Field.LabelLayout>
            <Field.ContentLayout layout={context.layout} {...Automation('form.field.content')}>
              {props.fieldComponent ? (
                <props.fieldComponent id={id} hasError={error ? true : false} {...fieldProps} />
              ) : (
                props.children
              )}
              {(props.error || props.helpText) && (
                <Field.FeedbackContainer>
                  {props.error && <StyledError>{props.error}</StyledError>}
                  {props.helpText && <HelpText>{props.helpText}</HelpText>}
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
  grid-gap: ${spacing.xxsmall};
  @media (min-width: 768px) {
    grid-gap: ${props => (props.layout === 'label-on-left' ? spacing.medium : spacing.xxsmall)};
    grid-template-columns: ${props => (props.layout === 'label-on-left' ? '0.35fr 1fr' : '1fr')};
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

Field.FieldSetElement = styled.fieldset``
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

export default Field
