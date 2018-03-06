import React from 'react'
import styled from 'styled-components'

import { Switch } from 'auth0-cosmos'
import { StyledToggle } from 'auth0-cosmos/atoms/switch'
import { misc } from 'auth0-cosmos/tokens'

/* read default from localStorage */
let theme = localStorage.cosmos_theme || 'manage'

/* set theme and reload */
const toggleTheme = () => {
  if (theme === 'extend') theme = 'manage'
  else theme = 'extend'

  localStorage.setItem('cosmos_theme', theme)
  /* Let switch animation complete, then reload the page */
  setTimeout(_ => window.location.reload(), 1000 * parseFloat(misc.animationDuration))
}

const SwitchWrapper = styled.div`
  ${StyledToggle} {
    background: ${props => (props.on ? '#3445dc' : '#eb5424')};
  }
`

const Toggle = () => {
  return (
    <SwitchWrapper on={theme === 'extend'}>
      <Switch
        onToggle={toggleTheme}
        accessibleLabels={['Extend', 'Manage']}
        on={theme === 'extend'}
      />
    </SwitchWrapper>
  )
}

class ThemeSwitcher extends React.Component {
  constructor() {
    super()
    this.state = { themeToggleVisible: false }
  }
  toggleThemeVisibility() {
    this.setState({ themeToggleVisible: !this.state.themeToggleVisible })
  }
  render() {
    const Component = this.state.themeToggleVisible ? (
      <Toggle />
    ) : (
      <div onClick={this.toggleThemeVisibility.bind(this)}>{this.props.children}</div>
    )

    return Component
  }
}

export default ThemeSwitcher
