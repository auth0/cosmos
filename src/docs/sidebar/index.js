import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '../../tokens'
import { Logo } from '../../components'
import ComponentList from './component-list'

const Sidebar = styled.div`
  background: ${colors.grayLightest};
  height: 100vh;
`

const LogoContainer = styled.div`
  padding: ${spacing.medium};
  text-align: center;
  background: ${colors.white};
`

export default () => (
  <Sidebar>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <ComponentList />
  </Sidebar>
)
