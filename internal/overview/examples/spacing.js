import React from 'react'
import styled from 'styled-components'

import Example from '../components/example'
import { spacing, colors } from '@auth0/cosmos/tokens'

const sizes = Object.keys(spacing)

const Box = styled.span`
  display: inline-block;
  width: ${props => spacing[props.size]};
  height: ${props => spacing[props.size]};
  background: ${colors.base.grayLight};
  margin-right: ${spacing.small};
`

const Spacing = () => (
  <Example title="Tokens: Spacing" align="center" valign="center">
    <div>{sizes.map(size => <Box key={size} size={size} />)}</div>
  </Example>
)

export default Spacing
