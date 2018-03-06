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

const ThemeToggle = (props, context) => {
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

export default ThemeToggle
