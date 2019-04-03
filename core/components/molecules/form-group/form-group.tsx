import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import Well from '../../atoms/_well'
import { spacing } from '@auth0/cosmos-tokens'

export interface IFormGroupProps {
  /** HTML ID of the component */
  id?: string
  /** children should be Form components */
  children: React.ReactNode
}

const FormGroup = ({ children, ...props }: IFormGroupProps) => {
  const wrappedChildren = React.Children.map(children, child => {
    return <FormGroup.FormWrapper>{child}</FormGroup.FormWrapper>
  })

  return (
    <FormGroup.Element {...Automation('form-group')} {...props}>
      {wrappedChildren}
    </FormGroup.Element>
  )
}

FormGroup.Element = styled.div``

FormGroup.FormWrapper = styled(Well)`
  ${containerStyles};
  margin-bottom: ${spacing.medium};
  padding-bottom: ${spacing.xlarge};
`

FormGroup.defaultProps = {}

export default FormGroup
