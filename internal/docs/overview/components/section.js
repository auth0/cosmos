import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  display: none;
`

const Section = styled.div`
  background-color: white;
`

export default (props) => (
  <Section>
    <Title>{props.title}</Title>
    {props.children}
  </Section>
)
