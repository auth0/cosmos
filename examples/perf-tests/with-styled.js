import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Heading = styled.h1``

const App = () => {
  return <Heading>Hello world</Heading>
}

ReactDOM.render(<App />, document.getElementById('root'))
