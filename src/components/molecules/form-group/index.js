import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Form from '../form'
import Well from '../../atoms/_well'
import { spacing } from '../../../tokens/'

const StyledFormGroup = styled.div`` //feel free to delete this and replace with div

const StyledFormWrapper = styled(Well)`
  margin: ${spacing.medium} 0;
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
