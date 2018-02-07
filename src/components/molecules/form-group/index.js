import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Form from '../form'
import Well from '../../atoms/_well'
import { spacing } from '../../../tokens/'

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
  children: PropTypes.arrayOf(PropTypes.instanceOf(Form))
}

FormGroup.defaultProps = {}

export default FormGroup
