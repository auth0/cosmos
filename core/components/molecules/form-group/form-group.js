import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import Well from '../../atoms/_well'
import { spacing } from '@auth0/cosmos-tokens'

const StyledFormGroup = styled.div``

const StyledFormWrapper = styled(Well)`
  ${containerStyles};
  margin-bottom: ${spacing.medium};
  padding-bottom: ${spacing.xlarge};
`

const FormGroup = props => {
  const children = React.Children.map(props.children, child => {
    return <StyledFormWrapper>{child}</StyledFormWrapper>
  })

  return <StyledFormGroup {...Automation('form-group')}>{children}</StyledFormGroup>
}

FormGroup.propTypes = {
  /** children should be Form components */
  children: PropTypes.arrayOf(PropTypes.element)
}

FormGroup.defaultProps = {}

export default FormGroup
