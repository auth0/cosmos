import React from 'react'
import styled from 'styled-components'

import { Logo } from '../../components'
import { colors, spacing } from '../../tokens'

/* Logo on the top has a nice white background thing going on */
const Container = styled.div`
  padding: ${spacing.medium};
  text-align: center;
  background: ${colors.base.white};
`

const LogoContainer = () => (
  <Container>
    <Logo />
  </Container>
)

export default LogoContainer
