import React from 'react'

import Container from './container'
import { Heading } from '@auth0/cosmos'

const Colors = () => (
  <Container title="Typography Scale">
    <Heading size={1}>Heading 1</Heading>
    <Heading size={2}>Heading 2</Heading>
    <Heading size={3}>Heading 3</Heading>
    <Heading size={4}>Heading 4</Heading>
  </Container>
)

export default Colors
