import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '../../../../tokens'
import StyledDivider from './divider'

const StyledFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: ${spacing.xlarge};
  &:last-of-type {
    margin-bottom: 0;
  }
`

const FieldSet = props => (
  <StyledFieldSet>
    <StyledDivider>{props.label}</StyledDivider>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, { layout: props.layout })
    )}
  </StyledFieldSet>
)

FieldSet.displayName = 'Form Fieldset'

FieldSet.propTypes = {
  /** Label for group of fields */
  label: PropTypes.string.isRequired
}

FieldSet.defaultProps = {
  label: 'Fieldset Label'
}

export default FieldSet
