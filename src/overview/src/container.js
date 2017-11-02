import React from 'react'
import styled from 'styled-components'

import { Subheader } from '../../components/heading'

const Container = styled.div`
  margin: 50px 0;
`

export default props => (
  <Container>
    <Subheader>{props.title}</Subheader>
    {props.children}
  </Container>
)
