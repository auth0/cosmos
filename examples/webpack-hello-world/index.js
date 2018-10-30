import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@auth0/cosmos'
import '@auth0/cosmos-fonts'

const App = () => {
  return <Button>Hello World!</Button>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module && module.hot) module.hot.accept()
