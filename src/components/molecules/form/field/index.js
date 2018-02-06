import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '../../../../tokens'
import getLayout from '../layout'
import uniqueId from '../../../_helpers/uniqueId'

import StyledLabel from '../label'
import StyledError from '../error'
import Description from '../description'
import { StyledTextArea } from '../../../atoms/textarea'

const StyledField = styled.div`
  display: ${props => (props.layout === 'label-on-left' ? 'flex' : 'block')};
  width: ${props => getLayout(props.layout).formWidth};
  margin: ${spacing.small} ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};

  ${StyledTextArea} {
    /* browsers give textareas an annoying alignment
    that needs to be overwritten :/ */
    vertical-align: top;
    /* resize should not happen horizontally inside a form */
    min-height: 44px;
    /* TO-DO: Tokenize this value as it's related to the other heights of components. */
  }
`
const LabelLayout = styled.div`
  width: ${props => getLayout(props.layout).labelWidth};
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
        <props.fieldComponent id={id} {...props} />
        {props.error ? <StyledError>{props.error}</StyledError> : null}
        {props.description ? <Description>{props.description}</Description> : null}
      </ContentLayout>
    </StyledField>
  )
}

Field.displayName = 'Form Field'

Field.propTypes = {
  /** Form Label */
  label: PropTypes.string.isRequired,
  /** Description to give users some context */
  description: PropTypes.string,
  /** Error message to show in case of failed validation */
  error: PropTypes.string
}

Field.defaultProps = {
  label: 'Form label',
  description: null,
  error: null
}

export default Field
