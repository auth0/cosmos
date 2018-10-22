import React from 'react'
import ReactDOM from 'react-dom'
import '@auth0/cosmos-fonts'

import TopNavigation from './components/top-navigation'
import Container from './components/container'
import Page from './components/page'

const App = props => (
  <div>
    <TopNavigation />
    <Container>
      <div
        style={{
          display: 'flexbox',
          paddingTop: '110px'
        }}
      >
        <Page defaultRoute={props.defaultRoute} />
      </div>
    </Container>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

if (module && module.hot) module.hot.accept()

export default App
