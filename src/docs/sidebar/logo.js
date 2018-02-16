import React from 'react'
import styled from 'styled-components'

import { Logo } from '../../components'
import { colors } from '../../tokens'

/* Logo on the top has a nice white background thing going on */
const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  align-content: center;
  background: ${colors.base.white};
`

const LogoWrapper = styled.a`
  display: block;
  text-align: center;
  width: 100%;
`

const LogoContainer = () => (
  <Container>
    <LogoWrapper href="#">
      <Logo />
    </LogoWrapper>
  </Container>
)

export default LogoContainer
