import React from 'react'
import ReactDOM from 'react-dom'
import { Heading, styled } from '@auth0/cosmos'

const Something = styled.div`
  color: red;
`

const App = () => {
  return (
    <div>
      <Something>what</Something>
      <Heading size={1}>Hello world</Heading>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
