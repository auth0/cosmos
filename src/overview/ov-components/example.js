import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  position: absolute;
  top: 0.5em;
  left: 1em;
`

const Example = styled.div`
  background-color: white;
  padding: 2rem;
  position: relative;
`

export default props => (
  <Example>
    <Title>{props.title}</Title>
    {props.children}
  </Example>
)
