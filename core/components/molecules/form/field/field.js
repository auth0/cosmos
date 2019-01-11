import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing, misc } from '@auth0/cosmos-tokens'
import getLayoutValues from '../layout'
import uniqueId from '../../../_helpers/uniqueId'
import FormContext from '../form-context'
import Automation from '../../../_helpers/automation-attribute'

import StyledLabel from '../label'
import StyledError from '../error'
import HelpText from '../help-text'
import TextArea from '../../../atoms/textarea'
import Switch from '../../../atoms/switch'
import Radio from '../../../atoms/radio'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import containerStyles from '../../../_helpers/container-styles'

const Field = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)
  const { error, ...fieldProps } = props

  return (
    <FormContext.Consumer>
      {context => (
        <Field.Element layout={context.layout} {...Automation('form.field')}>
          <Field.LabelLayout layout={context.layout}>
            <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
          </Field.LabelLayout>
          <Field.ContentLayout layout={context.layout}>
            {props.fieldComponent ? (
              <props.fieldComponent id={id} hasError={error ? true : false} {...fieldProps} />
            ) : (
              props.children
            )}
            {props.error ? <StyledError>{props.error}</StyledError> : null}
            {props.helpText ? <HelpText>{props.helpText}</HelpText> : null}
          </Field.ContentLayout>
        </Field.Element>
      )}
    </FormContext.Consumer>
  )
}

Field.Element = styled.div`
  ${containerStyles};
  display: ${props => (props.layout === 'label-on-left' ? 'flex' : 'block')};
  width: ${props => getLayoutValues(props.layout).formWidth};
  margin-left: ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};
  margin-bottom: ${spacing.small};

  ${TextArea.Element} {
    /* browsers give textareas an annoying alignment
  that needs to be overwritten :/ */
    vertical-align: top;
    min-height: ${misc.input.default.height};
  }
  ${Switch.Element} {
    margin-top: 6px;
  }
  ${Radio.Element} {
    margin-top: ${props => (props.layout === 'label-on-left' ? '11px' : null)};
  }
`

Field.LabelLayout = styled.div`
  width: ${props => getLayoutValues(props.layout).labelWidth};
  margin: ${props => getLayoutValues(props.layout).labelMargin};
  text-align: ${props => (props.layout === 'label-on-left' ? 'right' : 'left')};
  padding-right: ${props => (props.layout === 'label-on-left' ? spacing.medium : 'none')};
  padding-top: ${props => (props.layout === 'label-on-left' ? '11px' : '0')};
  min-height: ${props => (props.layout === 'label-on-left' ? '44px' : 'none')};
  margin-bottom: ${props => (props.layout === 'label-on-top' ? '8px' : '0')};
`
Field.ContentLayout = styled.div`
  width: ${props => getLayoutValues(props.layout).contentWidth};
`

Field.displayName = 'Form Field'

Field.propTypes = {
  /** Form Label */
  label: PropTypes.string.isRequired,
  /** Text that further explains the purpose of the field, or provides more detail */
  helpText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Error message to show in case of failed validation */
  error: PropTypes.string,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(actionShapeWithRequiredIcon)
}

Field.defaultProps = {
  label: '',
  helpText: null,
  error: null
}

export default Field
