import React from 'react'
import ReactDOM from 'react-dom'

import TopNavigation from './components/top-navigation'
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
        <Page />
      </div>
    </Container>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
