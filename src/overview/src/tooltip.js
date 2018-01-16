import React from 'react'

import Container from './container'
import { Tooltip } from '../../components'

const Tooltips = () => (
  <Container title="Tooltip">
    <Tooltip top content="I am a tooltip on top" />
    <br />
    <Tooltip bottom content="I am a tooltip on bottom" />
  </Container>
)

export default Tooltips
