import React from 'react'
import styled from 'styled-components'

import { Logo } from 'auth0-cosmos'
import { colors } from 'auth0-cosmos/tokens'

import ThemeSwitcher from 'auth0-cosmos/_helpers/theme-switcher'

/* Logo on the top has a nice white background thing going on */
const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.base.white};

  position: relative;
  left: 0;
`

const LogoWrapper = styled.a`
  text-align: center;
  display: block;
  width: 100%;
`

const LogoContainer = () => (
  <Container>
    <ThemeSwitcher>
      <LogoWrapper href="#">
        <Logo />
      </LogoWrapper>
    </ThemeSwitcher>
  </Container>
)
export default LogoContainer
