import React from 'react'
import styled from 'styled-components'

import { Heading5 } from '../../components'

const Container = styled.div`
  margin: 50px 0;
`

export default props => (
  <Container>
    <Heading5>{props.title}</Heading5>
    {props.children}
  </Container>
)
