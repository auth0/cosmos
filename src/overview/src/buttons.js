import React from 'react'

import Container from './container'
import { Button } from '../../components'

const Buttons = () => (
  <Container title="Buttons">
    <Button>Button</Button>
    <br />
    <Button primary>Button</Button>
    <br />
    <Button transparent>Button</Button>
    <br />
    <Button disabled>Button</Button>
  </Container>
)

export default Buttons
