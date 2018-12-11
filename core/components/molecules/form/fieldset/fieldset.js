import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing } from '@auth0/cosmos-tokens'
import Divider from './divider'
import Automation from '../../../_helpers/automation-attribute'
import containerStyles from '../../../_helpers/container-styles'

const FieldSet = props => (
  <FieldSet.Element {...Automation('form.fieldset')} margin={{ bottom: 'xlarge' }}>
    <Divider margin={{ top: 0, bottom: 'large' }}>{props.label}</Divider>
    {props.children}
  </FieldSet.Element>
)

FieldSet.Element = styled.fieldset`
  ${containerStyles};
  border: none;
  padding: 0;
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
