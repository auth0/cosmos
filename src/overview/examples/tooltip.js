import React from 'react'

import Container from '../ov-components/container'
import { Tooltip } from '../../components'

const Tooltips = () => (
  <Container title="Tooltip">
    <Tooltip top content="Hi! I am a Tooltip :D">
      HOVER ME
    </Tooltip>
  </Container>
)

export default Tooltips
