import * as React from 'react'
import styled from '../../../styled'

import { spacing } from '../../../tokens'
import Divider from './divider'
import Automation from '../../../_helpers/automation-attribute'
import containerStyles from '../../../_helpers/container-styles'

export interface IFieldSetProps {
  /** Label for group of fields */
  label: string,
  children?: React.ReactNode
}

const FieldSet = (props: IFieldSetProps) => (
  <FieldSet.Element {...Automation('form.fieldset')}>
    <Divider>{props.label}</Divider>
    {props.children}
  </FieldSet.Element>
)

FieldSet.Element = styled.fieldset`
  ${containerStyles};
  border: none;
  padding: 0;
  &:not(:last-of-type) {
    margin-bottom: ${spacing.xlarge};
  }
`

FieldSet.displayName = 'Form Fieldset'

FieldSet.defaultProps = {
  label: 'Fieldset Label'
}

export default FieldSet
