import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import Well from '../../atoms/_well'
import { spacing } from '@auth0/cosmos-tokens'

const FormGroup = ({ children, ...props }) => {
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
FormGroup.propTypes = {
  /** children should be Form components */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

FormGroup.defaultProps = {}

export default FormGroup
