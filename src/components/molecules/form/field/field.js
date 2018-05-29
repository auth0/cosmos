import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, misc } from '@auth0/cosmos-tokens'
import getLayout from '../layout'
import uniqueId from '../../../_helpers/uniqueId'

import StyledLabel from '../label'
import StyledError from '../error'
import HelpText from '../help-text'
import { StyledTextArea } from '../../../atoms/textarea'
import { StyledSwitch } from '../../../atoms/switch'
import { StyledRadio } from '../../../atoms/radio'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const StyledField = styled.div`
  display: ${props => (props.layout === 'label-on-left' ? 'flex' : 'block')};
  width: ${props => getLayout(props.layout).formWidth};
  margin-left: ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};
  margin-bottom: ${spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
  ${StyledTextArea} {
    /* browsers give textareas an annoying alignment
    that needs to be overwritten :/ */
    vertical-align: top;
    min-height: ${misc.input.default.height};
  }
  ${StyledSwitch} {
    margin-top: 6px;
  }
  ${StyledRadio} {
    margin-top: ${props => (props.layout === 'label-on-left' ? '11px' : null)};
  }
`
const LabelLayout = styled.div`
  width: ${props => getLayout(props.layout).labelWidth};
  margin: ${props => getLayout(props.layout).labelMargin};
  text-align: ${props => (props.layout === 'label-on-left' ? 'right' : 'left')};
  padding-right: ${spacing.medium};
`
const ContentLayout = styled.div`
  width: ${props => getLayout(props.layout).contentWidth};
`

const Field = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)
  const layout = props.layout

  return (
    <StyledField layout={layout}>
      <LabelLayout layout={layout}>
        <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
      </LabelLayout>
      <ContentLayout layout={layout}>
        {props.fieldComponent ? <props.fieldComponent id={id} {...props} /> : props.children}
        {props.error ? <StyledError>{props.error}</StyledError> : null}
        {props.helpText ? <HelpText>{props.helpText}</HelpText> : null}
      </ContentLayout>
    </StyledField>
  )
}

Field.displayName = 'Form Field'

Field.propTypes = {
  /** Form Label */
  label: PropTypes.string.isRequired,
  /** Text that further explains the purpose of the field, or provides more detail */
  helpText: PropTypes.node,
  /** Error message to show in case of failed validation */
  error: PropTypes.string,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
      handler: PropTypes.func.isRequired
    })
  )
}

Field.defaultProps = {
  label: 'Form label',
  helpText: null,
  error: null
}

export default Field
