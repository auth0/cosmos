import React from 'react'

import Container from './container'
import { Tooltip } from '../../components'

const Tooltips = () => (
  <Container title="Tooltip">
    <Tooltip>I am a tooltip on top</Tooltip>
    <br />
    <Tooltip bottom>I am a tooltip on bottom</Tooltip>
  </Container>
)

export default Tooltips
