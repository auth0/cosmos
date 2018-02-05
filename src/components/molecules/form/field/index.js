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
  margin: ${spacing.small} 0;
  display: flex;
  width: ${getLayout().formWidth};

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
  width: ${getLayout().labelWidth};
  text-align: right;
  padding-right: ${spacing.medium};
`
const ContentLayout = styled.div`
  width: ${getLayout().contentWidth};
`

const Field = props => {
  /* Get unique id for label */
  let id = props.id || uniqueId(props.label)

  return (
    <StyledField>
      <LabelLayout>
        <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
      </LabelLayout>
      <ContentLayout>
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
