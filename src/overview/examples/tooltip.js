import React from 'react'

import Example from '../ov-components/example'
import { Tooltip, Button } from 'auth0-cosmos'

const Tooltips = () => (
  <Example title="Tooltip" align="center">
    <Tooltip top content="Hi! I am a Tooltip :D">
      <Button>Hover over me!</Button>
    </Tooltip>
  </Example>
)

export default Tooltips
