import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Well from '../../atoms/_well'
import { colors } from '../../../tokens/'

const StyledFormGroup = styled(Well)``

const FormGroup = props => {
  return <StyledFormGroup>{props.children}</StyledFormGroup>
}

FormGroup.propTypes = {}

FormGroup.defaultProps = {}

export default FormGroup
