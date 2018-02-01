import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Form from '../form'
import Well from '../../atoms/_well'
import { spacing } from '../../../tokens/'

const StyledFormGroup = styled(Well)`
  margin-bottom: ${spacing.medium};
`

const FormGroup = props => {
  return React.Children.map(props.children, child => {
    return <StyledFormGroup>{child}</StyledFormGroup>
  })
}

FormGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.instanceOf(Form))
}

FormGroup.defaultProps = {}

export default FormGroup
