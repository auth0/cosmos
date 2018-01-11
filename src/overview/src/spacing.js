import React from 'react'
import styled from 'styled-components'

import Container from './container'
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
  <Container title="Spacing (Increments of 8px)">
    {sizes.map(size => <Box key={size} size={size} />)}
  </Container>
)

export default Spacing
