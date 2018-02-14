import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components'

const Container = styled.div`
  margin: 50px 0;
`

export default props => (
  <Container>
    <Header size={5}>{props.title}</Header>
    {props.children}
  </Container>
)
