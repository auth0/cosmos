import React from 'react'
import styled from 'styled-components'

const Title = styled.div``

const Section = styled.div`
  margin-bottom: 6rem;
  background-color: white;
`

export default props => (
  <Section>
    <Title>{props.title}</Title>
    {props.children}
  </Section>
)
