import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  position: absolute;
  font-family: 'Roboto Mono';
  font-size: 12px;
  color: rgb(168, 168, 168);
  top: 1em;
  left: 1.5em;
`

const Example = styled.div`
  background-color: white;
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  border-radius: 3px;
`

export default props => (
  <Example>
    <Title>{props.title}</Title>
    {props.children}
  </Example>
)
