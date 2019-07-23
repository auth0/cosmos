import * as React from 'react'
import styled from '../../styled'

import { colors, spacing } from '../../tokens'

const StyledWell = styled.div`
  background: ${colors.form.background};
  padding: ${spacing.large};
`

const Well = (props) => {
  return <StyledWell {...props}>{props.children}</StyledWell>
}

Well.propTypes = {}

Well.defaultProps = {}

export default Well
