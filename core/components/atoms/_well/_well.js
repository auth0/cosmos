import React from 'react'
import styled from '@auth0/cosmos/styled'

import { colors, spacing } from '@auth0/cosmos-tokens'

const StyledWell = styled.div`
  background: ${colors.form.background};
  padding: ${spacing.large};
`

const Well = props => {
  return <StyledWell {...props}>{props.children}</StyledWell>
}

Well.propTypes = {}

Well.defaultProps = {}

export default Well
