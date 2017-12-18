import React from 'react'

import TopNavigation from './top-navigation'
import SideNavigation from './side-navigation'
import Page from './page'

import { Dummy as Container } from './dummy-components'

const App = () => (
  <div>
    <TopNavigation />
    <Container style={{ maxWidth: 1064, margin: '40px auto' }}>
      <SideNavigation />
      <Page />
    </Container>
  </div>
)

export default App
