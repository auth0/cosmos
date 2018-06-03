import React from 'react'
import ReactDOM from 'react-dom'

import TopNavigation from './components/top-navigation'
import SideNavigation from './components/side-navigation'
import Container from './components/container'
import Page from './components/page'

const App = () => (
  <div>
    <TopNavigation />
    <Container>
      <div
        style={{
          display: 'flexbox',
          paddingTop: '110px'
        }}
      >
        <SideNavigation />
        <Page />
      </div>
    </Container>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
