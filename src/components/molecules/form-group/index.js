import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Well from '../../atoms/_well'
import { spacing } from '@auth0/cosmos-tokens'

const StyledFormGroup = styled.div``

const StyledFormWrapper = styled(Well)`
  margin-bottom: ${spacing.medium};
  padding-bottom: ${spacing.xlarge};
`

const FormGroup = props => {
  const children = React.Children.map(props.children, child => {
    return <StyledFormWrapper>{child}</StyledFormWrapper>
  })

  return <StyledFormGroup>{children}</StyledFormGroup>
}

FormGroup.propTypes = {
  /** children should be Form components */
  children: PropTypes.arrayOf(PropTypes.element)
}

FormGroup.defaultProps = {}

export default FormGroup
