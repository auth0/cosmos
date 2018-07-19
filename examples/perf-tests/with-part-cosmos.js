import React from 'react'
import ReactDOM from 'react-dom'
import Heading from '@auth0/cosmos/atoms/heading'

const App = () => {
  return <Heading>Hello world</Heading>
}

ReactDOM.render(<App />, document.getElementById('root'))
