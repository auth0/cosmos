import React from 'react'

import Container from './container'
import { Header } from '../../components'

const Colors = () => (
  <Container title="Typography Scale">
    <Header size={1}>H1 Header</Header>
    <Header size={2}>H2 Header</Header>
    <Header size={3}>H3 Header</Header>
    <Header size={4}>H4 Header</Header>
    <Header size={5}>H5 Header</Header>
  </Container>
)

export default Colors
