import React from 'react'
import styled from 'styled-components'

import { Logo } from 'auth0-cosmos'
import { colors } from 'auth0-cosmos/tokens'

import ThemeToggle from 'auth0-cosmos/_helpers/theme-toggle'

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

class LogoContainer extends React.Component {
  constructor() {
    super()
    this.state = { themeToggleVisible: false }
  }
  toggleThemeVisibility() {
    this.setState({ themeToggleVisible: !this.state.themeToggleVisible })
  }
  render() {
    return (
      <Container>
        {this.state.themeToggleVisible ? (
          <ThemeToggle />
        ) : (
          <LogoWrapper href="#" onClick={this.toggleThemeVisibility.bind(this)}>
            <Logo />
          </LogoWrapper>
        )}
      </Container>
    )
  }
}

export default LogoContainer
