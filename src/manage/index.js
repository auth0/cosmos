import React from 'react'

import TopNavigation from './components/top-navigation'
import SideNavigation from './components/side-navigation'
import Container from './components/container'
import Page from './components/page'

// Add margin 40px between TopNavigation and container

const App = () => (
  <div>
    <TopNavigation />
    <Container>
      <div
        style={{
          display: 'flexbox',
          paddingTop: '100px'
        }}
      >
        <SideNavigation />
        <Page />
      </div>
    </Container>
  </div>
)

export default App
