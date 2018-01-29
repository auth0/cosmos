import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc, spacing } from '../../../tokens/'

const StyledWell = styled.div`
  background: rgb(249, 249, 249);
  padding: ${spacing.large};
  margin-bottom: ${spacing.large};
`

const Well = props => {
  return <StyledWell>{props.children}</StyledWell>
}

Well.propTypes = {}

Well.defaultProps = {}

export default Well
