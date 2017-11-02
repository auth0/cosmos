import React from 'react'
import styled from 'styled-components'

import Container from './container'
import { colors, spacing } from '../../tokens'

const Swatch = styled.span`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: ${prop => prop.color};
  margin: ${spacing.xsmall} ${spacing.xsmall} 0 0;
`

const Colors = () => (
  <Container title="Colors">
    <div>
      <Swatch color={colors.base} />
      <Swatch color={colors.grayDark} />
      <Swatch color={colors.grayMedium} />
      <Swatch color={colors.grayLight} />
    </div>
    <div>
      <Swatch color={colors.blue} />
      <Swatch color={colors.orange} />
      <Swatch color={colors.green} />
    </div>
  </Container>
)

export default Colors
