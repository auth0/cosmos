import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'
import StyledDivider from './divider'
import Automation from '../../../_helpers/automation-attribute'

const FieldSet = props => (
  <FieldSet.Element {...Automation('form.fieldset')}>
    <StyledDivider>{props.label}</StyledDivider>
    {props.children}
  </FieldSet.Element>
)

FieldSet.Element = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: ${spacing.xlarge};
  &:last-of-type {
    margin-bottom: 0;
  }
`

FieldSet.displayName = 'Form Fieldset'

FieldSet.propTypes = {
  /** Label for group of fields */
  label: PropTypes.string.isRequired
}

FieldSet.defaultProps = {
  label: 'Fieldset Label'
}

export default FieldSet
