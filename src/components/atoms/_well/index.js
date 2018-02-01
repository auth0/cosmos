import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc, spacing } from '../../../tokens/'

const StyledWell = styled.div`
  background: ${colors.form.background};
  padding: ${spacing.large};
`

const Well = props => {
  return <StyledWell>{props.children}</StyledWell>
}

Well.propTypes = {}

Well.defaultProps = {}

export default Well
