import React from 'react'
import styled from 'styled-components'

import Example from '../ov-components/example'
import { spacing, colors } from '../../tokens'

const sizes = Object.keys(spacing)

const Box = styled.span`
  display: inline-block;
  width: ${props => spacing[props.size]};
  height: ${props => spacing[props.size]};
  background: ${colors.base.grayLight};
  margin-right: ${spacing.small};
`

const Spacing = () => (
  <Example title="Tokens: Spacing">{sizes.map(size => <Box key={size} size={size} />)}</Example>
)

export default Spacing
