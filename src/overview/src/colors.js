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
      <Swatch color={colors.base.black} />
      <Swatch color={colors.base.grayDark} />
      <Swatch color={colors.base.grayMedium} />
      <Swatch color={colors.base.grayLight} />
      <Swatch color={colors.base.grayLightest} />
    </div>
    <div>
      <Swatch color={colors.base.blue} />
      <Swatch color={colors.base.orange} />
      <Swatch color={colors.base.green} />
    </div>
  </Container>
)

export default Colors
