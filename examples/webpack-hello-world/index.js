import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@auth0/cosmos'

const App = () => {
  return <Button>Hello world1</Button>
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept()
